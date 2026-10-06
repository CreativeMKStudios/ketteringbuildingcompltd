import { readdir, readFile, unlink, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "parse5";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const onPages = process.env.GITHUB_PAGES === "true";
const onCdn = process.env.CDN_PUBLISH === "true";
const cdnOrigin = "https://cdn.jsdelivr.net";
const cdnBase = "/gh/CreativeMKStudios/ketteringbuildingcompltd@site";
const pagesBase = "/ketteringbuildingcompltd";
const voidTags = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

function xmlText(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function xmlAttr(value) {
  return xmlText(value).replaceAll('"', "&quot;");
}

function serializeXml(node, raw = false) {
  if (node.nodeName === "#text") {
    if (!raw) return xmlText(node.value);
    const safe = node.value.replaceAll("]]>", "]]]]><![CDATA[>");
    return `<![CDATA[${safe}]]>`;
  }
  if (node.nodeName === "#comment") return "";
  if (node.nodeName === "#documentType") return "<!DOCTYPE html>";
  if (node.nodeName === "#document") {
    return `<?xml version="1.0" encoding="UTF-8"?>${node.childNodes.map((child) => serializeXml(child)).join("")}`;
  }

  const name = node.tagName;
  const attrs = [...(node.attrs || [])];
  if (name === "html" && !attrs.some((attr) => attr.name === "xmlns")) {
    attrs.unshift({ name: "xmlns", value: "http://www.w3.org/1999/xhtml" });
  }
  const rendered = attrs.map((attr) => ` ${attr.name}="${xmlAttr(attr.value)}"`).join("");
  if (voidTags.has(name)) return `<${name}${rendered}/>`;
  const isRaw = name === "script" || name === "style";
  const children = (node.childNodes || []).map((child) => serializeXml(child, isRaw)).join("");
  return `<${name}${rendered}>${children}</${name}>`;
}

function pageLinksToXhtml(value) {
  return value.replaceAll("/index.html", "/index.xhtml").replaceAll("/404.html", "/404.xhtml");
}

const base = onCdn ? cdnBase : onPages ? pagesBase : "/";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function toDirectoryIndex(pathname, prefix) {
  if (pathname === prefix) return `${prefix}/index.html`;
  if (!pathname.startsWith(`${prefix}/`)) return pathname;
  if (pathname.endsWith("/")) return `${pathname}index.html`;
  return pathname;
}

function rewriteUrl(value, prefix, origin) {
  if (!value || value.startsWith("#") || value.startsWith("mailto:") || value.startsWith("tel:") || value.startsWith("sms:")) {
    return value;
  }

  if (origin && value.startsWith(origin)) {
    const url = new URL(value);
    url.pathname = pageLinksToXhtml(toDirectoryIndex(url.pathname, prefix));
    return url.href;
  }

  if (value.startsWith("/")) return pageLinksToXhtml(toDirectoryIndex(value, prefix));
  return pageLinksToXhtml(value);
}

function rewriteSrcset(value, prefix, origin) {
  return value
    .split(",")
    .map((part) => {
      const trimmed = part.trim();
      if (!trimmed) return trimmed;
      const pieces = trimmed.split(/\s+/);
      pieces[0] = rewriteUrl(pieces[0], prefix, origin);
      return pieces.join(" ");
    })
    .join(", ");
}

function preparePublishedFiles({ prefix, origin }) {
  const normalized = prefix.replace(/\/$/, "");
  return {
    name: "prepare-published-files",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        if (!normalized) return;
        const root = fileURLToPath(dir);
        const attributePattern = new RegExp(
          `(href|src|action)="/(?!${escapeRegExp(normalized.slice(1))}/)`,
          "g",
        );

        async function walk(folder) {
          const entries = await readdir(folder, { withFileTypes: true });
          for (const entry of entries) {
            const path = join(folder, entry.name);
            if (entry.isDirectory()) {
              await walk(path);
              continue;
            }

            if (entry.name.endsWith(".html")) {
              let html = await readFile(path, "utf8");
              const prefixed = html.replace(attributePattern, `$1="${normalized}/`);
              const rewritten = origin
                ? prefixed
                    .replace(/(href|src|action|content)="([^"]*)"/g, (_, attr, value) => {
                      return `${attr}="${rewriteUrl(value, normalized, origin)}"`;
                    })
                    .replace(/srcset="([^"]*)"/g, (_, value) => {
                      return `srcset="${rewriteSrcset(value, normalized, origin)}"`;
                    })
                    .replace(new RegExp(`"(${escapeRegExp(origin)}[^"]+)"`, "g"), (_, value) => {
                      return `"${rewriteUrl(value, normalized, origin)}"`;
                    })
                : prefixed;
              const output = origin ? serializeXml(parse(rewritten)) : rewritten;
              const target = origin ? path.replace(/\.html$/, ".xhtml") : path;
              if (output !== html || target !== path) await writeFile(target, output);
              if (origin && target !== path) await unlink(path);
              continue;
            }

            if (!origin) continue;
            if (!/\.(xml|txt|webmanifest)$/.test(entry.name)) continue;
            const text = await readFile(path, "utf8");
            const directoryUrl = new RegExp(
              `${escapeRegExp(origin + normalized)}(?:/[A-Za-z0-9._~-]+)*/(?=["'<\\s])`,
              "g",
            );
            const next = text
              .replaceAll(`${pagesBase}/`, `${normalized}/`)
              .replace(directoryUrl, (match) => `${match}index.xhtml`)
              .replace(`"start_url": "${normalized}/"`, `"start_url": "${normalized}/index.xhtml"`);
            if (next !== text) await writeFile(path, next);
          }
        }

        await walk(root);
      },
    },
  };
}

export default defineConfig({
  site: onCdn ? cdnOrigin : onPages ? "https://creativemkstudios.github.io" : "http://localhost:4321",
  base,
  trailingSlash: "always",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
    preparePublishedFiles({
      prefix: base,
      origin: onCdn ? cdnOrigin : "",
    }),
  ],
});

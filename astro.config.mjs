import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Change `site` to the live domain before you publish. Canonical links and the sitemap use it.
export default defineConfig({
  site: "https://ketteringbuildingcompanyltd.co.uk",
  trailingSlash: "never",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
});

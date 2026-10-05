import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Public site: https://creativemkstudios.github.io/ketteringbuildingcompanyltd/
export default defineConfig({
  site: "https://creativemkstudios.github.io",
  base: "/ketteringbuildingcompanyltd",
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

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  redirects: {
    "/blog": "/blog/1",
    "/blog/home-2": "/blog/home-2/1",
    "/blog/home-3": "/blog/home-3/1",
  },
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    drafts: true,
    shikiConfig: {
      theme: "css-variables",
    },
  },
  site: "https://yourdomain.com",
  integrations: [sitemap()],
});

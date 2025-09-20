import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
export default defineConfig({
  redirects: {
    "/blog": "/blog/1",
    "/blog/home-2": "/blog/home-2/1",
    "/blog/home-3": "/blog/home-3/1",
    "/work/1": "/casestudies/sinequanone",
    "/work/2": "/casestudies/granular",
    "/work/3": "/casestudies/sekkaa",
    "/work/4": "/casestudies/earthwise",
    "/work/5": "/casestudies/stucko",
    "/work/6": "/casestudies/enviroson",
    "/work/sinequanone": "/casestudies/sinequanone",
    "/work/granular": "/casestudies/granular",
    "/work/sekkaa": "/casestudies/sekkaa",
    "/work/earthwise": "/casestudies/earthwise",
    "/work/stucko": "/casestudies/stucko",
    "/work/enviroson": "/casestudies/enviroson",
  },
  devToolbar: { enabled: false },
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts: true
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: "0.0.0.0",
      port: 5000,
      allowedHosts: true,
      hmr: {
        port: 5000,
        clientPort: 443,
        protocol: 'wss'
      }
    },
    preview: {
      host: "0.0.0.0",
      port: 5000,
      allowedHosts: true
    }
  },
  markdown: {
    drafts: process.env.NODE_ENV !== 'production',
    shikiConfig: {
      theme: "css-variables",
    },
  },
  site: process.env.REPL_SLUG ? `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co` : "https://yourdomain.com",
  integrations: [sitemap()],
});

import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";


import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: "https://zenocode-org.github.io/ecurie-ulysse/",

  base: "/ecurie-ulysse",
  output: "static",
  trailingSlash: "ignore",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
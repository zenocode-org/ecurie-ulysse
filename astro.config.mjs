import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { webcore } from "webcoreui/integration";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), webcore(), react()],
  site: "https://energy-template.vbartalis.dev",
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
import analyze from 'rollup-plugin-analyzer'

import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), mdx(), image()],
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'one-dark-pro',
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
  vite: {
    build: {
      build: {
        rollupOptions: {
          plugins: [analyze({
            skipFormatted: true,
            onAnalysis({
              bundleSize,
              bundleOrigSize,
              bundleReduction,
              moduleCount
            }) {
              console.info('Does it work ?')
              if (!commandOptions.silent) {
                console.info(
                  `Bundle size: ${Math.round((bundleSize / 1000000) * 100) / 100}Mb`
                );
                console.info(
                  `Original size: ${Math.round((bundleOrigSize / 1000000) * 100) /
                  100}Mb`
                );
                console.info(`Reduction: ${bundleReduction}%`)
              }
            }
          })]
        },
      },
    }
  }
});
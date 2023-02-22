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
  vite: {
    ssr: {
      /**
       * @see https://github.com/withastro/astro/issues/3174
       */
      noExternal: ['@radix-ui/react-hover-card']
    }
  },
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'one-dark-pro',
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
});
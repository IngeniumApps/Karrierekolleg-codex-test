// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const base = process.env.PUBLIC_BASE_URL?.replace(/^https?:\/\/[^/]+/, '') || '/';
const site = process.env.PUBLIC_BASE_URL || 'http://localhost:4321';

// https://astro.build/config
export default defineConfig({
  base,
  site,

  // always add trailing slashes to URLs --> /
  trailingSlash: 'always',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },
});

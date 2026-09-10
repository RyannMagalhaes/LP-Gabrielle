import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// TODO: replace with the real production domain before wiring canonical/OG/sitemap.
const SITE_URL = 'https://www.gabriellefavere.com.br';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  vite: {
    plugins: [tailwind()],
  },
});

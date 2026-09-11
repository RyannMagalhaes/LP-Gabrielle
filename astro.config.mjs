import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// Custom domain wired via public/CNAME + GitHub Pages custom domain setting.
// Served from the domain root, so no `base` subpath is needed.
const SITE_URL = 'https://gabriellelp.com.br';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  vite: {
    plugins: [tailwind()],
  },
});

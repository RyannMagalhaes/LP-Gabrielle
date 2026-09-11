import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// public/CNAME + Pages custom domain are wired for gabriellelp.com.br, but the
// DNS isn't pointed there yet - the site is only actually reachable at the
// default project URL for now, which needs the /LP-Gabrielle base path.
// TODO: once gabriellelp.com.br DNS resolves to GitHub Pages, drop `base`
// below and switch SITE_URL to the custom domain.
const SITE_URL = 'https://ryannmagalhaes.github.io';
const BASE_PATH = '/LP-Gabrielle/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  output: 'static',
  vite: {
    plugins: [tailwind()],
  },
});

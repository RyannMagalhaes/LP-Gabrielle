import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// TODO: replace with the real production domain (and drop `base`) once
// gabriellefavere.com.br is wired to GitHub Pages. Until then this deploys to
// the default project URL, https://ryannmagalhaes.github.io/LP-Gabrielle/.
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

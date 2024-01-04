import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import solidJs from '@astrojs/solid-js';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), solidJs(), pagefind()],
});

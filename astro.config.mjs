// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Vercel only assigns the final *.vercel.app URL once you import the repo --
  // update this to match right after the first deploy (Project Settings > Domains).
  site: 'https://personal-site.vercel.app',
  integrations: [mdx()]
});
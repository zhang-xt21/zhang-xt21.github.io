import { defineConfig } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
    site: 'https://zhang-xt21.github.io',
    
    markdown: {
        processor: unified({
            remarkPlugins: [remarkMath],
            rehypePlugins: [rehypeKatex],
        }),
    },
});

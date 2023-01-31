import { defineConfig } from 'astro/config';

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],
  	// Enable Custom Markdown options, plugins, etc.
	markdown: {
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'dracula',
			// Learn more about this configuration here:
			// https://docs.astro.build/en/guides/markdown-content/#syntax-highlighting
		},
	},
});
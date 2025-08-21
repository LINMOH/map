import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { resolve } from "pathe";
import { defineConfig } from "vite";

const srcdir = resolve(import.meta.dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],

	resolve: {
		alias: {
			"@components": resolve(srcdir, "components"),
			"@assets": resolve(srcdir, "assets"),
			"@config": resolve(srcdir, "config"),
		},
	},
});

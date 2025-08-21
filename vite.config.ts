import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],

	resolve: {
		alias: {
			"@components": resolve(__dirname, "./src/components"),
			"@assets": resolve(__dirname, "./src/assets"),
			"@config": resolve(__dirname, "./src/config"),
		},
	},
});

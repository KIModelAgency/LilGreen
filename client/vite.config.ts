import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("../attached_assets", import.meta.url)),
        }
  },
  server: { fs: { allow: [".."] } },
  build: { outDir: "dist", emptyOutDir: true }
});

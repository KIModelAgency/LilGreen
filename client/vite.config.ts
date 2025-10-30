import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "client",              // <— wichtig: dein Client liegt in /client
  plugins: [react()],
  build: {
    outDir: "dist",            // <— Output im Repo-Root (Vercel Output Directory)
    emptyOutDir: true
  },
  server: {
    port: 5173
  }
});

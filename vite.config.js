import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        format: "es",
      },
    },
  },
});

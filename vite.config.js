import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
  },
  rollupInputOptions: {
    input: {
      main: "./src/main.js",
    },
  },
  rollupOutputOptions: {
    output: {
      assetFileNames: "/src/assets/[name].[ext]",
    },
  },
});

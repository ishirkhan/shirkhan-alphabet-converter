const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    minify: true,
    outDir: "dist",
    sourcemap: false,
    lib: {
      name: "shirkhan-alphabet-converter",
      entry: path.resolve(__dirname, "src/converter/index.ts"),
      fileName: (format) => `shirkhan-alphabet-converter.${format}.js`,
    },
    rollupOptions: {},
  },
});

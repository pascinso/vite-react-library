import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tsConfigPaths from "vite-tsconfig-paths";
import packageJson from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve("src", "index.tsx"),
      fileName: (format) => `vite-react-library.${format}.js`,
      formats: ["es", "umd"],
      name: "ViteReactLibrary",
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
    sourcemap: true,
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({ insertTypesEntry: true }),
    react(),
    tsConfigPaths(),
  ],
});

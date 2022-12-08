import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import packageJson from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
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
  },
  plugins: [
    cssInjectedByJsPlugin(),
    dts({ insertTypesEntry: true }),
    react(),
    tsConfigPaths(),
  ],
});

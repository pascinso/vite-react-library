import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import linter from "vite-plugin-linter";
import dts from "vite-plugin-dts";
import { resolve } from "node:path";
import * as packageJson from "./package.json";

const { linterPlugin, EsLinter } = linter;

// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  build: {
    lib: {
      entry: resolve("src", "components/index.ts"),
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
    dts({
      include: ["src/components"],
    }),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })],
    }),
    react(),
    tsConfigPaths(),
  ],
}));

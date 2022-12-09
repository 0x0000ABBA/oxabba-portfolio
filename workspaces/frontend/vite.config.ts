import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import checker from "vite-plugin-checker";
import legacy from '@vitejs/plugin-legacy';

import eruda from 'vite-plugin-eruda';
import path from "path";

import { version } from "./package.json";
import { compilerOptions } from "./tsconfig.json";

const v = version || "0.0.0";
const dir = compilerOptions.outDir;

export default defineConfig({
  build: {
    outDir: path.join(dir, "v", v),
    minify: "terser",
    rollupOptions: {
      output: {

        chunkFileNames: "js/[hash].js",
        entryFileNames: 'js/[hash].js',

        assetFileNames: ({ name }) => {
          if (/\.css$/.test(name ?? '')) {
            if (/index/.test(name ?? '')) {
              return 'css/[hash][extname]';
            }
            return 'css/[hash][extname]';
          };
          return 'assets/[hash][extname]';
        }

      }
    }
  },
  server: { port: 18300, host: "0.0.0.0" },
  plugins: [
    tsconfigPaths(),
    react(),
    legacy({ targets: ["defaults", "not IE 11"] }),
    checker({ typescript: true, overlay: true }),
    eruda()
  ]
})

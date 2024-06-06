import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  tools: {
    rspack: {
      optimization: {
        minimize: false,
        moduleIds: 'named'
      },
      module: {
        rules: [
          {
            test: /utils\.js/,
            sideEffects: false,
          },
        ],
      },
    },
  },
});

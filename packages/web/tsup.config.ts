// import { Options, defineConfig } from 'tsup'

// export default defineConfig((options: Options) => ({
//   treeshake: true,
//   splitting: true,
//   entry: ['src/**/*.{ts,tsx}'],
//   format: ['cjs', 'esm'],
//   dts: true,
//   clean: true, // Add this line to clean the output directory before bundling
//   outDir: 'dist', // Specify the output directory
//   bundle: true, // Enable bundle output
//   ...options,
// }));

import { defineConfig } from "tsup";

const commonConfig = {
  clean: true,
  //splitting: false,
  // Skip until .d.ts.map is also supported https://github.com/egoist/tsup/issues/564
  // dts: true,
  sourcemap: true,
};

export default defineConfig([
  // actual exposed modules = 1 per component
  {
    // This is a demo with one component but you can use a glob here
    entry: ["./components/**/*.ts"],
    //["./components/core/Loading.tsx"],
    ...commonConfig,
    format: ["esm"],
    // TODO: it's not respect automatically
  },
  // index files to allow named imports
  // inspired by react-bootstrap structure
  {
    entry: ["index.ts", "./components/index.ts"],
    ...commonConfig,
    // index files must NOT be bundled!
    // it acts as a map towards bundled components
    // but never rebundles them
    bundle: false,
    format: ["esm"],
    outDir: "dist",
  },
]);
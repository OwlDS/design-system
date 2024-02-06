import type { StorybookConfig } from "@storybook/web-components-vite";
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
  ], 
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },
  docs: {
    autodocs: true,
  },
  async viteFinal(config) {
    const include =  [
      ...(config.optimizeDeps?.include ?? []),
      '@storybook/web-components',
    ]

    const exclude = [
      ...(config.optimizeDeps?.exclude ?? []), 
      'lit-html',
      'lit', 
    ]

    config.optimizeDeps = {
      ...config.optimizeDeps,
      include,
      exclude,
    }
    
		return config
	},
};
export default config;

import { Preview, setCustomElementsManifest } from '@storybook/web-components';
import customElements from '@owl/web/custom-elements.json';

setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

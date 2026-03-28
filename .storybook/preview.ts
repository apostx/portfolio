import type { Preview } from '@storybook/html';

import '../src/styles/global.css';
import '../src/styles/tokens.css';
import '../src/styles/designs/theme.css';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      options: {
        light: { name: 'Light', value: '#ffffff' },
        dark: { name: 'Dark', value: '#1a1a1a' },
      },
    },
  },
};

export default preview;

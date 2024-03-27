import type { Preview } from '@storybook/react';
import { StyleDecorator } from 'src/shared/config/storybook/StyleDecorator';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['shared', 'entities', 'features', 'widgets', 'pages', 'app'],
      },
    },
  },
  decorators: [StyleDecorator],
};

export default preview;

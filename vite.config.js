import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: /\.(jsx|tsx)$/,
    babel: {
      plugins: ['styled-components'],
      babelrc: false,
      configFile: false,
    },
  })],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': `${path.resolve(__dirname, 'src')}`,
    },
    extensions: ['.js', '.jsx'],
  },
});

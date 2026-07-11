import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    // NOTE: if you deploy this to a subpath (e.g. GitHub Pages project site
    // at username.github.io/blockforge/), set this to '/blockforge/' for
    // production builds. Leaving it as '/' will 404 all built assets on a
    // subpath host -- this bit us on the sibling world26 project.
    base: isProd ? '/blockforge/' : '/',
    envPrefix: 'VITE_',
    server: {
      port: 4100,
      host: '0.0.0.0',
      proxy: {
        '/api': {
          target: 'http://localhost:3101',
          changeOrigin: true,
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});

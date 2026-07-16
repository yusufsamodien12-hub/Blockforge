import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    // For Vercel deployment the site is served from the root, not a subpath.
    // Leave as '/' so assets resolve correctly.
    base: '/',
    envPrefix: 'VITE_',
    server: {
      strictPort: true,
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

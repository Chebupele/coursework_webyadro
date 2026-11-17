import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const { API_TARGET = 'http://127.0.0.1:8080' } = loadEnv(
    mode,
    process.cwd(),
    'API_TARGET',
  );

  return {
    plugins: [react()],
    server: {
      host: '127.0.0.1',
      port: 3000,
      strictPort: true,
      proxy: {
        '^/api/v1(?:/|\\?|$)': API_TARGET,
      },
    },
  };
});

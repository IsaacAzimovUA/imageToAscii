import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const { APP_HOST, APP_PORT } = process.env;

export default defineConfig({
  plugins: [react()],
  server: {
    host: APP_HOST,
    port: APP_PORT,
  },
  define: {
    'process.env': process.env,
  },
});

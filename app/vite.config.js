import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: process.env.APP_PORT,
  },
  define: {
    'process.env': process.env,
  },
});

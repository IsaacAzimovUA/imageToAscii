import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const { APP_PORT } = process.env;

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    port: APP_PORT,
  },
});

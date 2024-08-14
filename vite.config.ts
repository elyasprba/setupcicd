import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/setupcicd/', // Add only this section
  server: {
    host: '0.0.0.0',
    port: 4200,
  },
  preview: {
    port: 4200,
  },
});

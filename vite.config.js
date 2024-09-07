import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://homelyft.vercel.app', // Update dengan URL API Anda jika berbeda
        secure: false,
      },
    },
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});

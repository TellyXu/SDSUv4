import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // Adjust if deployed in a subdirectory, or leave as "/" for root
  plugins: [react()],

  server: {
    host:'0.0.0.0',
    proxy: {
      '/dev': {
        target: 'http://127.0.0.1:5000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dev/, '')
      },
    }
  }
});

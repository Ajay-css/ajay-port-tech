import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression' // Added

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      algorithm: 'gzip', // Creates app.js.gz files for server compression
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress', // Creates even smaller .br files for modern browsers
      ext: '.br',
    })
  ],
})
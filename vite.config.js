import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'src',                // 👈 your app lives in src/
  plugins: [react()],
  build: {
    outDir: '../dist',        // 👈 build output goes to dist/ outside src
    emptyOutDir: true         // 👈 clean old files in dist before build
  }
})

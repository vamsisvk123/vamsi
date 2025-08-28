import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/your-actual-repo-name/', // Replace with YOUR GitHub repo name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})

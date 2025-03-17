import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-icons/bs']
  },
  resolve: {
    alias: {
      'react-icons': 'react-icons'
    }
  },
  server: {
    port: 3000,
    open: true
  }
})

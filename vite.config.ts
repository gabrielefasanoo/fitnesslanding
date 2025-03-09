import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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

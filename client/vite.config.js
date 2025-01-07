import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      // je api endpoint dia start hobe seta bujia diar jonno
      '/api/': {
        target: 'http://localhost:8000',
        //target: 'https://full-stack-eeshop-mart-e-commerce-app.onrender.com',
        changeOrigin: true,
        secure: false
      }
    }
  },

  //SETUP ShadCN UI
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})

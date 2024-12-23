import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  //SETUP ShadCN UI
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

})

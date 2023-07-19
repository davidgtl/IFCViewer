import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import processSymbols from "./src/plugins/svgSymbols"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  plugins: [react(), processSymbols()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
    ],
  }
})
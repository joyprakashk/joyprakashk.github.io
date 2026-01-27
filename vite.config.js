import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  //since deploying to joyprakashk.github.io
  plugins: [react()],
  assetsInclude: ['**/*.glb'],  //maintain your existing GLB support
})

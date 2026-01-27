import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  //for root domain
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})

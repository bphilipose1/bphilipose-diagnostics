import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bphilipose.github.io', // For bphilipose.github.io, this must be '/'
})
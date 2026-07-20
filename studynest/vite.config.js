import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/studynest/' : '/',
    server: {
      port: 5173,
      host: true
    }
  }
})
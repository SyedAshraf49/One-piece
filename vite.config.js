import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  },
  build: {
    rollupOptions: {
      onwarn(warning) {
        // Suppress Rollup warnings for intentional external module handling
        if (warning.code === 'UNRESOLVED_IMPORT') return
        if (warning.code === 'THIS_IS_UNDEFINED') return
      }
    }
  }
})

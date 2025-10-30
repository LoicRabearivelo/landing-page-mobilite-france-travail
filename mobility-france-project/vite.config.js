import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // allow the specified external host (ngrok) so Vite accepts requests proxied through it
    // Add any other hosts you need here as strings or use 'host: true' for broader allowances.
    allowedHosts: [
      'unpendent-merlin-overhonestly.ngrok-free.dev'
    ]
  }
})

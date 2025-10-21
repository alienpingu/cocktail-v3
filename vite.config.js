import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    host: true,
    allowedHosts: [
      'cocktail.brtsml.com'
    ]
  }
})

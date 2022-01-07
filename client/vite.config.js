import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'

const modulesConfig = {
  generateScopedName: '[name]-[local]-[hash:8]',
  localsConvention: null
}

export default defineConfig({
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  css: {
    modules: {
      modulesConfig
    }
  }
})

import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build:{
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-color4bg',
      formats: ['es'],
      fileName: 'react-color4bg',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      'color4bg': resolve(__dirname, 'color4bg.js'),
    },
  },
  plugins: [react()],
})

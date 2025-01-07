import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build:{
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'react-color4bg',
      formats: ['es'],
      fileName: 'index',
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
  plugins: [react(), dts({ tsconfigPath: resolve(__dirname, 'tsconfig.app.json') })],
})

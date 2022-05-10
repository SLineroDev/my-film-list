/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  build: {
    outDir: 'build'
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') }
    ]
  },
  test: {
    globals: true,
    environment: 'happy-dom'
  },
  plugins: [react()]
})

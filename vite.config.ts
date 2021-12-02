import { defineConfig } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000
  },
  plugins: [
    vue(),
    viteMockServe({}) // mock数据
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})

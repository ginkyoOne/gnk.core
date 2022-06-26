import { fileURLToPath, URL } from 'url';
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { format, resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/style.scss";`
      }
    }
  },
  build: {

    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'gnk.core',
      fileName: (format) => `gnk.core.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

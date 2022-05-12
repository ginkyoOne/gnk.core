import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { format, resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/scss/style.scss";`
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




//   * vite - plugin - pwa generate manifest.json and register services worker to enable PWA
//     *
//  * @see https://github.com/antfu/vite-plugin-pwa
//  * /
/*     VitePWA({
      registerType: 'autoUpdate',
      base: '/',
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        name: 'Treebū Admin',
        short_name: 'Treebū Admin',
        start_url: '/?utm_source=pwa',
        display: 'standalone',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }), */

/**
* rollup-plugin-purgecss plugin is responsible of purging css rules
* that are not used in the bundle
*
* @see https://github.com/FullHuman/purgecss/tree/main/packages/rollup-plugin-purgecss
*/
    // purgecss({
    //   content: [`./src/**/*.vue`],
    //   variables: false,
    //   safelist: {
    //     standard: [
    //       /(autv|lnil|lnir|fas?)/,
    //       /-(leave|enter|appear)(|-(to|from|active))$/,
    //       /^(?!(|.*?:)cursor-move).+-move$/,
    //       /^router-link(|-exact)-active$/,
    //       /data-v-.*/,
    //     ],
    //   },
    //   defaultExtractor(content) {
    //     const contentWithoutStyleBlocks = content.replace(
    //       /<style[^]+?<\/style>/gi,
    //       ''
    //     )
    //     return (
    //       contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) ||
    //       []
    //     )
    //   },
    // }),

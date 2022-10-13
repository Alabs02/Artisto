import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { ViteAliases } from 'vite-aliases';
import sassDts from 'vite-plugin-sass-dts';
import path from 'path';

export default defineConfig({
  server: {
    port: 3060
  },

  plugins: [
    react(),
    sassDts({
      enabledMode: ['development', 'production'],
      global: {
        generate: true,
        outFile: path.resolve(__dirname, './src/styles/global.d.ts'),
      },
    })
  ],

  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `
        //   @import "./src/assets/scss/_colors.scss";
        //   @import "./src/assets/scss/_utilities.scss";
        //   @import "./src/assets/scss/_mixins.scss";
        //   @import "./src/assets/scss/_breakpoints.scss";
        // `
      }
    }
  },

  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      }
    ]
  }
})

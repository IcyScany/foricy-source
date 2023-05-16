import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { Plugin as importToCDN, autoComplete } from "vite-plugin-cdn-import";
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    importToCDN({
      module: [
        {
          name: "vue",
          var: "Vue",
          path: "https://unpkg.com/vue@next",
        },
        {
          name: "naive-ui",
          var: "NaiveUi",
          path: "https://unpkg.com/naive-ui",
        },
      ],
    }),
  ],

  base: "./", //设置为相对路径

  publicDir: 'public',

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
 
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        // 生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});

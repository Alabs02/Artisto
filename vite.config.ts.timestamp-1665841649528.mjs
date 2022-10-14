// vite.config.ts
import { defineConfig } from "file:///C:/Users/Usman.Alabura/Documents/Projects/ReactProjects/Artisto/node_modules/.pnpm/vite@3.1.7_sass@1.55.0/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Usman.Alabura/Documents/Projects/ReactProjects/Artisto/node_modules/.pnpm/@vitejs+plugin-react@2.1.0_vite@3.1.7/node_modules/@vitejs/plugin-react/dist/index.mjs";
import sassDts from "file:///C:/Users/Usman.Alabura/Documents/Projects/ReactProjects/Artisto/node_modules/.pnpm/vite-plugin-sass-dts@1.1.44_4gbl3cfbci75rn2dnnq7zibrni/node_modules/vite-plugin-sass-dts/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\Usman.Alabura\\Documents\\Projects\\ReactProjects\\Artisto";
var vite_config_default = defineConfig({
  server: {
    port: 3060
  },
  plugins: [
    react(),
    sassDts({
      enabledMode: ["development", "production"],
      global: {
        generate: true,
        outFile: path.resolve(__vite_injected_original_dirname, "./src/styles/global.d.ts")
      }
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {}
    }
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__vite_injected_original_dirname, "src")
      }
    ]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVc21hbi5BbGFidXJhXFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxSZWFjdFByb2plY3RzXFxcXEFydGlzdG9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVzbWFuLkFsYWJ1cmFcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXFJlYWN0UHJvamVjdHNcXFxcQXJ0aXN0b1xcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVXNtYW4uQWxhYnVyYS9Eb2N1bWVudHMvUHJvamVjdHMvUmVhY3RQcm9qZWN0cy9BcnRpc3RvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcbi8vIGltcG9ydCB7IFZpdGVBbGlhc2VzIH0gZnJvbSAndml0ZS1hbGlhc2VzJztcbmltcG9ydCBzYXNzRHRzIGZyb20gJ3ZpdGUtcGx1Z2luLXNhc3MtZHRzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDYwXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgc2Fzc0R0cyh7XG4gICAgICBlbmFibGVkTW9kZTogWydkZXZlbG9wbWVudCcsICdwcm9kdWN0aW9uJ10sXG4gICAgICBnbG9iYWw6IHtcbiAgICAgICAgZ2VuZXJhdGU6IHRydWUsXG4gICAgICAgIG91dEZpbGU6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcuL3NyYy9zdHlsZXMvZ2xvYmFsLmQudHMnKSxcbiAgICAgIH0sXG4gICAgfSlcbiAgXSxcblxuICBjc3M6IHtcbiAgICBwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG4gICAgICBzY3NzOiB7XG4gICAgICAgIC8vIGFkZGl0aW9uYWxEYXRhOiBgXG4gICAgICAgIC8vICAgQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9zY3NzL19jb2xvcnMuc2Nzc1wiO1xuICAgICAgICAvLyAgIEBpbXBvcnQgXCIuL3NyYy9hc3NldHMvc2Nzcy9fdXRpbGl0aWVzLnNjc3NcIjtcbiAgICAgICAgLy8gICBAaW1wb3J0IFwiLi9zcmMvYXNzZXRzL3Njc3MvX21peGlucy5zY3NzXCI7XG4gICAgICAgIC8vICAgQGltcG9ydCBcIi4vc3JjL2Fzc2V0cy9zY3NzL19icmVha3BvaW50cy5zY3NzXCI7XG4gICAgICAgIC8vIGBcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiBbXG4gICAgICB7XG4gICAgICAgIGZpbmQ6ICdAJyxcbiAgICAgICAgcmVwbGFjZW1lbnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSxcbiAgICAgIH1cbiAgICBdXG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZYLFNBQVMsb0JBQW9CO0FBQzFaLE9BQU8sV0FBVztBQUVsQixPQUFPLGFBQWE7QUFDcEIsT0FBTyxVQUFVO0FBSmpCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFFQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixhQUFhLENBQUMsZUFBZSxZQUFZO0FBQUEsTUFDekMsUUFBUTtBQUFBLFFBQ04sVUFBVTtBQUFBLFFBQ1YsU0FBUyxLQUFLLFFBQVEsa0NBQVcsMEJBQTBCO0FBQUEsTUFDN0Q7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNLENBT047QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLGFBQWEsS0FBSyxRQUFRLGtDQUFXLEtBQUs7QUFBQSxNQUM1QztBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K

import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { join } from "path";

export default defineConfig({
  plugins: [reactRefresh()],
  base: "http://localhost:3030",
  server: {
    port: 3030,
    strictPort: true,
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: {
        "test-bundle": join(__dirname, "src/main.tsx"),
      },
    },
  },
  define: {
    // manually define this to work around https://github.com/vitejs/vite/issues/4786
    __VITE_IS_MODERN__: true,
  },
});

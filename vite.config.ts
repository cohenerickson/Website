import { defineConfig } from "vite";
import solid from "solid-start";

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
    strictPort: true
  }
});

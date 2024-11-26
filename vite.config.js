import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ jsxRuntime: "automatic" })],
  base: "/react_weather-app",
});

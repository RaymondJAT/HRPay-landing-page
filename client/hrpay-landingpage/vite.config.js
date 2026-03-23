import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");

  console.log("Environment:", env.VITE_ENV);
  console.log(
    "Main API:",
    env.VITE_DEVELOPMENT_API,
    "->",
    env.VITE_PRODUCTION_API,
  );
  console.log(
    "Tax API:",
    env.VITE_TAX_API_DEVELOPMENT,
    "->",
    env.VITE_TAX_API_PRODUCTION,
  );
  console.log("Client Port:", env.VITE_CLIENT_PORT);
  console.log("Server Port:", env.VITE_SERVER_PORT);

  // Determine API URLs based on environment
  const MAIN_API_URL =
    env.VITE_ENV === "development"
      ? env.VITE_DEVELOPMENT_API
      : env.VITE_PRODUCTION_API;

  const TAX_API_URL =
    env.VITE_ENV === "development"
      ? env.VITE_TAX_API_DEVELOPMENT
      : env.VITE_TAX_API_PRODUCTION;

  // Parse allowed origins
  const allowedOrigins = env.VITE_ALLOWED_ORIGIN
    ? env.VITE_ALLOWED_ORIGIN.split(",")
    : [];

  return {
    plugins: [react(), tailwindcss()],
    server: {
      port: parseInt(env.VITE_CLIENT_PORT) || 5173,
      allowedHosts: allowedOrigins,
      proxy: {
        // Proxy for main API (HR, Payroll, etc.)
        "/api-cms": {
          target: MAIN_API_URL,
          changeOrigin: true,
        },
        // Proxy for Tax Calculator API
        "/tax-api": {
          target: TAX_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/tax-api/, ""),
        },
      },
    },
    preview: {
      port: parseInt(env.VITE_SERVER_PORT) || 3070,
      allowedHosts: allowedOrigins,
      proxy: {
        "/api-cms": {
          target: MAIN_API_URL,
          changeOrigin: true,
        },
        "/tax-api": {
          target: TAX_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/tax-api/, ""),
        },
      },
    },
    build: {
      outDir: "dist",
      rollupOptions: {},
      target: "modules",
      minify: "terser",
      sourcemap: false,
      emptyOutDir: true,
    },
  };
});

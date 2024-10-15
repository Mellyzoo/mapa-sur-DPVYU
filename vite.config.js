import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({

  plugins: [
    react(),
    VitePWA({
      base: "/mapa-sur-DPVYU",
      manifest: false, // Desactiva la generación del manifiesto automático
      registerType: "autoUpdate",
      injectRegister: "auto", // Cambia esta configuración para asegurarte de que el SW se registre automáticamente en el lugar correcto
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
     

      workbox: {
        globDirectory: "dist",
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
        skipWaiting: true,
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        navigateFallback: "/index.html", // Ruta fallback en caso de que no se encuentre una ruta
        navigateFallbackAllowlist: [/^\/mapa-sur-DPVYU\//], // Permitir la ruta "/mapaDPVyU/"
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/\w+\.tile\.openstreetmap\.org\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "osm-tiles",
              expiration: {
                maxEntries: 500,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
                purgeOnQuotaError: true, // Borrar si se excede el almacenamiento
              },
              cacheableResponse: {
                statuses: [0, 200],
              },

              fetchOptions: {
                credentials: "include", // Asegúrate de incluir credenciales si es necesario
              },
            },
          },

          // ... tus otras configuraciones de runtimeCaching ...
        ],
       
      },

      devOptions: {
        enabled: true,
        navigateFallback: "/mapa-sur-DPVYU/index.html",
        suppressWarnings: false,
        type: "module",
      },
    }),
  ],
  build: {
    outDir: "dist", // Carpeta de salida para la build
    sourcemap: true, // Opcional, útil para debugging
    publicDir: "public"
  },
  css: {
    devSourcemap: true,
  },
  
});

import { VitePWA } from "vite-plugin-pwa";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/mapa-sur-DPVYU/",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      // injectRegister: "auto", // Cambia esta configuración para asegurarte de que el SW se registre automáticamente en el lugar correcto
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "mapa-sur-DPVYU",
        short_name: "mapa",
        start_url: "/",
        scope: "/",
        lang: "es",
        id: "mapa-sur-DPVYU",
        description:
          "mapa para marcar la geolocalizacion de edificios o viviendas para llegar más rapido",
        theme_color: "#ffffff",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      screenshots: [
        {
          src: "screenshot-desktop.png",
          sizes: "1280x720",
          type: "image/png",
          form_factor: "wide",
        },
        {
          src: "screenshot-mobile.png",
          sizes: "720x1280",
          type: "image/png",
          form_factor: "narrow",
        },
      ],

      workbox: {
        globDirectory: "/home/lean/Desktop/mapa-sur-DPVYU/",
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
        // skipWaiting: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/\w+\.tile\.openstreetmap\.org\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "osm-tiles",
              expiration: {
                maxEntries: 1000,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
                purgeOnQuotaError: true, // Borrar si se excede el almacenamiento
              },
              cacheableResponse: {
                statuses: [0, 200],
              },

              // fetchOptions: {
              //   credentials: 'include', // Asegúrate de incluir credenciales si es necesario
              // },
            },
          },

          // ... tus otras configuraciones de runtimeCaching ...
        ],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        navigateFallback: "/mapa-sur-DPVYU/index.html", // Ruta fallback en caso de que no se encuentre una ruta
        navigateFallbackAllowlist: [/^\/mapa-sur-DPVYU\//], // Permitir la ruta "/mapaDPVyU/"
        // additionalManifestEntries: [
        //   { url: "/mapa-sur-DPVYU/index.html", revision: null },
        // ],
      },

      devOptions: {
        enabled: true,
        navigateFallback: "/mapa-sur-DPVYU/index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  build: {
    outDir: "dist", // Carpeta de salida para la build
    sourcemap: true, // Opcional, útil para debugging
  },
  css: {
    devSourcemap: true,
  },
});

import { defineConfig } from 'vite'
import netlify from "@netlify/vite-plugin";
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), netlify()],
  server: {
    allowedHosts: ['devserver-uat--egraminservices.netlify.app', 'egraminservices.in'],
  },
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
  },
})

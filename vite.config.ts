import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const r2PublicUrl = env.VITE_R2_PUBLIC_URL || 'https://pub-0ced7f0e94b24d54a8ad2db4c5d26104.r2.dev'

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Proxy R2 in dev to avoid CORS when bucket has no CORS policy
        '/r2-proxy': {
          target: r2PublicUrl,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/r2-proxy/, ''),
          secure: true,
          configure: (proxy) => {
            proxy.on('proxyReq', (proxyReq) => {
              proxyReq.setHeader('Accept', '*/*')
            })
          },
        },
      },
    },
  }
})


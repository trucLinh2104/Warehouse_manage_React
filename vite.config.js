import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '10.160.111.23', // hoặc '0.0.0.0' để truy cập từ mạng LAN
    port: 1576,              // thay đổi port tùy ý
    strictPort: true,        // nếu port đang được dùng, không tự động chọn port khác
  }
})

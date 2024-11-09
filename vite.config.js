import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Shoping/',  // Ensure this matches the exact GitHub repo name
});

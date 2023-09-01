import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import gltf from 'rollup-plugin-gltf';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    gltf({
      include: '**/*.gltf',
      exclude: 'artwork/*.gltf',
      inline: false,
    }),
  ],
});

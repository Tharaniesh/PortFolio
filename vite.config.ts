import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const base = env.VITE_BASE_PATH || (mode === 'production' ? './' : '/');

  return {
    plugins: [react()],
    base,
    build: {
      sourcemap: false,
      target: 'es2020',
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules/@react-three/drei')) {
              return 'drei-vendor';
            }

            if (id.includes('node_modules/@react-three/fiber')) {
              return 'r3f-vendor';
            }

            if (id.includes('node_modules/three')) {
              return 'three-core';
            }

            if (id.includes('node_modules/framer-motion')) {
              return 'motion-vendor';
            }
          }
        }
      }
    }
  };
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

const repoBase = '/PortFolio/';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? repoBase : '/',
  build: {
    sourcemap: false,
    target: 'es2020'
  }
});

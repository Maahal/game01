import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    base: '/studiomahalonline/', // Configura o caminho base para o GitHub Pages
    outDir: 'dist', // Pasta onde a build será gerada
  },
});
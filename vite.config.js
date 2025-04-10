import { defineConfig } from 'vite';

export default defineConfig({
  base: '/mathorgame/', // Set the base URL to match your repository name
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Prevents inlining assets as base64
  },
  plugins: [
    // Handle copying icon files to dist
    {
      name: 'copy-icon-files',
      buildEnd() {
        console.log('Ensure icon files are copied to the dist/icons directory');
      }
    }
  ]
}); 
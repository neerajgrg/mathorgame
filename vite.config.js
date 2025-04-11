import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';

// Custom plugin to copy all icon files to the dist directory
const copyIconsPlugin = {
  name: 'copy-icons-plugin',
  buildEnd() {
    // This runs after the build is complete
    console.log('Copying icon files to dist...');
  },
  closeBundle() {
    // Create icons directory in dist if it doesn't exist
    if (!fs.existsSync('dist/icons')) {
      fs.mkdirSync('dist/icons', { recursive: true });
    }
    
    // Copy all files from public/icons to dist/icons
    try {
      if (fs.existsSync('public/icons')) {
        const files = fs.readdirSync('public/icons');
        files.forEach(file => {
          if (file !== 'generate-icons.js') { // Skip the generator script
            fs.copyFileSync(
              resolve('public/icons', file),
              resolve('dist/icons', file)
            );
            console.log(`Copied: ${file} to dist/icons/`);
          }
        });
      }
    } catch (err) {
      console.error('Error copying icon files:', err);
    }
  }
};

export default defineConfig({
  base: '/mathorgame/', // Set the base URL to match your repository name
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0, // Prevents inlining assets as base64
    rollupOptions: {
      // Make sure service worker files are copied to dist
      input: {
        main: resolve(__dirname, 'index.html'),
        sw: resolve(__dirname, 'public/sw.js'),
        register: resolve(__dirname, 'public/register-sw.js')
      }
    }
  },
  plugins: [copyIconsPlugin]
}); 
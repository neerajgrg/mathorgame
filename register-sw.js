// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Get the base path for GitHub Pages
    const basePath = '/mathorgame/';
    
    // Register service worker with the correct scope for GitHub Pages
    navigator.serviceWorker.register(`${basePath}sw.js`, { scope: basePath })
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
} 
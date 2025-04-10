// Register service worker for PWA functionality
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // Get the base path (for GitHub Pages compatibility)
    const basePath = location.pathname.endsWith('/') 
      ? location.pathname 
      : location.pathname + '/';
    
    // Register service worker with the correct scope for GitHub Pages
    navigator.serviceWorker.register('./sw.js', { scope: basePath })
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
} 
const CACHE_NAME = 'mathorgame-v1';

// Helper to get relative path
function getRelativePath(url) {
  const pathArray = url.pathname.split('/');
  // Get the last path segment for GitHub Pages compatibility
  const basePathSegments = location.pathname.split('/').filter(Boolean);
  // Remove base path segments
  const relativePath = '/' + pathArray.filter(segment => 
    !basePathSegments.includes(segment) && segment
  ).join('/');
  return relativePath || '/';
}

// URLs to cache - using relative paths for GitHub Pages compatibility
const urlsToCache = [
  '/',
  '/index.html',
  '/src/main.js',
  '/src/style.css',
  '/src/games/DungeonEscape.js',
  '/src/games/ShapeBuilder.js',
  '/src/games/VolumeQuest.js',
  '/src/games/PatternPuzzle.js',
  '/src/games/SpaceShooter.js',
  '/src/games/TimesTables.js',
  '/src/games/DecimalDash.js',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png',
  '/offline.html'
];

// Install event - cache all initial resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  
  // Take control immediately instead of waiting for reload
  event.waitUntil(clients.claim());
});

// Fetch event - respond with cache first, then network
self.addEventListener('fetch', event => {
  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        
        // Clone the request because it's a one-time use stream
        const fetchRequest = event.request.clone();
        
        // For navigation requests, try the network first
        if (event.request.mode === 'navigate') {
          return fetch(fetchRequest)
            .then(response => {
              // Check if valid response
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              // Clone the response because it's a one-time use stream
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
                
              return response;
            })
            .catch(() => {
              // If network fails, try to return the offline page
              return caches.match('/offline.html');
            });
        }
        
        // For non-navigation requests, try network then cache
        return fetch(fetchRequest)
          .then(response => {
            // Check if valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response
            const responseToCache = response.clone();
            
            // Add to cache
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
              
            return response;
          })
          .catch(() => {
            // If network fails for assets, try cache again (might have older version)
            return caches.match(event.request);
          });
      })
  );
}); 
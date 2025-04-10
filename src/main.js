import './style.css';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

// Import the game setup functions
import { setupDungeonEscape } from './games/DungeonEscape.js';
import { setupShapeBuilder } from './games/ShapeBuilder.js';
import { setupVolumeQuest } from './games/VolumeQuest.js';
import { setupPatternPuzzle } from './games/PatternPuzzle.js';

// DOM Elements
const app = document.querySelector('#app');

// Routes
const routes = {
  '/': homePage,
  '/topics': topicsPage,
  '/games': gamesPage,
  '/game': gamePage,
  '/about': aboutPage,
};

// Route handler
function handleRoute() {
  const path = window.location.hash.replace('#', '') || '/';
  console.log('Path before routing:', path);
  
  // Extract the base path without query parameters
  const basePath = path.split('?')[0];
  console.log('Base path:', basePath);
  
  // Simple direct route matching
  let route = '/';
  
  // Check for direct route match first
  if (routes.hasOwnProperty(basePath)) {
    route = basePath;
  }
  
  console.log('Selected route handler:', route);
  
  // Clear the app container
  app.innerHTML = '';
  
  // Call the appropriate route handler
  routes[route](path);
}

// Initialize the app
function init() {
  // Listen for route changes
  window.addEventListener('hashchange', handleRoute);
  
  // Initial route handling
  handleRoute();
  
  // Add debug console log to verify router is working
  console.log('Router initialized with hash:', window.location.hash);
}

// Homepage
function homePage() {
  app.innerHTML = `
    <div id="bg-canvas"></div>
    
    <header>
      <div class="container">
        <h1 class="logo">MathOrGame</h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#/">Home</a>
      <a href="#/topics">Topics</a>
      <a href="#/about">About</a>
    </nav>
    
    <main class="container">
      <div style="text-align: center; padding: 40px 0 20px;">
        <h2>Welcome to MathOrGame!</h2>
        <p style="max-width: 600px; margin: 20px auto;">
          An interactive 3D math learning experience for grades 1-8.
          Choose a category below to start playing!
        </p>
      </div>
      
      <h3 style="margin: 20px 0; text-align: center;">Featured Games</h3>
      
      <div class="grid">
        <div class="card">
          <div class="card-header" style="background-color: #4CAF50;">
            <h3>Dungeon Escape</h3>
          </div>
          <div class="card-body">
            <p>Solve addition and subtraction problems to escape the dungeon!</p>
          </div>
          <div class="card-footer">
            <a href="#/game?id=dungeon-escape" class="btn">Play Now</a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header" style="background-color: #2196F3;">
            <h3>Shape Builder</h3>
          </div>
          <div class="card-body">
            <p>Match 3D shapes and learn geometry concepts through play!</p>
          </div>
          <div class="card-footer">
            <a href="#/game?id=shape-builder" class="btn">Play Now</a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header" style="background-color: #9C27B0;">
            <h3>Volume Quest</h3>
          </div>
          <div class="card-body">
            <p>Calculate volumes of 3D objects to progress through levels!</p>
          </div>
          <div class="card-footer">
            <a href="#/game?id=volume-quest" class="btn">Play Now</a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header" style="background-color: #FF9800;">
            <h3>Pattern Puzzle</h3>
          </div>
          <div class="card-body">
            <p>Complete patterns and develop algebraic thinking skills!</p>
          </div>
          <div class="card-footer">
            <a href="#/game?id=pattern-puzzle" class="btn">Play Now</a>
          </div>
        </div>
      </div>
      
      <h3 style="margin: 40px 0 20px; text-align: center;">Math Categories</h3>
      
      <div class="grid">
        <div class="card">
          <div class="card-header" style="background-color: #E91E63;">
            <h3>Arithmetic</h3>
          </div>
          <div class="card-body">
            <p>Addition, subtraction, multiplication, and division games</p>
          </div>
          <div class="card-footer">
            <a href="#/games?topic=arithmetic" class="btn">View Games</a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header" style="background-color: #00BCD4;">
            <h3>Geometry</h3>
          </div>
          <div class="card-body">
            <p>Shapes, angles, and spatial reasoning games</p>
          </div>
          <div class="card-footer">
            <a href="#/games?topic=geometry" class="btn">View Games</a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header" style="background-color: #8BC34A;">
            <h3>Data & Measurement</h3>
          </div>
          <div class="card-body">
            <p>Volume, area, and data interpretation games</p>
          </div>
          <div class="card-footer">
            <a href="#/games?topic=measurement" class="btn">View Games</a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header" style="background-color: #673AB7;">
            <h3>Logic & Algebra</h3>
          </div>
          <div class="card-body">
            <p>Equations, patterns, and logical reasoning games</p>
          </div>
          <div class="card-footer">
            <a href="#/games?topic=algebra" class="btn">View Games</a>
          </div>
        </div>
      </div>
      
      <div class="advanced-section">
        <h3 style="margin: 40px 0 20px; text-align: center;">Advanced Topics</h3>
        
        <div class="grid">
          <div class="card">
            <div class="card-header" style="background-color: #009688;">
              <h3>3D Geometry</h3>
            </div>
            <div class="card-body">
              <p>Explore complex 3D shapes and their properties</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-disabled" disabled>Coming Soon</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header" style="background-color: #795548;">
              <h3>Probability</h3>
            </div>
            <div class="card-body">
              <p>Games that teach chance, odds, and statistical concepts</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-disabled" disabled>Coming Soon</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header" style="background-color: #607D8B;">
              <h3>Fractions</h3>
            </div>
            <div class="card-body">
              <p>Master fractions through interactive visual games</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-disabled" disabled>Coming Soon</a>
            </div>
          </div>
          
          <div class="card">
            <div class="card-header" style="background-color: #FF5722;">
              <h3>Calculus</h3>
            </div>
            <div class="card-body">
              <p>Introduction to derivatives and integrals through visualization</p>
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-disabled" disabled>Coming Soon</a>
            </div>
          </div>
        </div>
      </div>
      
      <div style="margin-top: 40px;">
        <h3 style="text-align: center; margin-bottom: 15px;">Interactive 3D Math Playground</h3>
        <div id="three-container" style="width: 100%; height: 400px; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;"></div>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank" style="color: white;">Support Us</a></p>
      </div>
    </footer>
  `;
  
  // Initialize 3D background
  setTimeout(() => {
    init3DBackground();
  }, 100);
  
  // Wait for the DOM to be fully updated before initializing the 3D scene
  setTimeout(() => {
    initHomeAnimation();
  }, 100);
}

// Topics page
function topicsPage() {
  app.innerHTML = `
    <header>
      <div class="container">
        <h1 class="logo">MathOrGame</h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#/">Home</a>
      <a href="#/topics">Topics</a>
      <a href="#/about">About</a>
    </nav>
    
    <main class="container">
      <h2 style="margin: 30px 0 20px; text-align: center;">Choose a Topic</h2>
      
      <div class="grid">
        <div class="card">
          <div class="card-header">
            <h3>Arithmetic</h3>
          </div>
          <div class="card-body">
            <p>Addition, subtraction, multiplication, and division games</p>
          </div>
          <div class="card-footer">
            <a href="#/games?topic=arithmetic" class="btn">View Games</a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3>Geometry</h3>
          </div>
          <div class="card-body">
            <p>Shapes, angles, and spatial reasoning games</p>
          </div>
          <div class="card-footer">
            <a href="#/games?topic=geometry" class="btn">View Games</a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3>Data & Measurement</h3>
          </div>
          <div class="card-body">
            <p>Volume, area, and data interpretation games</p>
          </div>
          <div class="card-footer">
            <a href="#/games?topic=measurement" class="btn">View Games</a>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header">
            <h3>Logic & Algebra</h3>
          </div>
          <div class="card-body">
            <p>Equations, patterns, and logical reasoning games</p>
          </div>
          <div class="card-footer">
            <a href="#/games?topic=algebra" class="btn">View Games</a>
          </div>
        </div>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank" style="color: white;">Support Us</a></p>
      </div>
    </footer>
  `;
}

// Games page
function gamesPage(path) {
  const params = new URLSearchParams(path.split('?')[1] || '');
  const topic = params.get('topic') || 'arithmetic';
  
  let topicTitle = 'Arithmetic';
  let games = [];
  
  switch(topic) {
    case 'arithmetic':
      topicTitle = 'Arithmetic';
      games = [
        { id: 'dungeon-escape', name: 'Dungeon Escape', description: 'Solve addition and subtraction equations to escape the dungeon', unlocked: true },
        { id: 'space-shooter', name: 'Space Shooter', description: 'Practice multiplication by shooting the correct answers', unlocked: false },
        { id: 'number-bouncer', name: 'Number Bouncer', description: 'Sort even and odd numbers by bouncing them to the right side', unlocked: false }
      ];
      break;
    case 'geometry':
      topicTitle = 'Geometry';
      games = [
        { id: 'shape-builder', name: 'Shape Builder', description: 'Build shapes and match the outlines to learn geometry', unlocked: true },
        { id: 'angle-hunter', name: 'Angle Hunter', description: 'Find the correct angles in 3D environments', unlocked: false }
      ];
      break;
    case 'measurement':
      topicTitle = 'Data & Measurement';
      games = [
        { id: 'volume-quest', name: 'Volume Quest', description: 'Calculate the volume of 3D objects to progress', unlocked: true }
      ];
      break;
    case 'algebra':
      topicTitle = 'Logic & Algebra';
      games = [
        { id: 'pattern-puzzle', name: 'Pattern Puzzle', description: 'Complete the pattern by finding the missing piece', unlocked: true }
      ];
      break;
  }
  
  app.innerHTML = `
    <header>
      <div class="container">
        <h1 class="logo">MathOrGame</h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#/">Home</a>
      <a href="#/topics">Topics</a>
      <a href="#/about">About</a>
    </nav>
    
    <main class="container">
      <h2 style="margin: 30px 0 20px; text-align: center;">Games in ${topicTitle}</h2>
      
      <div class="grid">
        ${games.map(game => `
          <div class="card">
            <div class="card-header">
              <h3>${game.name} ${!game.unlocked ? '🔒' : ''}</h3>
            </div>
            <div class="card-body">
              <p>${game.description}</p>
            </div>
            <div class="card-footer">
              <a href="${game.unlocked ? `#/game?id=${game.id}` : '#'}" 
                 class="btn ${!game.unlocked ? 'btn-disabled' : ''}" 
                 ${!game.unlocked ? 'disabled' : ''}>
                Play Game
              </a>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="#/topics" class="btn">Back to Topics</a>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank" style="color: white;">Support Us</a></p>
      </div>
    </footer>
  `;
}

// Game page
function gamePage(path) {
  console.log("GAME PAGE HANDLER CALLED with path:", path);
  
  const params = new URLSearchParams(path.split('?')[1] || '');
  const gameId = params.get('id') || 'dungeon-escape';
  
  console.log("Game page loaded for game ID:", gameId);
  
  let gameTitle = 'Dungeon Escape';
  let gameDescription = 'Solve equations to open doors and escape the dungeon!';
  
  switch(gameId) {
    case 'dungeon-escape':
      gameTitle = 'Dungeon Escape';
      gameDescription = 'Solve equations to open doors and escape the dungeon!';
      break;
    case 'shape-builder':
      gameTitle = 'Shape Builder';
      gameDescription = 'Build shapes and match the outlines to learn geometry!';
      break;
    case 'volume-quest':
      gameTitle = 'Volume Quest';
      gameDescription = 'Calculate the volume of 3D objects to progress!';
      break;
    case 'pattern-puzzle':
      gameTitle = 'Pattern Puzzle';
      gameDescription = 'Complete the pattern by finding the missing piece!';
      break;
  }
  
  app.innerHTML = `
    <header>
      <div class="container">
        <h1 class="logo">MathOrGame</h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#/">Home</a>
      <a href="#/topics">Topics</a>
      <a href="#/about">About</a>
    </nav>
    
    <main class="container">
      <div style="display: flex; justify-content: space-between; align-items: center; margin: 20px 0;">
        <a href="javascript:history.back()" class="btn">Back</a>
        <h2>${gameTitle}</h2>
        <div>Score: <span id="score">0</span></div>
      </div>
      
      <p style="text-align: center; margin-bottom: 20px;">${gameDescription}</p>
      
      <div class="game-container" style="height: 500px; min-height: 500px; background-color: #f0f0f0; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div id="game-canvas" style="width: 100%; height: 100%; position: relative;"></div>
      </div>
      
      <div id="game-controls" style="text-align: center; margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 8px;">
        <div id="question-container" style="margin-bottom: 15px; font-size: 1.2rem; font-weight: bold;">Loading question...</div>
        <input type="text" id="answer-input" placeholder="Your answer..." style="padding: 8px; margin-right: 10px; width: 150px; font-size: 1rem;">
        <button id="submit-answer" class="btn btn-primary">Submit</button>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank" style="color: white;">Support Us</a></p>
      </div>
    </footer>
  `;
  
  console.log("Game page HTML content set, gameId:", gameId);
  
  // Important: Make sure DOM elements exist and have size before initializing the game
  const gameCanvas = document.getElementById('game-canvas');
  if (gameCanvas) {
    console.log("Setting game canvas base styles");
    gameCanvas.style.width = '100%';
    gameCanvas.style.height = '100%';
    gameCanvas.style.minHeight = '500px';
    gameCanvas.style.backgroundColor = '#f0f0f0';
  }
  
  console.log("Preparing to initialize game:", gameId);
  
  // Use requestAnimationFrame to ensure layout is complete before initializing
  requestAnimationFrame(() => {
    console.log("Initializing game after frame render, gameId:", gameId);
    try {
      initGame(gameId);
    } catch (error) {
      console.error("Failed to initialize game:", error);
      document.getElementById('question-container').textContent = 
        "Error loading game. Please try refreshing the page.";
    }
  });
}

// About page
function aboutPage() {
  app.innerHTML = `
    <header>
      <div class="container">
        <h1 class="logo">MathOrGame</h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#/">Home</a>
      <a href="#/topics">Topics</a>
      <a href="#/about">About</a>
    </nav>
    
    <main class="container">
      <h2 style="margin: 30px 0 20px; text-align: center;">About MathOrGame</h2>
      
      <div style="max-width: 800px; margin: 0 auto; padding: 20px;">
        <p>MathOrGame is an interactive 3D platform designed to make learning mathematics fun and engaging for students in grades 1-8.</p>
        
        <h3 style="margin: 20px 0 10px;">Our Mission</h3>
        <p>Our mission is to transform math education by combining rigorous curriculum standards with the engaging elements of game design.</p>
        
        <h3 style="margin: 20px 0 10px;">How It Works</h3>
        <p>Each game is carefully designed to teach specific math concepts through interactive 3D environments. As students play, they practice mathematical skills and develop problem-solving abilities.</p>
        
        <h3 style="margin: 20px 0 10px;">Contact Us</h3>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <p>Email: <a href="mailto:contact@mathorgame.com">contact@mathorgame.com</a></p>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="#/" class="btn">Back to Home</a>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank" style="color: white;">Support Us</a></p>
      </div>
    </footer>
  `;
}

// Initialize 3D animation for the homepage
function initHomeAnimation() {
  const container = document.getElementById('three-container');
  
  if (!container) {
    console.error('Could not find three-container element');
    return;
  }
  
  console.log('Initializing home animation, container dimensions:', container.clientWidth, container.clientHeight);
  
  // Ensure container has minimum dimensions
  container.style.width = '100%';
  container.style.height = '400px';
  container.style.backgroundColor = '#f0f0f0';
  container.style.border = '1px solid #ddd';
  container.style.borderRadius = '8px';
  container.style.overflow = 'hidden';
  
  // Clear any existing content
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  
  // Create a scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf5f5f5);
  
  // Create a camera with fallback aspect ratio if dimensions are zero
  const camera = new THREE.PerspectiveCamera(
    75, 
    (container.clientWidth && container.clientHeight) ? container.clientWidth / container.clientHeight : 2,
    0.1, 
    1000
  );
  camera.position.z = 7;
  
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  
  // Set default size, will be adjusted after DOM is fully loaded
  renderer.setSize(
    container.clientWidth || 800, 
    container.clientHeight || 400
  );
  
  // Add the renderer to the DOM
  container.appendChild(renderer.domElement);
  
  console.log("Renderer created with size:", 
    renderer.domElement.width, 
    renderer.domElement.height
  );
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Create math-themed objects
  const objects = [];
  
  // 1. Number cubes
  const numbers = [1, 2, 3, 4, 5];
  numbers.forEach((num, index) => {
    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const material = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color(`hsl(${index * 30}, 100%, 60%)`),
      shininess: 100
    });
    
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -4 + (index * 2);
    cube.position.y = 1.5;
    cube.userData = { rotationSpeed: 0.01 + (index * 0.003) };
    
    scene.add(cube);
    objects.push(cube);
  });
  
  // 2. Geometric shapes
  const shapeTypes = [
    { geometry: new THREE.TetrahedronGeometry(0.8), position: new THREE.Vector3(-3, -1.5, 0) },
    { geometry: new THREE.OctahedronGeometry(0.8), position: new THREE.Vector3(-1.5, -1.5, 0) },
    { geometry: new THREE.DodecahedronGeometry(0.8), position: new THREE.Vector3(0, -1.5, 0) },
    { geometry: new THREE.TorusGeometry(0.6, 0.3, 16, 32), position: new THREE.Vector3(1.5, -1.5, 0) },
    { geometry: new THREE.ConeGeometry(0.7, 1.4, 32), position: new THREE.Vector3(3, -1.5, 0) }
  ];
  
  shapeTypes.forEach((shape, index) => {
    const material = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color(`hsl(${200 + index * 30}, 100%, 60%)`),
      shininess: 100
    });
    
    const mesh = new THREE.Mesh(shape.geometry, material);
    mesh.position.copy(shape.position);
    mesh.userData = { rotationSpeed: 0.01 + (index * 0.002) };
    
    scene.add(mesh);
    objects.push(mesh);
  });
  
  // Add event listeners for interaction
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  container.addEventListener('mousemove', (event) => {
    // Calculate mouse position in normalized device coordinates
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  });
  
  container.addEventListener('click', () => {
    // Check for intersections
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objects);
    
    if (intersects.length > 0) {
      const object = intersects[0].object;
      
      // Create a bounce animation
      new TWEEN.Tween(object.position)
        .to({ y: object.position.y + 1 }, 200)
        .easing(TWEEN.Easing.Quadratic.Out)
        .chain(
          new TWEEN.Tween(object.position)
            .to({ y: object.position.y }, 200)
            .easing(TWEEN.Easing.Bounce.Out)
        )
        .start();
      
      // Change color
      const color = new THREE.Color(`hsl(${Math.random() * 360}, 100%, 70%)`);
      object.material.color = color;
    }
  });
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate objects
    objects.forEach(obj => {
      obj.rotation.x += obj.userData.rotationSpeed;
      obj.rotation.y += obj.userData.rotationSpeed * 1.3;
    });
    
    // Detect intersections for hover effect
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objects);
    
    objects.forEach(obj => {
      // Reset scale for all objects
      if (obj.scale.x > 1) {
        obj.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    });
    
    // Scale up hovered object
    if (intersects.length > 0) {
      const hoveredObject = intersects[0].object;
      hoveredObject.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
    }
    
    TWEEN.update();
    
    renderer.render(scene, camera);
  }
  
  // Resize handler to ensure proper rendering dimensions
  function handleResize() {
    if (container.clientWidth > 0 && container.clientHeight > 0) {
      console.log("Resizing home animation:", container.clientWidth, container.clientHeight);
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  }
  
  // Handle window resize
  window.addEventListener('resize', handleResize);
  
  // Force a resize after a delay to ensure DOM layout is complete
  setTimeout(handleResize, 100);
  
  // Start animation loop
  animate();
}

// Initialize 3D background
function init3DBackground() {
  const container = document.getElementById('bg-canvas');
  
  if (!container) {
    console.error('Could not find bg-canvas element');
    return;
  }
  
  // Create a scene
  const scene = new THREE.Scene();
  
  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight,
    0.1, 
    1000
  );
  camera.position.z = 20;
  
  // Create a renderer with alpha
  const renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  
  // Add the renderer to the DOM
  container.appendChild(renderer.domElement);
  
  // Create background objects
  const objects = [];
  
  // Create random math symbols
  const symbols = ['+', '-', '×', '÷', '=', '∑', '∫', 'π', '√', '∞'];
  const symbolGeometries = [
    new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.SphereGeometry(0.3, 32, 32),
    new THREE.TetrahedronGeometry(0.4),
    new THREE.OctahedronGeometry(0.4),
    new THREE.IcosahedronGeometry(0.4)
  ];
  
  // Create 50 random shapes
  for (let i = 0; i < 50; i++) {
    // Choose a random geometry
    const geometry = symbolGeometries[Math.floor(Math.random() * symbolGeometries.length)];
    
    // Create a material with a random color
    const material = new THREE.MeshPhongMaterial({
      color: new THREE.Color(`hsl(${Math.random() * 360}, 50%, 70%)`),
      transparent: true,
      opacity: 0.7,
      shininess: 100
    });
    
    const object = new THREE.Mesh(geometry, material);
    
    // Position randomly in 3D space
    object.position.x = Math.random() * 80 - 40;
    object.position.y = Math.random() * 80 - 40;
    object.position.z = Math.random() * 30 - 35;
    
    // Set random rotation
    object.rotation.x = Math.random() * Math.PI;
    object.rotation.y = Math.random() * Math.PI;
    
    // Set random animation parameters
    object.userData = {
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01
      },
      moveSpeed: {
        x: (Math.random() - 0.5) * 0.05,
        y: (Math.random() - 0.5) * 0.05,
        z: (Math.random() - 0.5) * 0.02
      }
    };
    
    scene.add(object);
    objects.push(object);
  }
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    
    // Animate objects
    objects.forEach(obj => {
      // Rotate each object
      obj.rotation.x += obj.userData.rotationSpeed.x;
      obj.rotation.y += obj.userData.rotationSpeed.y;
      obj.rotation.z += obj.userData.rotationSpeed.z;
      
      // Move each object
      obj.position.x += obj.userData.moveSpeed.x;
      obj.position.y += obj.userData.moveSpeed.y;
      obj.position.z += obj.userData.moveSpeed.z;
      
      // Reset if out of bounds
      if (obj.position.x > 40) obj.position.x = -40;
      if (obj.position.x < -40) obj.position.x = 40;
      if (obj.position.y > 40) obj.position.y = -40;
      if (obj.position.y < -40) obj.position.y = 40;
      if (obj.position.z > 0) obj.position.z = -40;
      if (obj.position.z < -40) obj.position.z = 0;
    });
    
    renderer.render(scene, camera);
  }
  
  // Handle window resize
  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  window.addEventListener('resize', handleResize);
  
  // Start animation
  animate();
}

// Initialize a game
function initGame(gameId) {
  console.log("Initializing game:", gameId);
  
  // Get DOM elements
  const gameCanvas = document.getElementById('game-canvas');
  const questionContainer = document.getElementById('question-container');
  const answerInput = document.getElementById('answer-input');
  const submitButton = document.getElementById('submit-answer');
  const scoreElement = document.getElementById('score');
  
  // Debug element existence
  console.log("Game elements found:", {
    gameCanvas: !!gameCanvas,
    questionContainer: !!questionContainer,
    answerInput: !!answerInput,
    submitButton: !!submitButton,
    scoreElement: !!scoreElement
  });
  
  if (!gameCanvas || !questionContainer || !answerInput || !submitButton || !scoreElement) {
    console.error("Missing game elements:", { 
      gameCanvas, questionContainer, answerInput, submitButton, scoreElement 
    });
    
    // Add a visual error message to the page if elements are missing
    if (document.querySelector('.game-container')) {
      document.querySelector('.game-container').innerHTML = `
        <div style="color: red; padding: 20px; text-align: center;">
          <h3>Error: Game could not be initialized</h3>
          <p>Some required game elements were not found.</p>
        </div>
      `;
    }
    return;
  }
  
  // Ensure the game container is visible and has proper dimensions
  const gameContainer = gameCanvas.parentElement;
  if (gameContainer) {
    gameContainer.style.display = 'block';
    gameContainer.style.height = '500px';
    gameContainer.style.minHeight = '500px';
    gameContainer.style.backgroundColor = '#f0f0f0';
    gameContainer.style.border = '1px solid #ddd';
    gameContainer.style.borderRadius = '8px';
    gameContainer.style.overflow = 'hidden';
  }
  
  // Explicitly set dimensions on the game canvas
  gameCanvas.style.width = '100%';
  gameCanvas.style.height = '100%';
  gameCanvas.style.minHeight = '500px';
  
  // Clear game canvas content
  gameCanvas.innerHTML = '';
  
  console.log("Game canvas dimensions:", {
    clientWidth: gameCanvas.clientWidth,
    clientHeight: gameCanvas.clientHeight,
    offsetWidth: gameCanvas.offsetWidth,
    offsetHeight: gameCanvas.offsetHeight
  });
  
  // Set loading state
  questionContainer.textContent = "Loading game...";
  
  try {
    // Game-specific setup
    switch(gameId) {
      case 'dungeon-escape':
        console.log("Starting Dungeon Escape game");
        setupDungeonEscape(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        break;
      case 'shape-builder':
        console.log("Starting Shape Builder game");
        setupShapeBuilder(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        break;
      case 'volume-quest':
        console.log("Starting Volume Quest game");
        setupVolumeQuest(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        break;
      case 'pattern-puzzle':
        console.log("Starting Pattern Puzzle game");
        setupPatternPuzzle(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        break;
      default:
        console.error("Unknown game ID:", gameId);
        questionContainer.textContent = "Error: Game not found!";
    }
    console.log(`${gameId} initialized successfully`);
  } catch (error) {
    console.error(`Error initializing game ${gameId}:`, error);
    questionContainer.textContent = `Error: Could not load game (${error.message})`;
    
    // Add visual error message
    gameCanvas.innerHTML = `
      <div style="color: red; padding: 20px; text-align: center;">
        <h3>Error: Game could not be loaded</h3>
        <p>${error.message}</p>
        <p>Please try refreshing the page.</p>
      </div>
    `;
  }
}

// Initialize the app
init();

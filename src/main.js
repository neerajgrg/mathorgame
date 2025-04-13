import './style.css';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import gameCatalog from './data/gameCatalog.json';

// Import the game setup functions
import { setupDungeonEscape } from './games/DungeonEscape.js';
import { setupShapeBuilder } from './games/ShapeBuilder.js';
import { setupVolumeQuest } from './games/VolumeQuest.js';
import { setupPatternPuzzle } from './games/PatternPuzzle.js';
import { setupSpaceShooter } from './games/SpaceShooter.js';
import { setupTimesTables } from './games/TimesTables.js';
import { setupDecimalDash } from './games/DecimalDash.js';
import { setupNumberLine } from './games/NumberLine.js';
import { setupCountObjects } from './games/CountObjects.js';
import { setupNumberAdventure } from './games/NumberAdventure.js';

// DOM Elements
const app = document.querySelector('#app');

// Get the base URL for GitHub Pages compatibility (if deployed to GitHub Pages)
const BASE_URL = '/mathorgame'; 

// Routes - use simplified paths without leading slash for hash-based routing
const routes = {
  '': homePage,
  'topics': topicsPage,
  'games': gamesPage,
  'game': gamePage,
  'about': aboutPage,
};

// Route handler
function handleRoute() {
  const path = window.location.hash.replace('#', '') || '';
  console.log('Path before routing:', path);
  
  // Extract the base path without query parameters
  const basePath = path.split('?')[0];
  console.log('Base path:', basePath);
  
  // Simple direct route matching
  let route = '';
  
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
  
  // Setup PWA installation
  setupPWA();
  
  // Mobile viewport height fix (100vh issue on mobile browsers)
  setupMobileViewportFix();
  
  // Handle device orientation changes
  window.addEventListener('orientationchange', handleOrientationChange);
}

// Setup PWA installation functionality
function setupPWA() {
  let deferredPrompt;
  const installContainer = document.createElement('div');
  
  // Style for install prompt
  installContainer.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    background: white;
    padding: 15px 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    display: none;
    z-index: 1000;
    font-family: 'Poppins', sans-serif;
  `;
  
  installContainer.innerHTML = `
    <p style="margin: 0 0 10px 0; font-weight: bold;">Install MathOrGame</p>
    <p style="margin: 0 0 15px 0; font-size: 0.9rem;">Install this app on your device for offline use!</p>
    <div style="display: flex; gap: 10px;">
      <button id="installBtn" style="
        background: linear-gradient(135deg, #4361ee, #3a0ca3);
        color: white;
        border: none;
        padding: 8px 15px;
        border-radius: 20px;
        cursor: pointer;
        font-weight: bold;
      ">Install</button>
      <button id="installCancelBtn" style="
        background: transparent;
        border: none;
        padding: 8px 15px;
        cursor: pointer;
        color: #666;
      ">Not now</button>
    </div>
  `;
  
  document.body.appendChild(installContainer);
  
  // Handle beforeinstallprompt event
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show the install button
    installContainer.style.display = 'block';
  });
  
  // Installation button click handler
  document.getElementById('installBtn').addEventListener('click', async () => {
    if (!deferredPrompt) return;
    
    // Show the installation prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);
    
    // Clear the deferred prompt variable
    deferredPrompt = null;
    
    // Hide the install button
    installContainer.style.display = 'none';
  });
  
  // Cancel button click handler
  document.getElementById('installCancelBtn').addEventListener('click', () => {
    installContainer.style.display = 'none';
  });
  
  // Check if app was successfully installed
  window.addEventListener('appinstalled', (e) => {
    console.log('App was installed', e);
    // Hide the install button
    installContainer.style.display = 'none';
  });
}

// Homepage
function homePage() {
  app.innerHTML = `
    <div id="bg-canvas"></div>
    
    <header>
      <div class="container">
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
        <div class="mobile-menu-toggle">
          <span class="line1"></span>
          <span class="line2"></span>
          <span class="line3"></span>
        </div>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in">
        <h2>Welcome to MathOrGame!</h2>
        <p>An interactive 3D math learning experience designed to make mathematics fun and engaging through immersive games.</p>
      </div>
      
      <div class="grade-title fade-in">
        <h3>Select Your Grade</h3>
      </div>
      
      <div class="grid">
        <div class="card fade-in" style="animation-delay: 0.1s">
          <div class="card-header" style="background: linear-gradient(135deg, #4CAF50, #2E7D32);">
            <h3>1st Grade</h3>
          </div>
          <div class="card-body">
            <p>Basic addition, subtraction, shapes, and patterns</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=1" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.2s">
          <div class="card-header" style="background: linear-gradient(135deg, #2196F3, #0D47A1);">
            <h3>2nd Grade</h3>
          </div>
          <div class="card-body">
            <p>Addition, subtraction, basic geometry, and measurement</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=2" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.3s">
          <div class="card-header" style="background: linear-gradient(135deg, #9C27B0, #4A148C);">
            <h3>3rd Grade</h3>
          </div>
          <div class="card-body">
            <p>Multiplication, division, fractions, and area</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=3" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.4s">
          <div class="card-header" style="background: linear-gradient(135deg, #FF9800, #E65100);">
            <h3>4th Grade</h3>
          </div>
          <div class="card-body">
            <p>Multi-digit arithmetic, factors, and geometry</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=4" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.5s">
          <div class="card-header" style="background: linear-gradient(135deg, #E91E63, #880E4F);">
            <h3>5th Grade</h3>
          </div>
          <div class="card-body">
            <p>Decimals, fractions, and volume</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=5" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.6s">
          <div class="card-header" style="background: linear-gradient(135deg, #00BCD4, #006064);">
            <h3>6th Grade</h3>
          </div>
          <div class="card-body">
            <p>Ratios, equations, and statistical distributions</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=6" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.7s">
          <div class="card-header" style="background: linear-gradient(135deg, #8BC34A, #33691E);">
            <h3>7th Grade</h3>
          </div>
          <div class="card-body">
            <p>Proportional relationships, expressions, and probability</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=7" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
        
        <div class="card fade-in" style="animation-delay: 0.8s">
          <div class="card-header" style="background: linear-gradient(135deg, #673AB7, #311B92);">
            <h3>8th Grade</h3>
          </div>
          <div class="card-body">
            <p>Linear equations, functions, and geometric transformations</p>
          </div>
          <div class="card-footer">
            <a href="#topics?grade=8" class="btn btn-action">View Topics <i style="font-style: normal;">→</i></a>
          </div>
        </div>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
      </div>
    </footer>
  `;
  
  // Initialize 3D background
  setTimeout(() => {
    init3DBackground();
  }, 100);
  
  // Add event listener for mobile menu toggle
  setupMobileMenu();
}

// Topics page
function topicsPage(path) {
  const params = new URLSearchParams(path.split('?')[1] || '');
  const grade = params.get('grade') || '1';
  
  // Get grade data from catalog
  const gradeData = gameCatalog.grades[grade] || {
    title: `${grade}th Grade`,
    topics: {}
  };
  
  const topics = Object.entries(gradeData.topics).map(([id, topic]) => {
    return {
      id: id,
      name: topic.title,
      description: topic.description,
      icon: topic.icon
    };
  });
  
  app.innerHTML = `
    <header>
      <div class="container">
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in" style="padding-top: 30px; padding-bottom: 10px;">
        <h2>${gradeData.title} Topics</h2>
        <p>Choose a topic to explore interactive math games designed for ${gradeData.title} students.</p>
      </div>
      
      <div class="game-header fade-in" style="display: flex; justify-content: flex-start; margin: 10px 0 20px;">
        <a href="#" class="btn btn-back" aria-label="Back to Grades">
          <i class="icon-arrow">←</i><span class="btn-text">Back to Grades</span>
        </a>
      </div>
      
      <div class="grid">
        ${topics.map((topic, index) => `
          <div class="card fade-in" style="animation-delay: ${0.1 * (index + 1)}s">
            <div class="card-header">
              <h3>${topic.icon} ${topic.name}</h3>
            </div>
            <div class="card-body">
              <p>${topic.description}</p>
            </div>
            <div class="card-footer">
              <a href="#games?grade=${grade}&topic=${topic.id}" class="btn btn-action">View Games <i style="font-style: normal;">→</i></a>
            </div>
          </div>
        `).join('')}
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
      </div>
    </footer>
  `;
}

// Games page
function gamesPage(path) {
  console.log("GAMES PAGE HANDLER CALLED with path:", path);
  
  const params = new URLSearchParams(path.split('?')[1] || '');
  const grade = params.get('grade') || '1';
  const topicId = params.get('topic') || 'addition';
  
  // Get data from catalog
  const gradeData = gameCatalog.grades[grade] || {
    title: `${grade}th Grade`,
    topics: {}
  };
  
  const topicData = gradeData.topics[topicId] || {
    title: 'Topic',
    description: 'Topic description',
    games: []
  };
  
  const games = topicData.games || [];
  
  app.innerHTML = `
    <header>
      <div class="container">
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in" style="padding-top: 30px; padding-bottom: 10px;">
        <h2>${gradeData.title} - ${topicData.title}</h2>
        <p>Select a game below to start practicing your ${topicData.title.toLowerCase()} skills!</p>
      </div>
      
      <div class="game-header fade-in" style="display: flex; justify-content: flex-start; margin: 10px 0 20px;">
        <a href="#topics?grade=${grade}" class="btn btn-back" aria-label="Back to Topics">
          <i class="icon-arrow">←</i><span class="btn-text">Back to Topics</span>
        </a>
      </div>
      
      <div class="grid">
        ${games.map((game, index) => `
          <div class="card fade-in" style="animation-delay: ${0.1 * (index + 1)}s">
            <div class="card-header">
              <h3>${game.name} ${!game.unlocked ? '<span style="font-size: 0.8em; margin-left: 5px;">🔒</span>' : ''}</h3>
            </div>
            <div class="card-body">
              <p>${game.description}</p>
            </div>
            <div class="card-footer">
              <a href="${game.unlocked ? `#game?id=${game.id}&grade=${grade}&topic=${topicId}` : '#'}" 
                 class="btn ${!game.unlocked ? 'btn-disabled' : 'btn-action'}" 
                 ${!game.unlocked ? 'disabled' : ''}>
                ${game.unlocked ? 'Play Game <i style="font-style: normal;">→</i>' : 'Coming Soon'}
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
      </div>
    </footer>
  `;
}

// Game page
function gamePage(path) {
  console.log("GAME PAGE HANDLER CALLED with path:", path);
  
  const params = new URLSearchParams(path.split('?')[1] || '');
  const gameId = params.get('id') || 'dungeon-escape';
  const grade = params.get('grade') || '1';
  const topic = params.get('topic') || 'addition';
  
  console.log("Game page loaded for game ID:", gameId);
  
  // Get game info from the catalog
  let gameInfo = gameCatalog.gameInfo[gameId] || {
    title: 'Game',
    description: 'Game description'
  };
  
  // Special case for NumberAdventure when using dungeon-escape ID in counting topic
  if (gameId === 'dungeon-escape' && topic === 'counting') {
    gameInfo = gameCatalog.gameInfo['number-adventure'] || {
      title: 'Number Adventure',
      description: 'Embark on a magical journey, counting treasures to open castle doors!'
    };
  }
  
  app.innerHTML = `
    <header>
      <div class="container">
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in" style="padding-top: 30px; padding-bottom: 10px;">
        <h2 style="font-size: 2.4rem;">${gameInfo.title}</h2>
        <p style="font-size: 1.1rem; margin-bottom: 10px;">${gameInfo.description}</p>
      </div>
      
      <div class="game-header fade-in" style="display: flex; justify-content: space-between; align-items: center; margin: 10px 0 20px;">
        <a href="#games?grade=${grade}&topic=${topic}" class="btn btn-back" aria-label="Back">
          <i class="icon-arrow">←</i>
        </a>
        <div class="score-display">Score: <span id="score">0</span></div>
      </div>
      
      <div class="game-container fade-in">
        <div id="game-canvas" style="width: 100%; height: 100%; position: relative;"></div>
      </div>
      
      <div id="game-controls" class="fade-in">
        <div id="question-container">Loading question...</div>
        <div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap;">
          <input type="text" id="answer-input" placeholder="Your answer..." autocomplete="off">
          <button id="submit-answer" class="btn btn-action">Submit Answer <i style="font-style: normal;">✓</i></button>
        </div>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
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
    gameCanvas.style.backgroundColor = '#f0f5ff';
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
        <h1 class="logo"><a href="#" style="text-decoration: none; color: inherit;">MathOrGame</a></h1>
        <p class="tagline">Learn Math. Play Games.</p>
      </div>
    </header>
    
    <nav>
      <a href="#">Home</a>
      <a href="#topics">Topics</a>
      <a href="#about">About</a>
    </nav>
    
    <main class="container">
      <div class="welcome-section fade-in">
        <h2>About MathOrGame</h2>
        <p>Transforming math education through interactive 3D games</p>
      </div>
      
      <div class="advanced-section fade-in" style="animation-delay: 0.2s">
        <h3 style="font-size: 1.5rem; margin-bottom: 15px; color: var(--primary-color);">Our Mission</h3>
        <p style="margin-bottom: 20px;">MathOrGame is an interactive 3D platform designed to make learning mathematics fun and engaging for students in grades 1-8. Our mission is to transform math education by combining rigorous curriculum standards with the engaging elements of game design.</p>
        
        <h3 style="font-size: 1.5rem; margin: 25px 0 15px; color: var(--primary-color);">How It Works</h3>
        <p style="margin-bottom: 20px;">Each game is carefully designed to teach specific math concepts through interactive 3D environments. As students play, they practice mathematical skills and develop problem-solving abilities in an engaging and stress-free environment.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0;">
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px; color: var(--gradient-start);">🎮</div>
            <h4 style="margin-bottom: 10px; font-size: 1.2rem;">Interactive Games</h4>
            <p>Engaging 3D environments that make math concepts come alive</p>
          </div>
          
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px; color: var(--gradient-mid);">🧠</div>
            <h4 style="margin-bottom: 10px; font-size: 1.2rem;">Curriculum Aligned</h4>
            <p>Games designed to match grade-specific educational standards</p>
          </div>
          
          <div style="text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 15px; color: var(--gradient-end);">📊</div>
            <h4 style="margin-bottom: 10px; font-size: 1.2rem;">Progress Tracking</h4>
            <p>Track learning achievements and improvement over time</p>
          </div>
        </div>
        
        <h3 style="font-size: 1.5rem; margin: 25px 0 15px; color: var(--primary-color);">Contact Us</h3>
        <p>Have questions or feedback? We'd love to hear from you!</p>
        <p style="margin-top: 10px;">Email: <a href="mailto:contact@mathorgame.com" style="color: var(--primary-color); text-decoration: none; font-weight: 600;">contact@mathorgame.com</a></p>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="#" class="btn btn-back fade-in" style="animation-delay: 0.4s" aria-label="Back to Home">
          <i class="icon-arrow">←</i><span class="btn-text">Back to Home</span>
        </a>
      </div>
    </main>
    
    <footer>
      <div class="container">
        <p>&copy; 2023 MathOrGame | <a href="https://ko-fi.com" target="_blank">Support Us</a></p>
      </div>
    </footer>
  `;
}

// Initialize 3D animation for the homepage
function initHomeAnimation() {
  const container = document.getElementById('three-container');
  
  if (!container) return;
  
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.z = 10;
  
  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);
  
  // Create a raycaster for interaction
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  // Array to store all interactive objects
  const objects = [];

  // Add lights to improve visibility without harshness
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);
  
  // Create only 5 objects of different shapes and colors (reduced from original count)
  // Limited to 5 geometric objects with soft colors
  const shapes = [
    new THREE.BoxGeometry(1.5, 1.5, 1.5),
    new THREE.SphereGeometry(1, 32, 32),
    new THREE.ConeGeometry(1, 2, 32),
    new THREE.TetrahedronGeometry(1.2),
    new THREE.TorusGeometry(1, 0.4, 16, 32)
  ];
  
  // Muted, child-friendly color palette
  const colors = [
    0x6a98c2, // soft blue
    0x7ac285, // soft green
    0xd6a87c, // soft orange
    0xb683b3, // soft purple
    0xd6937c  // soft coral
  ];
  
  for (let i = 0; i < 5; i++) {
    const geometry = shapes[i];
    
    // Create material with soft colors and no shininess
    const material = new THREE.MeshStandardMaterial({
      color: colors[i],
      roughness: 0.8,
      metalness: 0.2
    });
    
    const object = new THREE.Mesh(geometry, material);
    
    // Position in a balanced circular arrangement
    const angle = (i / 5) * Math.PI * 2;
    const radius = 3.5;
    object.position.x = Math.cos(angle) * radius;
    object.position.y = Math.sin(angle) * radius;
    object.position.z = 0;
    
    // Slow, gentle rotation
    object.userData = {
      rotationSpeed: 0.005 + Math.random() * 0.005 // Reduced rotation speed
    };
    
    objects.push(object);
    scene.add(object);
  }
  
  // Track mouse movement for interaction
  container.addEventListener('mousemove', (event) => {
    // Calculate mouse position in normalized device coordinates
    const rect = container.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
  });
  
  // Interaction on click - simplified animation
  container.addEventListener('click', () => {
    // Check for intersections
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objects);
    
    if (intersects.length > 0) {
      const object = intersects[0].object;
      
      // Create a simpler bounce animation 
      new TWEEN.Tween(object.position)
        .to({ y: object.position.y + 0.5 }, 200) // Reduced height
        .easing(TWEEN.Easing.Quadratic.Out)
        .chain(
          new TWEEN.Tween(object.position)
            .to({ y: object.position.y }, 200)
            .easing(TWEEN.Easing.Bounce.Out)
        )
        .start();
      
      // Gentler color change - uses the same palette
      const colorIndex = Math.floor(Math.random() * colors.length);
      object.material.color.set(colors[colorIndex]);
    }
  });
  
  // Animation - simplified
  function animate() {
    requestAnimationFrame(animate);
    
    // Rotate objects gently
    objects.forEach(obj => {
      obj.rotation.x += obj.userData.rotationSpeed / 2;
      obj.rotation.y += obj.userData.rotationSpeed * 0.7;
    });
    
    // Simplified hover effect with reduced intensity
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objects);
    
    objects.forEach(obj => {
      // Reset scale for all objects with gentler transition
      if (obj.scale.x > 1) {
        obj.scale.lerp(new THREE.Vector3(1, 1, 1), 0.05); // Slower transition
      }
    });
    
    // Minimal scale up for hover effect
    if (intersects.length > 0) {
      const hoveredObject = intersects[0].object;
      hoveredObject.scale.lerp(new THREE.Vector3(1.1, 1.1, 1.1), 0.05); // Reduced hover effect
    }
    
    TWEEN.update();
    renderer.render(scene, camera);
  }
  
  // Handle window resize
  function handleResize() {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  }
  
  window.addEventListener('resize', handleResize);
  
  animate();
}

// Initialize 3D background
function init3DBackground() {
  const bgCanvas = document.getElementById('bg-canvas');
  
  if (!bgCanvas) {
    console.warn('Background canvas element not found');
    return;
  }
  
  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;
  
  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ canvas: bgCanvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Reduced number of particles
  const particleCount = 50; // Reduced from higher number
  const particles = new THREE.Group();
  
  const geometry = new THREE.SphereGeometry(0.1, 8, 8); // Simplified geometry
  
  // Create particles with muted colors
  for (let i = 0; i < particleCount; i++) {
    // Using a more muted color palette
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(`hsl(${Math.floor(Math.random() * 60) + 180}, 40%, 70%)`), // More blues and greens, less saturation
      transparent: true,
      opacity: 0.5 // More transparent
    });
    
    const particle = new THREE.Mesh(geometry, material);
    
    // Position particles more intentionally around the edges
    const distance = 8 + Math.random() * 10;
    const theta = THREE.MathUtils.randFloatSpread(360); 
    const phi = THREE.MathUtils.randFloatSpread(180);
    
    particle.position.x = distance * Math.sin(theta) * Math.cos(phi);
    particle.position.y = distance * Math.sin(theta) * Math.sin(phi);
    particle.position.z = distance * Math.cos(theta);
    
    // Slower rotation
    particle.rotation.x = Math.random() * Math.PI;
    particle.rotation.y = Math.random() * Math.PI;
    
    // Slower movement
    particle.userData = {
      speed: {
        x: THREE.MathUtils.randFloatSpread(0.02), // Reduced speed
        y: THREE.MathUtils.randFloatSpread(0.02),
        z: THREE.MathUtils.randFloatSpread(0.02)
      },
      rotation: {
        x: THREE.MathUtils.randFloatSpread(0.005), // Reduced rotation
        y: THREE.MathUtils.randFloatSpread(0.005)
      }
    };
    
    particles.add(particle);
  }
  
  scene.add(particles);
  
  // Animation - simplified and slowed down
  function animate() {
    requestAnimationFrame(animate);
    
    particles.children.forEach(particle => {
      // Slower and less dramatic movement
      particle.position.x += particle.userData.speed.x;
      particle.position.y += particle.userData.speed.y;
      particle.position.z += particle.userData.speed.z;
      
      // Apply slower rotation
      particle.rotation.x += particle.userData.rotation.x;
      particle.rotation.y += particle.userData.rotation.y;
      
      // Gently reset particles that go out of bounds
      if (Math.abs(particle.position.x) > 20 || 
          Math.abs(particle.position.y) > 20 || 
          Math.abs(particle.position.z) > 20) {
        
        // Reset with gentler transition
        const distance = 15;
        const theta = THREE.MathUtils.randFloatSpread(360);
        const phi = THREE.MathUtils.randFloatSpread(180);
        
        particle.position.x = distance * Math.sin(theta) * Math.cos(phi);
        particle.position.y = distance * Math.sin(theta) * Math.sin(phi);
        particle.position.z = distance * Math.cos(theta);
      }
    });
    
    // Slow camera movement for subtle effect
    camera.position.x = Math.sin(Date.now() * 0.0001) * 1.5; // Reduced movement
    camera.position.y = Math.cos(Date.now() * 0.0001) * 1.5;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
  }
  
  // Handle window resize
  function handleResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  window.addEventListener('resize', handleResize);
  
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
  
  // Get URL parameters to determine topic
  const urlParams = new URLSearchParams(window.location.hash.split('?')[1] || '');
  const topicId = urlParams.get('topic') || '';
  
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
        // For dungeon-escape, use NumberAdventure if the topic is counting
        if (topicId === 'counting') {
          console.log("Starting Number Adventure game (counting version of Dungeon Escape)");
          setupNumberAdventure(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        } else {
          console.log("Starting Dungeon Escape game");
          setupDungeonEscape(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        }
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
      case 'space-shooter':
        console.log("Starting Space Shooter game");
        setupSpaceShooter(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        break;
      case 'times-tables':
        console.log("Starting Times Tables game");
        setupTimesTables(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        break;
      case 'decimal-dash':
        console.log("Starting Decimal Dash game");
        setupDecimalDash(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        break;
      case 'number-line':
        console.log("Starting Number Line game");
        setupNumberLine(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        break;
      case 'count-objects':
        console.log("Starting Count Objects game");
        setupCountObjects(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
        break;
      default:
        // For other game IDs, default to DungeonEscape as a fallback
        console.log("Unknown game ID:", gameId, "- Using Dungeon Escape as fallback");
        setupDungeonEscape(gameCanvas, questionContainer, answerInput, submitButton, scoreElement);
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

// Function to handle mobile viewport height issues
function setupMobileViewportFix() {
  // Fix for 100vh on mobile
  const setVh = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  
  // Set the --vh custom property
  setVh();
  
  // Update on resize and orientation change
  window.addEventListener('resize', setVh);
  window.addEventListener('orientationchange', setVh);
}

// Handle orientation changes
function handleOrientationChange() {
  // Force redraw after orientation change is complete
  setTimeout(() => {
    // Trigger resize event to update UI elements
    window.dispatchEvent(new Event('resize'));
    
    // Ensure header and navigation are properly shown
    const mobileMenu = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenu && nav) {
      mobileMenu.classList.remove('active');
      nav.classList.remove('active');
    }
  }, 200);
}

// Setup Mobile Menu Toggle
function setupMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (mobileMenuToggle) {
    // Use touchstart for faster response on mobile
    mobileMenuToggle.addEventListener('touchstart', (e) => {
      mobileMenuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      e.preventDefault(); // Prevent default touch behavior
    }, { passive: false });
    
    // Keep click event for desktop
    mobileMenuToggle.addEventListener('click', (e) => {
      mobileMenuToggle.classList.toggle('active');
      nav.classList.toggle('active');
      e.preventDefault();
    });
    
    // Close menu when clicking or touching elsewhere
    document.addEventListener('click', (e) => {
      if (nav.classList.contains('active') && 
          !nav.contains(e.target) && 
          !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });
    
    // Close menu when clicking on links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
}

// Initialize the app
init();


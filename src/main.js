import './style.css';
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

// Import the game setup functions
import { setupDungeonEscape } from './games/DungeonEscape.js';
import { setupShapeBuilder } from './games/ShapeBuilder.js';
import { setupVolumeQuest } from './games/VolumeQuest.js';
import { setupPatternPuzzle } from './games/PatternPuzzle.js';
import { setupSpaceShooter } from './games/SpaceShooter.js';
import { setupTimesTables } from './games/TimesTables.js';
import { setupDecimalDash } from './games/DecimalDash.js';

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
  
  // Setup PWA installation
  setupPWA();
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
        <h1 class="logo">MathOrGame</h1>
        <p class="tagline">Learn Math. Play Games.</p>
        <div class="mobile-menu-toggle">
          <span class="line1"></span>
          <span class="line2"></span>
          <span class="line3"></span>
        </div>
      </div>
    </header>
    
    <nav>
      <a href="#/">Home</a>
      <a href="#/topics">Topics</a>
      <a href="#/about">About</a>
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
            <a href="#/topics?grade=1" class="btn">View Topics</a>
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
            <a href="#/topics?grade=2" class="btn">View Topics</a>
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
            <a href="#/topics?grade=3" class="btn">View Topics</a>
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
            <a href="#/topics?grade=4" class="btn">View Topics</a>
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
            <a href="#/topics?grade=5" class="btn">View Topics</a>
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
            <a href="#/topics?grade=6" class="btn">View Topics</a>
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
            <a href="#/topics?grade=7" class="btn">View Topics</a>
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
            <a href="#/topics?grade=8" class="btn">View Topics</a>
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
  
  let gradeTitle = `${grade}st Grade`;
  if (grade === '2') gradeTitle = '2nd Grade';
  if (grade === '3') gradeTitle = '3rd Grade';
  if (grade >= '4') gradeTitle = `${grade}th Grade`;
  
  let topics = [];
  
  // Define topics for each grade
  switch(grade) {
    case '1':
      topics = [
        { id: 'counting', name: 'Counting', description: 'Count objects and learn number sequences', icon: '🔢' },
        { id: 'addition', name: 'Addition', description: 'Basic addition with numbers 1-20', icon: '➕' },
        { id: 'subtraction', name: 'Subtraction', description: 'Basic subtraction with numbers 1-20', icon: '➖' },
        { id: 'shapes', name: 'Shapes', description: 'Identify and classify basic 2D shapes', icon: '◯' }
      ];
      break;
    case '2':
      topics = [
        { id: 'addition', name: 'Addition', description: 'Addition with numbers up to 100', icon: '➕' },
        { id: 'subtraction', name: 'Subtraction', description: 'Subtraction with numbers up to 100', icon: '➖' },
        { id: 'money', name: 'Money', description: 'Counting money and making change', icon: '💰' },
        { id: 'time', name: 'Time', description: 'Telling time to the nearest 5 minutes', icon: '🕒' }
      ];
      break;
    case '3':
      topics = [
        { id: 'multiplication', name: 'Multiplication', description: 'Multiplication facts and properties', icon: '✖️' },
        { id: 'division', name: 'Division', description: 'Basic division concepts and facts', icon: '➗' },
        { id: 'fractions', name: 'Fractions', description: 'Introduction to fractions and equivalent fractions', icon: '🔢' },
        { id: 'area', name: 'Area', description: 'Calculate area of rectangles and squares', icon: '📏' }
      ];
      break;
    case '4':
      topics = [
        { id: 'multidigit', name: 'Multi-digit Math', description: 'Multi-digit multiplication and division', icon: '🧮' },
        { id: 'factors', name: 'Factors & Multiples', description: 'Prime and composite numbers, factors, and multiples', icon: '🔄' },
        { id: 'fractions', name: 'Fraction Operations', description: 'Add and subtract fractions with like denominators', icon: '➗' },
        { id: 'angles', name: 'Angles', description: 'Measure and classify angles', icon: '📐' }
      ];
      break;
    case '5':
      topics = [
        { id: 'decimals', name: 'Decimals', description: 'Operations with decimals to hundredths', icon: '💯' },
        { id: 'fractions', name: 'Fraction Operations', description: 'Add, subtract, multiply fractions', icon: '➗' },
        { id: 'volume', name: 'Volume', description: 'Measure volume of rectangular prisms', icon: '📦' },
        { id: 'coordinates', name: 'Coordinate Plane', description: 'Plot points on the coordinate plane', icon: '📍' }
      ];
      break;
    case '6':
      topics = [
        { id: 'ratios', name: 'Ratios & Proportions', description: 'Understand ratio concepts and use ratio reasoning', icon: '⚖️' },
        { id: 'expressions', name: 'Expressions & Equations', description: 'Write, read, and evaluate expressions', icon: '🔣' },
        { id: 'statistics', name: 'Statistics', description: 'Statistical variability and distributions', icon: '📊' },
        { id: 'geometry', name: 'Geometry', description: 'Area, surface area, and volume', icon: '📐' }
      ];
      break;
    case '7':
      topics = [
        { id: 'proportional', name: 'Proportional Relationships', description: 'Analyze and represent proportional relationships', icon: '📈' },
        { id: 'rational', name: 'Rational Numbers', description: 'Operations with rational numbers', icon: '🔢' },
        { id: 'probability', name: 'Probability', description: 'Develop understanding of probability', icon: '🎲' },
        { id: 'scale', name: 'Scale Drawing', description: 'Draw geometric figures and describe relationships', icon: '✏️' }
      ];
      break;
    case '8':
      topics = [
        { id: 'linear', name: 'Linear Equations', description: 'Analyze and solve linear equations', icon: '📈' },
        { id: 'functions', name: 'Functions', description: 'Define, evaluate, and compare functions', icon: '🔄' },
        { id: 'geometry', name: 'Geometry', description: 'Understand congruence and similarity', icon: '📐' },
        { id: 'pythagorean', name: 'Pythagorean Theorem', description: 'Apply the Pythagorean Theorem', icon: '📏' }
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
      <div class="welcome-section fade-in" style="padding-top: 30px; padding-bottom: 10px;">
        <h2>${gradeTitle} Topics</h2>
        <p>Choose a topic to explore interactive math games designed for ${gradeTitle} students.</p>
      </div>
      
      <div class="game-header fade-in" style="display: flex; justify-content: flex-start; margin: 10px 0 20px;">
        <a href="#/" class="btn" style="box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
          <span style="margin-right: 5px;">&#8592;</span> Back to Grades
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
              <a href="#/games?grade=${grade}&topic=${topic.id}" class="btn">View Games</a>
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
  const params = new URLSearchParams(path.split('?')[1] || '');
  const grade = params.get('grade') || '1';
  const topic = params.get('topic') || 'addition';
  
  let gradeTitle = `${grade}st Grade`;
  if (grade === '2') gradeTitle = '2nd Grade';
  if (grade === '3') gradeTitle = '3rd Grade';
  if (grade >= '4') gradeTitle = `${grade}th Grade`;
  
  let topicTitle = 'Addition';
  let games = [];
  
  // Define games for each grade and topic combination
  if (grade === '1') {
    switch(topic) {
      case 'counting':
        topicTitle = 'Counting';
        games = [
          { id: 'number-line', name: 'Number Line', description: 'Place numbers in the correct order on a number line', unlocked: true },
          { id: 'count-objects', name: 'Count Objects', description: 'Count the objects and select the correct number', unlocked: true }
        ];
        break;
      case 'addition':
        topicTitle = 'Addition';
        games = [
          { id: 'dungeon-escape', name: 'Dungeon Escape', description: 'Solve addition problems to escape the dungeon', unlocked: true },
          { id: 'fruit-addition', name: 'Fruit Addition', description: 'Add fruits to practice basic addition', unlocked: false }
        ];
        break;
      case 'subtraction':
        topicTitle = 'Subtraction';
        games = [
          { id: 'space-blast', name: 'Space Blast', description: 'Subtract objects to clear space debris', unlocked: true }
        ];
        break;
      case 'shapes':
        topicTitle = 'Shapes';
        games = [
          { id: 'shape-builder', name: 'Shape Builder', description: 'Build shapes and match the outlines', unlocked: true }
        ];
        break;
    }
  } else if (grade === '2') {
    switch(topic) {
      case 'addition':
        topicTitle = 'Addition';
        games = [
          { id: 'add-blocks', name: 'Add Blocks', description: 'Add two-digit numbers with blocks', unlocked: true }
        ];
        break;
      case 'subtraction':
        topicTitle = 'Subtraction';
        games = [
          { id: 'submarine', name: 'Submarine Math', description: 'Subtract to find the depth of your submarine', unlocked: true }
        ];
        break;
      case 'money':
        topicTitle = 'Money';
        games = [
          { id: 'coin-counter', name: 'Coin Counter', description: 'Count coins and make correct change', unlocked: true }
        ];
        break;
      case 'time':
        topicTitle = 'Time';
        games = [
          { id: 'clock-challenge', name: 'Clock Challenge', description: 'Set the clock to the correct time', unlocked: true }
        ];
        break;
    }
  } else if (grade === '3') {
    switch(topic) {
      case 'multiplication':
        topicTitle = 'Multiplication';
        games = [
          { id: 'space-shooter', name: 'Space Shooter', description: 'Practice multiplication by shooting correct answers', unlocked: true },
          { id: 'times-tables', name: 'Times Tables', description: 'Practice multiplication facts', unlocked: true }
        ];
        break;
      case 'division':
        topicTitle = 'Division';
        games = [
          { id: 'pizza-division', name: 'Pizza Division', description: 'Divide pizzas equally among friends', unlocked: true }
        ];
        break;
      case 'fractions':
        topicTitle = 'Fractions';
        games = [
          { id: 'fraction-bars', name: 'Fraction Bars', description: 'Match equivalent fractions', unlocked: true }
        ];
        break;
      case 'area':
        topicTitle = 'Area';
        games = [
          { id: 'area-builder', name: 'Area Builder', description: 'Build rectangles with specific areas', unlocked: true }
        ];
        break;
    }
  } else if (grade === '4') {
    switch(topic) {
      case 'multidigit':
        topicTitle = 'Multi-digit Math';
        games = [
          { id: 'multiplication-grid', name: 'Multiplication Grid', description: 'Use the area model for multi-digit multiplication', unlocked: true }
        ];
        break;
      case 'factors':
        topicTitle = 'Factors & Multiples';
        games = [
          { id: 'factor-finder', name: 'Factor Finder', description: 'Find factors of numbers', unlocked: true }
        ];
        break;
      case 'fractions':
        topicTitle = 'Fraction Operations';
        games = [
          { id: 'fraction-add', name: 'Fraction Addition', description: 'Add fractions with like denominators', unlocked: true }
        ];
        break;
      case 'angles':
        topicTitle = 'Angles';
        games = [
          { id: 'angle-hunter', name: 'Angle Hunter', description: 'Find and measure angles', unlocked: true }
        ];
        break;
    }
  } else if (grade === '5') {
    switch(topic) {
      case 'decimals':
        topicTitle = 'Decimals';
        games = [
          { id: 'decimal-dash', name: 'Decimal Dash', description: 'Order decimals on a number line', unlocked: true }
        ];
        break;
      case 'fractions':
        topicTitle = 'Fraction Operations';
        games = [
          { id: 'fraction-multiply', name: 'Fraction Multiplication', description: 'Multiply fractions', unlocked: true }
        ];
        break;
      case 'volume':
        topicTitle = 'Volume';
        games = [
          { id: 'volume-quest', name: 'Volume Quest', description: 'Calculate the volume of rectangular prisms', unlocked: true }
        ];
        break;
      case 'coordinates':
        topicTitle = 'Coordinate Plane';
        games = [
          { id: 'coordinate-quest', name: 'Coordinate Quest', description: 'Plot points on a coordinate plane', unlocked: true }
        ];
        break;
    }
  } else {
    // For grades 6-8, show some default games
    topicTitle = topic.charAt(0).toUpperCase() + topic.slice(1);
    games = [
      { id: 'pattern-puzzle', name: 'Pattern Puzzle', description: 'Complete the pattern by finding the missing piece', unlocked: true }
    ];
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
      <div class="welcome-section fade-in" style="padding-top: 30px; padding-bottom: 10px;">
        <h2>${gradeTitle} - ${topicTitle}</h2>
        <p>Select a game below to start practicing your ${topicTitle.toLowerCase()} skills!</p>
      </div>
      
      <div class="game-header fade-in" style="display: flex; justify-content: flex-start; margin: 10px 0 20px;">
        <a href="#/topics?grade=${grade}" class="btn" style="box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
          <span style="margin-right: 5px;">&#8592;</span> Back to Topics
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
              <a href="${game.unlocked ? `#/game?id=${game.id}&grade=${grade}&topic=${topic}` : '#'}" 
                 class="btn ${!game.unlocked ? 'btn-disabled' : ''}" 
                 ${!game.unlocked ? 'disabled' : ''}>
                ${game.unlocked ? 'Play Game' : 'Coming Soon'}
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
    case 'space-shooter':
      gameTitle = 'Space Shooter';
      gameDescription = 'Practice multiplication by shooting correct answers!';
      break;
    case 'times-tables':
      gameTitle = 'Times Tables';
      gameDescription = 'Learn multiplication facts with an interactive times table!';
      break;
    case 'decimal-dash':
      gameTitle = 'Decimal Dash';
      gameDescription = 'Order decimals from smallest to largest on a number line!';
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
      <div class="welcome-section fade-in" style="padding-top: 30px; padding-bottom: 10px;">
        <h2 style="font-size: 2.4rem;">${gameTitle}</h2>
        <p style="font-size: 1.1rem; margin-bottom: 10px;">${gameDescription}</p>
      </div>
      
      <div class="game-header fade-in" style="display: flex; justify-content: space-between; align-items: center; margin: 10px 0 20px;">
        <a href="javascript:history.back()" class="btn" style="box-shadow: 0 3px 10px rgba(0,0,0,0.1);">
          <span style="margin-right: 5px;">&#8592;</span> Back
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
          <button id="submit-answer" class="btn">Submit Answer</button>
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
        <a href="#/" class="btn fade-in" style="animation-delay: 0.4s">Back to Home</a>
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

// Setup Mobile Menu Toggle
function setupMobileMenu() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('nav');
  
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      nav.classList.toggle('active');
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


import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

export function setupDungeonEscape(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  console.log("Setting up Dungeon Escape game with canvas:", 
    gameCanvas ? "found" : "not found", 
    "Dimensions:", gameCanvas.clientWidth, "x", gameCanvas.clientHeight);
  
  if (!gameCanvas) {
    console.error("Game canvas element not found!");
    return;
  }
  
  // Force explicit dimensions if not set
  if (!gameCanvas.clientWidth || !gameCanvas.clientHeight) {
    console.log("Canvas dimensions not set, forcing explicit dimensions");
    gameCanvas.style.width = '100%';
    gameCanvas.style.height = '500px';
    gameCanvas.style.minHeight = '500px';
    gameCanvas.style.backgroundColor = '#f0f0f0';
    gameCanvas.style.border = '1px solid #ccc';
  }
  
  // Clear any existing content
  while (gameCanvas.firstChild) {
    gameCanvas.removeChild(gameCanvas.firstChild);
  }
  
  // Create a scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x333333);
  
  // Default dimensions if client dimensions are not available yet
  const defaultWidth = 800;
  const defaultHeight = 600;
  
  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    75, 
    (gameCanvas.clientWidth && gameCanvas.clientHeight) ? 
      gameCanvas.clientWidth / gameCanvas.clientHeight : 
      defaultWidth / defaultHeight, 
    0.1, 
    1000
  );
  camera.position.z = 5;
  
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  
  // Set default size, will be resized after DOM is fully loaded
  renderer.setSize(
    gameCanvas.clientWidth || defaultWidth, 
    gameCanvas.clientHeight || defaultHeight
  );
  
  console.log("Renderer created with size:", 
    renderer.domElement.width, 
    renderer.domElement.height
  );
  
  // Add the renderer to the DOM
  gameCanvas.appendChild(renderer.domElement);
  
  // Create a dungeon door
  const doorGeometry = new THREE.BoxGeometry(2, 3, 0.2);
  const doorMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
  const door = new THREE.Mesh(doorGeometry, doorMaterial);
  scene.add(door);
  
  // Create walls
  const wallGeometry = new THREE.BoxGeometry(10, 5, 0.2);
  const wallMaterial = new THREE.MeshPhongMaterial({ color: 0x696969 });
  const wall = new THREE.Mesh(wallGeometry, wallMaterial);
  wall.position.z = -1;
  scene.add(wall);
  
  // Create floor
  const floorGeometry = new THREE.PlaneGeometry(10, 5);
  const floorMaterial = new THREE.MeshPhongMaterial({ color: 0x696969, side: THREE.DoubleSide });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);
  floor.rotation.x = Math.PI / 2;
  floor.position.y = -2.5;
  scene.add(floor);
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Game variables
  let level = 1;
  let score = 0;
  let currentQuestion = '';
  let correctAnswer = 0;
  let doorOpen = false;
  
  // Generate a question
  function generateQuestion() {
    const num1 = Math.floor(Math.random() * (5 * level)) + 1;
    const num2 = Math.floor(Math.random() * (5 * level)) + 1;
    
    if (Math.random() > 0.5) {
      // Addition
      currentQuestion = `${num1} + ${num2} = ?`;
      correctAnswer = num1 + num2;
    } else {
      // Subtraction (ensure positive result)
      if (num1 >= num2) {
        currentQuestion = `${num1} - ${num2} = ?`;
        correctAnswer = num1 - num2;
      } else {
        currentQuestion = `${num2} - ${num1} = ?`;
        correctAnswer = num2 - num1;
      }
    }
    
    console.log("Generated question:", currentQuestion, "Answer:", correctAnswer);
    questionContainer.textContent = currentQuestion;
  }
  
  // Check answer
  function checkAnswer() {
    const userAnswer = parseInt(answerInput.value);
    
    if (isNaN(userAnswer)) {
      return; // Not a valid number
    }
    
    console.log("Checking answer:", userAnswer, "Correct answer:", correctAnswer);
    
    if (userAnswer === correctAnswer) {
      // Correct answer
      score += 10 * level;
      scoreElement.textContent = score;
      
      // Open the door
      doorOpen = true;
      const openDoorTween = new TWEEN.Tween(door.position)
        .to({ y: 4 }, 1000)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
      
      // After a delay, move to next level
      setTimeout(() => {
        level++;
        doorOpen = false;
        
        // Reset door position
        const closeDoorTween = new TWEEN.Tween(door.position)
          .to({ y: 0 }, 500)
          .easing(TWEEN.Easing.Cubic.In)
          .start();
        
        // Generate new question
        setTimeout(generateQuestion, 600);
      }, 2000);
    } else {
      // Wrong answer - shake the door
      const shakeTween = new TWEEN.Tween(door.position)
        .to({ x: 0.2 }, 50)
        .yoyo(true)
        .repeat(5)
        .start();
      
      setTimeout(() => {
        door.position.x = 0;
      }, 300);
    }
    
    // Clear input
    answerInput.value = '';
  }
  
  // Event listeners
  console.log("Setting up event listeners");
  submitButton.addEventListener('click', checkAnswer);
  answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  });
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    
    if (!doorOpen) {
      door.rotation.y = Math.sin(Date.now() * 0.001) * 0.05;
    }
    
    TWEEN.update();
    
    renderer.render(scene, camera);
  }
  
  // Resize handler to ensure proper rendering dimensions
  function handleResize() {
    if (gameCanvas.clientWidth > 0 && gameCanvas.clientHeight > 0) {
      console.log("Resizing:", gameCanvas.clientWidth, gameCanvas.clientHeight);
      camera.aspect = gameCanvas.clientWidth / gameCanvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(gameCanvas.clientWidth, gameCanvas.clientHeight);
    }
  }
  
  // Handle window resize
  window.addEventListener('resize', handleResize);
  
  // Force a resize after a delay to ensure DOM layout is complete
  setTimeout(handleResize, 100);
  
  // Start the game
  generateQuestion();
  animate();
  
  console.log("Dungeon Escape game setup complete");
  
  return { scene, camera, renderer };
} 
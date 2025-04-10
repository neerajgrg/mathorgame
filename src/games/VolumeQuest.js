import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

export function setupVolumeQuest(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  console.log("Setting up Volume Quest game...");
  console.log("Game canvas dimensions:", gameCanvas.clientWidth, gameCanvas.clientHeight);
  
  // Clear any existing content
  while (gameCanvas.firstChild) {
    gameCanvas.removeChild(gameCanvas.firstChild);
  }
  
  // Create a scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a2639);
  
  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, 
    gameCanvas.clientWidth && gameCanvas.clientHeight ? gameCanvas.clientWidth / gameCanvas.clientHeight : 2, 
    0.1, 1000);
  camera.position.z = 7;
  camera.position.y = 2;
  
  // Create a renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  
  // Set default size, will be resized after DOM is fully loaded
  renderer.setSize(
    gameCanvas.clientWidth || 800, 
    gameCanvas.clientHeight || 600
  );
  
  // Add the renderer to the DOM
  gameCanvas.appendChild(renderer.domElement);
  
  console.log("Renderer created with size:", 
    renderer.domElement.width, 
    renderer.domElement.height
  );
  
  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Game variables
  let score = 0;
  let level = 1;
  let currentShape = null;
  let currentVolume = 0;
  
  // Create a 3D shape with calculable volume
  function createVolumeShape() {
    // Remove previous shape if it exists
    if (currentShape) scene.remove(currentShape);
    
    // Choose shape type based on level
    let shapeGeometry, shapeMaterial, volume;
    const material = new THREE.MeshPhongMaterial({ 
      color: 0x3498db, 
      transparent: true, 
      opacity: 0.9,
      shininess: 100 
    });
    
    // Create a wireframe material
    const wireframeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      wireframe: true, 
      transparent: true
    });
    
    // Based on level, create different shapes
    if (level <= 2) {
      // Cube or box (simple)
      const width = Math.ceil(Math.random() * 3) + 1;
      const height = Math.ceil(Math.random() * 3) + 1;
      const depth = Math.ceil(Math.random() * 3) + 1;
      
      shapeGeometry = new THREE.BoxGeometry(width, height, depth);
      volume = width * height * depth;
      
      questionContainer.textContent = `Calculate the volume of this rectangular prism (width=${width}, height=${height}, depth=${depth})`;
    } else if (level <= 4) {
      // Cylinder (medium)
      const radius = Math.ceil(Math.random() * 2) + 1;
      const height = Math.ceil(Math.random() * 4) + 1;
      
      shapeGeometry = new THREE.CylinderGeometry(radius, radius, height, 32);
      volume = Math.PI * radius * radius * height;
      
      questionContainer.textContent = `Calculate the volume of this cylinder (radius=${radius}, height=${height}). Use 3.14 for π.`;
    } else {
      // Sphere (harder)
      const radius = Math.ceil(Math.random() * 2) + 1;
      
      shapeGeometry = new THREE.SphereGeometry(radius, 32, 32);
      volume = (4/3) * Math.PI * radius * radius * radius;
      
      questionContainer.textContent = `Calculate the volume of this sphere (radius=${radius}). Use 3.14 for π.`;
    }
    
    // Create the shape
    currentShape = new THREE.Group();
    
    // Add solid shape
    const solidMesh = new THREE.Mesh(shapeGeometry, material);
    currentShape.add(solidMesh);
    
    // Add wireframe
    const wireframeMesh = new THREE.Mesh(shapeGeometry, wireframeMaterial);
    currentShape.add(wireframeMesh);
    
    // Store the volume
    currentVolume = Math.round(volume * 100) / 100; // Round to 2 decimal places
    
    // Add to scene
    scene.add(currentShape);
    
    // Update score display
    scoreElement.textContent = score;
    
    // Clear input
    answerInput.value = '';
  }
  
  // Check user's answer
  function checkAnswer() {
    const userAnswer = parseFloat(answerInput.value);
    
    if (isNaN(userAnswer)) {
      alert("Please enter a valid number!");
      return;
    }
    
    // Calculate how close the answer is (within 5%)
    const difference = Math.abs(userAnswer - currentVolume);
    const percentError = (difference / currentVolume) * 100;
    
    if (percentError <= 5) {
      // Correct!
      const points = Math.max(10, 25 - Math.floor(percentError));
      score += points * level;
      
      questionContainer.textContent = `Correct! The volume is ${currentVolume}. You earned ${points * level} points!`;
      scoreElement.textContent = score;
      
      // Animate the shape
      new TWEEN.Tween(currentShape.scale)
        .to({ x: 1.5, y: 1.5, z: 1.5 }, 300)
        .easing(TWEEN.Easing.Quadratic.Out)
        .yoyo(true)
        .repeat(1)
        .start();
      
      // Advance to next level after delay
      setTimeout(() => {
        level++;
        createVolumeShape();
      }, 2000);
    } else {
      // Incorrect
      questionContainer.textContent = `Try again! Your answer is off by ${Math.round(percentError)}%.`;
      
      // Shake the shape to indicate wrong answer
      new TWEEN.Tween(currentShape.position)
        .to({ x: 0.3 }, 50)
        .easing(TWEEN.Easing.Quadratic.Out)
        .yoyo(true)
        .repeat(5)
        .start();
    }
    
    // Clear input
    answerInput.value = '';
  }
  
  // Event listeners
  submitButton.addEventListener('click', checkAnswer);
  answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      checkAnswer();
    }
  });
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    
    if (currentShape) {
      // Rotate the shape slowly
      currentShape.rotation.y += 0.005;
      currentShape.rotation.x += 0.002;
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
  createVolumeShape();
  animate();
  
  return { scene, camera, renderer };
} 
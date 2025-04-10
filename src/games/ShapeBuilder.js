import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

export function setupShapeBuilder(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  console.log("Setting up Shape Builder game...");
  console.log("Game canvas dimensions:", gameCanvas.clientWidth, gameCanvas.clientHeight);
  
  // Clear any existing content
  while (gameCanvas.firstChild) {
    gameCanvas.removeChild(gameCanvas.firstChild);
  }
  
  // Create a scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x2c3e50);
  
  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, 
    gameCanvas.clientWidth && gameCanvas.clientHeight ? gameCanvas.clientWidth / gameCanvas.clientHeight : 2, 
    0.1, 1000);
  camera.position.z = 10;
  
  // Create a renderer with antialiasing
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
  let targetShape = null;
  let userShape = null;
  let shapes = [];
  let correctPieces = 0;
  let totalPieces = 0;
  
  // Shape types for the game
  const shapeTypes = [
    { name: 'cube', geometry: new THREE.BoxGeometry(1, 1, 1) },
    { name: 'sphere', geometry: new THREE.SphereGeometry(0.5, 32, 32) },
    { name: 'cylinder', geometry: new THREE.CylinderGeometry(0.5, 0.5, 1, 32) },
    { name: 'cone', geometry: new THREE.ConeGeometry(0.5, 1, 32) },
    { name: 'torus', geometry: new THREE.TorusGeometry(0.5, 0.2, 16, 32) },
  ];
  
  // Materials for the shapes
  const materials = [
    new THREE.MeshPhongMaterial({ color: 0x3498db, shininess: 100 }),
    new THREE.MeshPhongMaterial({ color: 0x2ecc71, shininess: 100 }),
    new THREE.MeshPhongMaterial({ color: 0xe74c3c, shininess: 100 }),
    new THREE.MeshPhongMaterial({ color: 0xf1c40f, shininess: 100 }),
    new THREE.MeshPhongMaterial({ color: 0x9b59b6, shininess: 100 }),
  ];
  
  // Create a target outline shape
  function createTargetShape() {
    // Remove any existing target shape
    if (targetShape) scene.remove(targetShape);
    
    // Choose a random number of pieces for the target shape (more pieces for higher levels)
    totalPieces = Math.min(3 + level, 8);
    
    // Create a group to hold all pieces
    targetShape = new THREE.Group();
    
    // Position the pieces in the left half of the screen
    targetShape.position.x = -4;
    
    // Add random pieces to build a complex shape
    for (let i = 0; i < totalPieces; i++) {
      const shapeIndex = Math.floor(Math.random() * shapeTypes.length);
      const materialIndex = Math.floor(Math.random() * materials.length);
      
      // Create a piece with wireframe material to show it as an outline
      const outlineMaterial = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        wireframe: true,
        transparent: true,
        opacity: 0.7
      });
      
      const piece = new THREE.Mesh(shapeTypes[shapeIndex].geometry, outlineMaterial);
      
      // Position pieces relative to each other
      piece.position.x = (Math.random() - 0.5) * 2;
      piece.position.y = (Math.random() - 0.5) * 2;
      piece.position.z = (Math.random() - 0.5) * 1;
      
      // Store the shape type for later comparison
      piece.userData.shapeType = shapeTypes[shapeIndex].name;
      piece.userData.materialIndex = materialIndex;
      
      targetShape.add(piece);
    }
    
    scene.add(targetShape);
    
    // Create user shape container (right side)
    if (userShape) scene.remove(userShape);
    userShape = new THREE.Group();
    userShape.position.x = 4;
    scene.add(userShape);
    
    // Clear shapes array
    shapes = [];
    correctPieces = 0;
    
    // Update the question
    questionContainer.textContent = `Build a shape that matches the outline (${totalPieces} pieces needed)`;
    
    // Clear the input
    answerInput.value = '';
    
    // Update score display
    scoreElement.textContent = score;
  }
  
  // Process user input for shape building
  function processShapeInput() {
    const input = answerInput.value.trim().toLowerCase();
    
    // Check if the input is a valid shape type
    const validShapes = shapeTypes.map(s => s.name);
    if (!validShapes.includes(input)) {
      alert(`Invalid shape! Try one of: ${validShapes.join(', ')}`);
      return;
    }
    
    // If we already have enough pieces, return
    if (shapes.length >= totalPieces) {
      alert("You've added all the pieces needed! Check your answer.");
      return;
    }
    
    // Find the shape type
    const shapeType = shapeTypes.find(s => s.name === input);
    if (!shapeType) return;
    
    // Create the shape with a random material
    const materialIndex = Math.floor(Math.random() * materials.length);
    const piece = new THREE.Mesh(shapeType.geometry, materials[materialIndex]);
    
    // Position it in the user shape group
    piece.position.x = (Math.random() - 0.5) * 2;
    piece.position.y = (Math.random() - 0.5) * 2;
    piece.position.z = (Math.random() - 0.5) * 1;
    
    // Store the shape type
    piece.userData.shapeType = shapeType.name;
    
    // Add to user shape
    userShape.add(piece);
    shapes.push(piece);
    
    // Clear the input
    answerInput.value = '';
    
    // Update the question to show progress
    questionContainer.textContent = `Build a shape that matches the outline (${totalPieces - shapes.length} more pieces needed)`;
    
    // If we have all the pieces, automatically check the answer
    if (shapes.length === totalPieces) {
      checkAnswer();
    }
  }
  
  // Check if the user's shape matches the target
  function checkAnswer() {
    // Simple check: do we have the right number of pieces?
    if (shapes.length !== totalPieces) {
      alert(`You need to add ${totalPieces - shapes.length} more pieces!`);
      return;
    }
    
    // Count how many shapes match the target (simplified logic)
    correctPieces = 0;
    const targetShapes = [];
    
    // Get all the shape types from the target
    targetShape.children.forEach(child => {
      targetShapes.push(child.userData.shapeType);
    });
    
    // Check how many of the user's shapes match the target
    shapes.forEach(shape => {
      if (targetShapes.includes(shape.userData.shapeType)) {
        correctPieces++;
        // Remove this shape from targetShapes so it can't be matched twice
        const index = targetShapes.indexOf(shape.userData.shapeType);
        if (index > -1) targetShapes.splice(index, 1);
      }
    });
    
    // Calculate accuracy percentage
    const accuracy = Math.round((correctPieces / totalPieces) * 100);
    
    // Update score based on accuracy
    const levelPoints = 10 * level;
    const pointsEarned = Math.round((levelPoints * accuracy) / 100);
    score += pointsEarned;
    
    // Display result
    questionContainer.textContent = `You matched ${accuracy}% of the shapes! +${pointsEarned} points`;
    scoreElement.textContent = score;
    
    // Animate the user shape to indicate completion
    new TWEEN.Tween(userShape.rotation)
      .to({ y: Math.PI * 2 }, 1000)
      .easing(TWEEN.Easing.Quadratic.Out)
      .start();
    
    // After a delay, start the next level
    setTimeout(() => {
      // Increase level if accuracy is good enough
      if (accuracy >= 70) {
        level++;
      }
      
      // Start a new round
      createTargetShape();
    }, 2000);
  }
  
  // Event listeners
  submitButton.addEventListener('click', processShapeInput);
  answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      processShapeInput();
    }
  });
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    
    // Slowly rotate the target shape
    if (targetShape) {
      targetShape.rotation.y += 0.005;
    }
    
    // Update the animations
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
  createTargetShape();
  animate();
  
  return { scene, camera, renderer };
} 
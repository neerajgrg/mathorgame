import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

export function setupNumberLine(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  console.log("Setting up Number Line game with canvas:", 
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
  scene.background = new THREE.Color(0x87CEEB); // Sky blue background
  
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
  camera.position.z = 10;
  
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
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);
  
  // Add directional light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  
  // Game variables
  let level = 1;
  let score = 0;
  let numberRange = 10; // Start with numbers 1-10
  let currentNumbers = [];
  let numberBoxes = [];
  let slots = [];
  let draggingBox = null;
  let dragOffset = new THREE.Vector3();
  let draggingIndex = -1;
  let correctPositions = 0;
  
  // Create number line
  const lineGeometry = new THREE.BoxGeometry(16, 0.1, 0.1);
  const lineMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
  const numberLine = new THREE.Mesh(lineGeometry, lineMaterial);
  numberLine.position.y = -2;
  scene.add(numberLine);
  
  // Create tick marks on number line
  const createTickMarks = (count) => {
    // Clear existing tick marks
    scene.children.forEach(child => {
      if (child.userData.isTickMark || child.userData.isLabel) {
        scene.remove(child);
      }
    });
    
    // Create new tick marks
    const tickWidth = 14 / (count + 1);
    for (let i = 0; i <= count + 1; i++) {
      const tickGeometry = new THREE.BoxGeometry(0.05, 0.4, 0.05);
      const tickMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
      const tick = new THREE.Mesh(tickGeometry, tickMaterial);
      tick.position.x = -7 + i * tickWidth;
      tick.position.y = -2;
      tick.userData.isTickMark = true;
      scene.add(tick);
      
      // Add text labels for the start and end of number line
      if (i === 0 || i === count + 1) {
        const label = i === 0 ? "0" : String(count + 1);
        
        // Create colored cubes with number labels (stored in userData)
        const labelSize = 0.4;
        const labelGeometry = new THREE.BoxGeometry(labelSize, labelSize, labelSize);
        const labelMaterial = new THREE.MeshPhongMaterial({ 
          color: i === 0 ? 0x4285F4 : 0xEA4335, // Blue for start, red for end
          shininess: 80
        });
        const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial);
        labelMesh.position.x = tick.position.x;
        labelMesh.position.y = -2.7;
        labelMesh.userData.label = label;
        labelMesh.userData.isLabel = true;
        scene.add(labelMesh);
        
        // Create a HTML-based label outside Three.js for the numbers
        const labelDiv = document.createElement('div');
        labelDiv.textContent = label;
        labelDiv.style.position = 'absolute';
        labelDiv.style.fontFamily = 'Arial, sans-serif';
        labelDiv.style.fontSize = '16px';
        labelDiv.style.fontWeight = 'bold';
        labelDiv.style.color = 'white';
        labelDiv.style.textAlign = 'center';
        labelDiv.style.pointerEvents = 'none'; // Don't block mouse events
        
        // We'll update the position of these in the render loop
        labelDiv.id = `label-${i}`;
        gameCanvas.appendChild(labelDiv);
      }
    }
    
    // Create slots for numbers
    slots = [];
    const slotWidth = 14 / (count + 1);
    for (let i = 1; i <= count; i++) {
      const slotPosition = new THREE.Vector3(-7 + i * slotWidth, -2, 0);
      slots.push(slotPosition);
    }
    
    return slots;
  };
  
  // Create draggable number boxes
  const createNumberBoxes = (numbers) => {
    // Clear existing number boxes
    numberBoxes.forEach(box => {
      scene.remove(box);
    });
    numberBoxes = [];
    
    // Create new number boxes in random order at the top of the screen
    const shuffledNumbers = [...numbers].sort(() => Math.random() - 0.5);
    const boxWidth = 0.8;
    const spacing = boxWidth * 1.2;
    const totalWidth = shuffledNumbers.length * spacing;
    const startX = -totalWidth / 2 + boxWidth / 2;
    
    shuffledNumbers.forEach((num, index) => {
      const boxGeometry = new THREE.BoxGeometry(boxWidth, boxWidth, boxWidth);
      const boxMaterial = new THREE.MeshPhongMaterial({ 
        color: new THREE.Color(`hsl(${num * 25}, 80%, 65%)`),
        shininess: 100
      });
      const box = new THREE.Mesh(boxGeometry, boxMaterial);
      box.position.x = startX + index * spacing;
      box.position.y = 2;
      box.userData = {
        number: num,
        originalPosition: box.position.clone(),
        isDraggable: true
      };
      scene.add(box);
      numberBoxes.push(box);
      
      // Create a HTML-based label for the number
      const numberLabel = document.createElement('div');
      numberLabel.textContent = String(num);
      numberLabel.style.position = 'absolute';
      numberLabel.style.fontFamily = 'Arial, sans-serif';
      numberLabel.style.fontSize = '18px';
      numberLabel.style.fontWeight = 'bold';
      numberLabel.style.color = 'white';
      numberLabel.style.textAlign = 'center';
      numberLabel.style.pointerEvents = 'none'; // Don't block mouse events
      
      // We'll update the position of these in the render loop
      numberLabel.id = `number-${num}-${index}`;
      gameCanvas.appendChild(numberLabel);
      
      // Store reference to the label in userData
      box.userData.labelElement = numberLabel;
    });
    
    return numberBoxes;
  };
  
  // Generate a question based on level
  function generateQuestion() {
    // Clear the scene of previous level objects
    slots = [];
    currentNumbers = [];
    correctPositions = 0;
    
    // Clear any HTML labels from previous levels
    const labels = gameCanvas.querySelectorAll('div[id^="number-"], div[id^="label-"]');
    labels.forEach(label => label.remove());
    
    // Increase difficulty with level
    numberRange = Math.min(5 + level * 5, 20);
    
    // For early levels, use sequential numbers
    // For higher levels, use numbers with gaps
    let count = level <= 3 ? 5 : Math.min(7, 3 + level);
    
    if (level <= 2) {
      // Sequential numbers for early levels (1, 2, 3, 4, 5)
      currentNumbers = Array.from({ length: count }, (_, i) => i + 1);
    } else if (level <= 4) {
      // Numbers with small gaps (e.g., 2, 4, 6, 8, 10)
      currentNumbers = Array.from({ length: count }, (_, i) => (i + 1) * 2);
    } else {
      // Random numbers within range, sorted
      currentNumbers = [];
      while (currentNumbers.length < count) {
        const num = Math.floor(Math.random() * numberRange) + 1;
        if (!currentNumbers.includes(num)) {
          currentNumbers.push(num);
        }
      }
      currentNumbers.sort((a, b) => a - b);
    }
    
    // Create the number line with appropriate slots
    createTickMarks(count);
    
    // Create draggable number boxes
    createNumberBoxes(currentNumbers);
    
    // Set question text
    questionContainer.textContent = `Place the numbers in order from smallest to largest on the number line.`;
    
    // Clear input and hide it for this game
    answerInput.style.display = 'none';
    submitButton.textContent = 'Check Answers';
  }
  
  // Handle dragging functionality
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  // Convert mouse position to normalized device coordinates
  function updateMousePosition(event) {
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
  }
  
  // Mouse down event
  gameCanvas.addEventListener('mousedown', (event) => {
    updateMousePosition(event);
    
    // Cast a ray
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(numberBoxes);
    
    if (intersects.length > 0) {
      draggingBox = intersects[0].object;
      if (draggingBox.userData.isDraggable) {
        draggingIndex = numberBoxes.indexOf(draggingBox);
        
        // Calculate the offset from the center of the box
        const intersectionPoint = intersects[0].point;
        dragOffset.copy(draggingBox.position).sub(intersectionPoint);
        
        // Make the dragged box appear above others
        draggingBox.position.z = 1;
        
        // Apply a scale effect to show it's being dragged
        new TWEEN.Tween(draggingBox.scale)
          .to({ x: 1.2, y: 1.2, z: 1.2 }, 200)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
      }
    }
  });
  
  // Mouse move event
  gameCanvas.addEventListener('mousemove', (event) => {
    updateMousePosition(event);
    
    if (draggingBox) {
      // Cast a ray
      raycaster.setFromCamera(mouse, camera);
      const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const intersectionPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(planeZ, intersectionPoint);
      
      // Update box position, adding the offset
      draggingBox.position.x = intersectionPoint.x + dragOffset.x;
      draggingBox.position.y = intersectionPoint.y + dragOffset.y;
    }
  });
  
  // Mouse up event
  gameCanvas.addEventListener('mouseup', () => {
    if (draggingBox) {
      // Check if the box is close to any slot
      let closestSlot = null;
      let minDistance = 1.0; // Threshold for snapping
      
      slots.forEach(slot => {
        const distance = draggingBox.position.distanceTo(slot);
        if (distance < minDistance) {
          minDistance = distance;
          closestSlot = slot;
        }
      });
      
      if (closestSlot) {
        // Snap to slot
        new TWEEN.Tween(draggingBox.position)
          .to({ x: closestSlot.x, y: closestSlot.y, z: 0 }, 200)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
      } else {
        // Return to original position
        new TWEEN.Tween(draggingBox.position)
          .to({ 
            x: draggingBox.userData.originalPosition.x, 
            y: draggingBox.userData.originalPosition.y, 
            z: 0 
          }, 300)
          .easing(TWEEN.Easing.Quadratic.Out)
          .start();
      }
      
      // Restore original scale
      new TWEEN.Tween(draggingBox.scale)
        .to({ x: 1, y: 1, z: 1 }, 200)
        .easing(TWEEN.Easing.Quadratic.Out)
        .start();
      
      draggingBox = null;
      draggingIndex = -1;
    }
  });
  
  // Update HTML label positions based on 3D object positions
  function updateLabelPositions() {
    // Update number labels on boxes
    numberBoxes.forEach(box => {
      if (box.userData.labelElement) {
        const vector = new THREE.Vector3();
        vector.setFromMatrixPosition(box.matrixWorld);
        vector.project(camera);
        
        const widthHalf = renderer.domElement.width / 2;
        const heightHalf = renderer.domElement.height / 2;
        
        const x = (vector.x * widthHalf) + widthHalf;
        const y = -(vector.y * heightHalf) + heightHalf;
        
        box.userData.labelElement.style.left = `${x}px`;
        box.userData.labelElement.style.top = `${y}px`;
      }
    });
    
    // Update labels at the ends of the number line
    for (let i = 0; i <= 1; i++) {
      const labelElement = document.getElementById(`label-${i * (currentNumbers.length + 1)}`);
      if (labelElement) {
        const endLabels = scene.children.filter(child => 
          child.userData.isLabel && child.userData.label === (i === 0 ? "0" : String(currentNumbers.length + 1))
        );
        
        if (endLabels.length > 0) {
          const labelObj = endLabels[0];
          const vector = new THREE.Vector3();
          vector.setFromMatrixPosition(labelObj.matrixWorld);
          vector.project(camera);
          
          const widthHalf = renderer.domElement.width / 2;
          const heightHalf = renderer.domElement.height / 2;
          
          const x = (vector.x * widthHalf) + widthHalf;
          const y = -(vector.y * heightHalf) + heightHalf;
          
          labelElement.style.left = `${x}px`;
          labelElement.style.top = `${y}px`;
        }
      }
    }
  }
  
  // Check answers when submit button is clicked
  function checkAnswers() {
    // Collect the positions of all number boxes
    const boxPositions = numberBoxes.map(box => ({
      number: box.userData.number,
      position: box.position.clone()
    }));
    
    // Sort the positions by x-coordinate to determine their order on the number line
    boxPositions.sort((a, b) => a.position.x - b.position.x);
    
    // Get the numbers in their current order on the number line
    const orderedNumbers = boxPositions.map(box => box.number);
    
    // Check if the numbers are in ascending order
    let correct = true;
    for (let i = 1; i < orderedNumbers.length; i++) {
      if (orderedNumbers[i] < orderedNumbers[i-1]) {
        correct = false;
        break;
      }
    }
    
    if (correct) {
      // Success! Award points and advance to next level
      score += 10 * level;
      scoreElement.textContent = score;
      
      // Animate success effect
      numberBoxes.forEach(box => {
        // Bounce effect
        new TWEEN.Tween(box.position)
          .to({ y: box.position.y + 0.5 }, 200)
          .easing(TWEEN.Easing.Quadratic.Out)
          .chain(
            new TWEEN.Tween(box.position)
            .to({ y: box.position.y }, 200)
            .easing(TWEEN.Easing.Bounce.Out)
          )
          .start();
        
        // Color change to green
        new TWEEN.Tween(box.material.color)
          .to(new THREE.Color(0x00FF00), 300)
          .start();
      });
      
      // Show success message
      questionContainer.textContent = "Great job! Numbers are in the correct order!";
      
      // After a delay, move to next level
      setTimeout(() => {
        level++;
        generateQuestion();
      }, 2000);
    } else {
      // Incorrect order
      questionContainer.textContent = "Not quite right. Try rearranging the numbers in order from smallest to largest.";
      
      // Visual feedback - shake the number line
      const shakeTween = new TWEEN.Tween(numberLine.position)
        .to({ x: 0.2 }, 50)
        .yoyo(true)
        .repeat(5)
        .start();
      
      setTimeout(() => {
        numberLine.position.x = 0;
      }, 300);
    }
  }
  
  // Event listeners
  console.log("Setting up event listeners");
  submitButton.addEventListener('click', checkAnswers);
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    
    // Animate number boxes when not being dragged
    numberBoxes.forEach((box, index) => {
      if (index !== draggingIndex) {
        // Gentle floating animation
        box.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        box.rotation.y += 0.01;
      }
    });
    
    // Update the positions of HTML labels
    updateLabelPositions();
    
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
  
  console.log("Number Line game setup complete");
  
  return { scene, camera, renderer };
} 
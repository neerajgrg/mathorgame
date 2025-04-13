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
  
  // Set up responsive canvas
  const setCanvasDimensions = () => {
    // Make canvas fill its container
    gameCanvas.style.width = '100%';
    
    // Set height based on viewport width (maintain aspect ratio)
    const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    
    // Adjust height based on device width for better mobile experience
    const heightValue = viewportWidth < 768 ? '400px' : '500px';
    gameCanvas.style.height = heightValue;
    gameCanvas.style.minHeight = heightValue;
    gameCanvas.style.backgroundColor = '#f0f0f0';
    gameCanvas.style.border = '1px solid #ccc';
    gameCanvas.style.touchAction = 'none'; // Prevent scrolling while touching canvas
  };
  
  // Apply initial dimensions
  setCanvasDimensions();
  
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
  
  // Adjust camera for mobile view
  const adjustCameraForMobile = () => {
    const isMobile = window.innerWidth < 768;
    // Adjust camera field of view for mobile
    camera.fov = isMobile ? 70 : 75;
    // Adjust z position to fit more on screen for mobile
    camera.position.z = isMobile ? 10 : 10;
    camera.updateProjectionMatrix();
  };
  
  adjustCameraForMobile();
  
  // Create a renderer with pixel ratio adjustment for crisp rendering on high-DPI displays
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit to 2x for performance
  
  // Set default size, will be properly resized later
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
  let isMobile = window.innerWidth < 768;
  
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
        const labelSize = isMobile ? 0.6 : 0.4;
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
        labelDiv.style.fontSize = isMobile ? '20px' : '16px';
        labelDiv.style.fontWeight = 'bold';
        labelDiv.style.color = 'white';
        labelDiv.style.textAlign = 'center';
        labelDiv.style.textShadow = '2px 2px 4px rgba(0,0,0,0.7)';
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
    
    // Adjust box size and spacing for mobile
    const boxWidth = isMobile ? 0.9 : 0.8;
    const spacing = boxWidth * (isMobile ? 1.3 : 1.2);
    const totalWidth = shuffledNumbers.length * spacing;
    const startX = -totalWidth / 2 + boxWidth / 2;
    
    // Create a canvas texture for number labels
    function createNumberTexture(number, color = '#FFFFFF') {
      const canvas = document.createElement('canvas');
      const size = 128;
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext('2d');
      
      // Fill box with gradient
      const gradient = context.createLinearGradient(0, 0, 0, size);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0.2)');
      context.fillStyle = gradient;
      context.fillRect(0, 0, size, size);
      
      // Add number text
      context.font = `bold ${size/2}px Arial, sans-serif`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      
      // Add shadow for better visibility
      context.shadowColor = 'rgba(0, 0, 0, 0.8)';
      context.shadowBlur = 5;
      context.shadowOffsetX = 2;
      context.shadowOffsetY = 2;
      
      // Draw number
      context.fillStyle = color;
      context.fillText(number.toString(), size/2, size/2);
      
      return new THREE.CanvasTexture(canvas);
    }
    
    shuffledNumbers.forEach((num, index) => {
      // Create box geometry
      const boxGeometry = new THREE.BoxGeometry(boxWidth, boxWidth, boxWidth);
      
      // Generate base color for the box
      const baseColor = new THREE.Color(`hsl(${num * 25}, 80%, 65%)`);
      
      // Create materials for each face of the box, with the number on all visible faces
      const texture = createNumberTexture(num, '#FFFFFF');
      
      // Define materials for the cube's six faces
      const materials = [
        new THREE.MeshPhongMaterial({ map: texture, color: baseColor, shininess: 100 }),
        new THREE.MeshPhongMaterial({ map: texture, color: baseColor, shininess: 100 }),
        new THREE.MeshPhongMaterial({ map: texture, color: baseColor, shininess: 100 }),
        new THREE.MeshPhongMaterial({ map: texture, color: baseColor, shininess: 100 }),
        new THREE.MeshPhongMaterial({ map: texture, color: baseColor, shininess: 100 }),
        new THREE.MeshPhongMaterial({ map: texture, color: baseColor, shininess: 100 }),
      ];
      
      const box = new THREE.Mesh(boxGeometry, materials);
      box.position.x = startX + index * spacing;
      box.position.y = 2;
      box.userData = {
        number: num,
        originalPosition: box.position.clone(),
        isDraggable: true
      };
      
      scene.add(box);
      numberBoxes.push(box);
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
    
    // On mobile, limit the maximum number of items for better UX
    if (isMobile && count > 5) count = 5;
    
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
  
  // Convert mouse/touch position to normalized device coordinates
  function updatePointerPosition(event) {
    // Get the correct coordinates whether it's touch or mouse
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;
    
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;
  }
  
  // Mouse/touch down event
  function onPointerDown(event) {
    event.preventDefault();
    updatePointerPosition(event);
    
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
  }
  
  // Mouse/touch move event
  function onPointerMove(event) {
    event.preventDefault();
    if (draggingBox) {
      updatePointerPosition(event);
      
      // Cast a ray
      raycaster.setFromCamera(mouse, camera);
      const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const intersectionPoint = new THREE.Vector3();
      raycaster.ray.intersectPlane(planeZ, intersectionPoint);
      
      // Update box position, adding the offset
      draggingBox.position.x = intersectionPoint.x + dragOffset.x;
      draggingBox.position.y = intersectionPoint.y + dragOffset.y;
    }
  }
  
  // Mouse/touch up event
  function onPointerUp(event) {
    event.preventDefault();
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
          .onComplete(() => onBoxPlaced())
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
  }
  
  // Support both mouse and touch events
  gameCanvas.addEventListener('mousedown', onPointerDown);
  gameCanvas.addEventListener('mousemove', onPointerMove);
  gameCanvas.addEventListener('mouseup', onPointerUp);
  gameCanvas.addEventListener('mouseleave', onPointerUp);
  
  // Touch events for mobile
  gameCanvas.addEventListener('touchstart', onPointerDown, { passive: false });
  gameCanvas.addEventListener('touchmove', onPointerMove, { passive: false });
  gameCanvas.addEventListener('touchend', onPointerUp, { passive: false });
  gameCanvas.addEventListener('touchcancel', onPointerUp, { passive: false });
  
  // Update HTML label positions based on 3D object positions
  function updateLabelPositions() {
    // Only update the end labels (0 and max)
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
          
          // Ensure label is centered on the box
          labelElement.style.transform = 'translate(-50%, -50%)';
          labelElement.style.width = isMobile ? '36px' : '30px';
          labelElement.style.height = isMobile ? '36px' : '30px';
          labelElement.style.lineHeight = isMobile ? '36px' : '30px';
          
          // Add background for better visibility on any color
          labelElement.style.backgroundColor = 'rgba(0,0,0,0.5)';
          labelElement.style.borderRadius = '50%';
          labelElement.style.display = 'flex';
          labelElement.style.justifyContent = 'center';
          labelElement.style.alignItems = 'center';
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
        
        // Color change to green - handle both single material and material array cases
        if (Array.isArray(box.material)) {
          // For material array (texture-based boxes)
          box.material.forEach(mat => {
            new TWEEN.Tween(mat.color)
              .to(new THREE.Color(0x00FF00), 300)
              .start();
          });
        } else if (box.material && box.material.color) {
          // For single material
          new TWEEN.Tween(box.material.color)
            .to(new THREE.Color(0x00FF00), 300)
            .start();
        }
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
  
  // Add auto-check for correct positions
  function checkCorrectPositions() {
    // Check if all boxes are in slots
    let allInSlots = true;
    let boxesInSlots = 0;
    
    // Create a map of boxes at each slot
    const slotMap = new Map();
    slots.forEach((slot, index) => {
      slotMap.set(index, null);
    });
    
    // Find which boxes are in slots
    numberBoxes.forEach(box => {
      let isInSlot = false;
      slots.forEach((slot, index) => {
        if (box.position.distanceTo(slot) < 0.5) {
          slotMap.set(index, box);
          isInSlot = true;
          boxesInSlots++;
        }
      });
      if (!isInSlot) {
        allInSlots = false;
      }
    });
    
    // Update UI feedback
    if (allInSlots && boxesInSlots === slots.length) {
      // All boxes in slots, provide visual cue that checking is available
      submitButton.style.backgroundColor = '#4CAF50'; // Green
      submitButton.style.transform = 'scale(1.05)';
      submitButton.style.boxShadow = '0 0 10px rgba(76, 175, 80, 0.7)';
    } else {
      // Not all boxes in slots
      submitButton.style.backgroundColor = '';
      submitButton.style.transform = '';
      submitButton.style.boxShadow = '';
    }
    
    return allInSlots && boxesInSlots === slots.length;
  }
  
  // Auto-submit when all boxes are correctly positioned and stable
  function tryAutoSubmit() {
    // Only auto-submit if all boxes are in slots and not being dragged
    if (draggingBox === null && checkCorrectPositions()) {
      // Wait a short delay to ensure the user has finished the arrangement
      setTimeout(() => {
        // Double-check that nothing changed during the delay
        if (draggingBox === null && checkCorrectPositions()) {
          checkAnswers();
        }
      }, 1000);
    }
  }
  
  // Add listener for when a box is dropped into position
  function onBoxPlaced() {
    checkCorrectPositions();
    tryAutoSubmit();
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
  
  // Improved resize handler to ensure proper rendering dimensions
  function handleResize() {
    // Update isMobile state
    isMobile = window.innerWidth < 768;
    
    // Update canvas dimensions
    setCanvasDimensions();
    
    // Update camera for mobile/desktop view
    adjustCameraForMobile();
    
    if (gameCanvas.clientWidth > 0 && gameCanvas.clientHeight > 0) {
      console.log("Resizing:", gameCanvas.clientWidth, gameCanvas.clientHeight);
      camera.aspect = gameCanvas.clientWidth / gameCanvas.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(gameCanvas.clientWidth, gameCanvas.clientHeight, false);
      
      // Force regenerate the current level with updated mobile settings
      generateQuestion();
    }
  }
  
  // Handle window resize
  window.addEventListener('resize', debounce(handleResize, 250));
  
  // Debounce function to prevent too many resize events
  function debounce(func, wait) {
    let timeout;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  
  // Force a resize after a delay to ensure DOM layout is complete
  setTimeout(handleResize, 100);
  
  // Start the game
  generateQuestion();
  animate();
  
  console.log("Number Line game setup complete");
  
  return { scene, camera, renderer };
} 
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

export function setupCountObjects(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  console.log("Setting up Count Objects game with canvas:", 
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
  scene.background = new THREE.Color(0xEFF5FB); // Soft light blue background
  
  // Default dimensions if client dimensions are not available yet
  const defaultWidth = 800;
  const defaultHeight = 600;
  
  // Create a camera
  const camera = new THREE.PerspectiveCamera(
    60, 
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
  
  // Create playarea - a simple platform where objects will be placed
  const playAreaGeometry = new THREE.BoxGeometry(12, 0.2, 8);
  const playAreaMaterial = new THREE.MeshStandardMaterial({ 
    color: 0xE6EFF5, // Soft light blue-gray
    roughness: 0.8,
    metalness: 0.1
  });
  const playArea = new THREE.Mesh(playAreaGeometry, playAreaMaterial);
  playArea.position.y = -2;
  scene.add(playArea);
  
  // Game variables
  let level = 1;
  let score = 0;
  let currentObjectCount = 0;
  let gameObjects = [];
  
  // Object types that will appear in the game
  const objectTypes = [
    {
      name: 'cube',
      create: () => {
        const size = 0.6 + Math.random() * 0.3; // Reduced variation
        const geometry = new THREE.BoxGeometry(size, size, size);
        // Material will be set in createObjects with a child-friendly color
        const material = new THREE.MeshStandardMaterial({ 
          color: 0xffffff,
          roughness: 0.7,
          metalness: 0.1
        });
        return new THREE.Mesh(geometry, material);
      }
    },
    {
      name: 'sphere',
      create: () => {
        const radius = 0.3 + Math.random() * 0.2; // Reduced variation
        const geometry = new THREE.SphereGeometry(radius, 16, 16); // Reduced complexity
        const material = new THREE.MeshStandardMaterial({ 
          color: 0xffffff,
          roughness: 0.7,
          metalness: 0.1
        });
        return new THREE.Mesh(geometry, material);
      }
    },
    {
      name: 'cone',
      create: () => {
        const radius = 0.3 + Math.random() * 0.2;
        const height = 0.6 + Math.random() * 0.3; // Reduced variation
        const geometry = new THREE.ConeGeometry(radius, height, 16); // Reduced complexity
        const material = new THREE.MeshStandardMaterial({ 
          color: 0xffffff,
          roughness: 0.7,
          metalness: 0.1
        });
        return new THREE.Mesh(geometry, material);
      }
    },
    {
      name: 'cylinder',
      create: () => {
        const radius = 0.3 + Math.random() * 0.2;
        const height = 0.5 + Math.random() * 0.3; // Reduced variation
        const geometry = new THREE.CylinderGeometry(radius, radius, height, 16); // Reduced complexity
        const material = new THREE.MeshStandardMaterial({ 
          color: 0xffffff,
          roughness: 0.7,
          metalness: 0.1
        });
        return new THREE.Mesh(geometry, material);
      }
    }
  ];
  
  // Create number buttons for answering
  const createAnswerButtons = () => {
    // Clear existing buttons
    const existingButtons = document.querySelectorAll('.count-answer-btn');
    existingButtons.forEach(btn => btn.remove());
    
    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.justifyContent = 'center';
    buttonContainer.style.flexWrap = 'wrap';
    buttonContainer.style.gap = '15px';
    buttonContainer.style.marginTop = '20px';
    buttonContainer.style.width = '100%'; // Full width
    buttonContainer.style.maxWidth = '400px'; // Limit max width
    buttonContainer.style.margin = '20px auto'; // Center container
    
    // Create buttons with numbers for answers
    // Range of numbers to show: correct answer +/- some range
    const maxRange = Math.min(10, currentObjectCount + 5);
    const minNum = Math.max(1, currentObjectCount - 3);
    const maxNum = Math.min(currentObjectCount + 3, maxRange);
    
    // Create an array of answer options
    const answerOptions = [];
    
    // Always include the correct answer
    answerOptions.push(currentObjectCount);
    
    // Add some random options
    while (answerOptions.length < 5) {
      const randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
      if (!answerOptions.includes(randomNum)) {
        answerOptions.push(randomNum);
      }
    }
    
    // Shuffle the answer options
    answerOptions.sort(() => Math.random() - 0.5);
    
    // Child-friendly colors
    const buttonColors = [
      '#4b97d2', // soft blue
      '#6a8caf', // muted blue-gray
      '#78a5b3', // soft teal
      '#7ac285', // soft green
      '#b683b3'  // soft purple
    ];
    
    // Create buttons for each option
    answerOptions.forEach((num, index) => {
      const button = document.createElement('button');
      button.textContent = num;
      button.className = 'count-answer-btn';
      
      // Larger, more child-friendly buttons
      button.style.padding = '12px 0';
      button.style.backgroundColor = buttonColors[index % buttonColors.length];
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.borderRadius = '8px'; // Less rounded
      button.style.fontSize = '22px';
      button.style.fontWeight = '600';
      button.style.cursor = 'pointer';
      button.style.margin = '5px';
      button.style.width = '70px';
      button.style.height = '70px';
      button.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.1)';
      button.style.transition = 'all 0.2s ease';
      button.style.minHeight = '70px'; // Ensure good tap target
      button.style.touchAction = 'manipulation'; // Improve touch handling
      
      // Add hover effect - gentler
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.15)';
      });
      
      button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.1)';
      });
      
      // Add touch effect for mobile
      button.addEventListener('touchstart', () => {
        button.style.transform = 'translateY(-3px)';
        button.style.boxShadow = '0 5px 10px rgba(0, 0, 0, 0.15)';
      }, { passive: true });
      
      button.addEventListener('touchend', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 3px 6px rgba(0, 0, 0, 0.1)';
      }, { passive: true });
      
      // Add click handler
      button.addEventListener('click', () => checkAnswer(num));
      
      buttonContainer.appendChild(button);
    });
    
    // Mobile responsive adjustments
    const handleResize = () => {
      const width = window.innerWidth;
      
      // Adjust button size for small screens
      const buttons = buttonContainer.querySelectorAll('.count-answer-btn');
      
      if (width <= 480) {
        buttons.forEach(btn => {
          btn.style.width = '60px';
          btn.style.height = '60px';
          btn.style.minHeight = '60px';
          btn.style.fontSize = '20px';
        });
      } else {
        buttons.forEach(btn => {
          btn.style.width = '70px';
          btn.style.height = '70px';
          btn.style.minHeight = '70px';
          btn.style.fontSize = '22px';
        });
      }
    };
    
    // Call once and add resize listener
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Replace the input with our custom buttons
    const gameControls = document.getElementById('game-controls');
    if (gameControls) {
      // Hide the standard input and submit button
      answerInput.style.display = 'none';
      submitButton.style.display = 'none';
      
      // Add our custom buttons
      gameControls.appendChild(buttonContainer);
    }
  };
  
  // Create objects for the current level
  const createObjects = () => {
    // Clear existing objects
    gameObjects.forEach(obj => scene.remove(obj));
    gameObjects = [];
    
    // Determine number of objects based on level
    if (level <= 2) {
      // Level 1-2: 1-5 objects
      currentObjectCount = Math.floor(Math.random() * 5) + 1;
    } else if (level <= 4) {
      // Level 3-4: 5-10 objects
      currentObjectCount = Math.floor(Math.random() * 6) + 5;
    } else {
      // Level 5+: 10-15 objects
      currentObjectCount = Math.floor(Math.random() * 6) + 10;
    }
    
    console.log(`Creating ${currentObjectCount} objects for level ${level}`);
    
    // Softer, child-friendly color palette
    const colors = [
      0x6a98c2, // soft blue
      0x7ac285, // soft green
      0xd6a87c, // soft orange
      0xb683b3, // soft purple
      0xd6937c, // soft coral
      0xa3c2c2, // soft teal
      0xd1bd74  // soft yellow
    ];
    
    // Position objects in a more organized, less chaotic pattern
    const radius = 5;
    const angleStep = (Math.PI * 2) / currentObjectCount;
    
    // Create objects
    for (let i = 0; i < currentObjectCount; i++) {
      // Choose a random object type
      const objectType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
      const object = objectType.create();
      
      // Apply child-friendly colors instead of random bright colors
      const colorIndex = Math.floor(Math.random() * colors.length);
      object.material.color.set(colors[colorIndex]);
      object.material.shininess = 30; // Reduced shininess for softer look
      
      // Position in a circle pattern with some variation for better counting
      const angle = angleStep * i;
      const dist = radius * (0.7 + Math.random() * 0.3);
      
      object.position.x = Math.cos(angle) * dist;
      object.position.y = -1.5 + Math.random() * 0.3; // Less height variation
      object.position.z = Math.sin(angle) * dist;
      
      // Store original y position for hover animation
      object.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.007, // Reduced rotation speed
          y: (Math.random() - 0.5) * 0.007,
          z: (Math.random() - 0.5) * 0.005
        },
        hoverParams: {
          amplitude: 0.05 + Math.random() * 0.05, // Reduced amplitude
          speed: 0.3 + Math.random() * 0.4,       // Slower speed
          phase: Math.random() * Math.PI * 2
        },
        originalY: object.position.y
      };
      
      scene.add(object);
      gameObjects.push(object);
    }
    
    return gameObjects;
  };
  
  // Generate a question
  function generateQuestion() {
    // Create objects for the current level
    createObjects();
    
    // Set question text
    questionContainer.textContent = `How many objects do you see?`;
    
    // Create answer buttons
    createAnswerButtons();
  }
  
  // Check answer
  function checkAnswer(userAnswer) {
    console.log("Checking answer:", userAnswer, "Correct answer:", currentObjectCount);
    
    if (userAnswer === currentObjectCount) {
      // Correct answer
      score += 10 * level;
      scoreElement.textContent = score;
      
      // Animate success effect - gentler animation
      gameObjects.forEach(obj => {
        // Gentler bounce effect
        new TWEEN.Tween(obj.position)
          .to({ y: obj.position.y + 0.5 }, 400) // Slower, smaller bounce
          .easing(TWEEN.Easing.Quadratic.Out)
          .chain(
            new TWEEN.Tween(obj.position)
            .to({ y: obj.userData.originalY }, 400) // Return to original position
            .easing(TWEEN.Easing.Quadratic.InOut)
          )
          .start();
        
        // Color change to a gentle green
        new TWEEN.Tween(obj.material.color)
          .to(new THREE.Color(0x7ac285), 400) // Soft green instead of bright green
          .start();
      });
      
      // Show success message with encouraging tone
      questionContainer.textContent = `Great job! You counted ${currentObjectCount} objects correctly!`;
      
      // After a delay, move to next level
      setTimeout(() => {
        level++;
        generateQuestion();
      }, 2000);
    } else {
      // Wrong answer - gentler feedback
      questionContainer.textContent = `Try again! Let's count together one more time.`;
      
      // Visual feedback - gentler platform movement
      const shakeTween = new TWEEN.Tween(playArea.position)
        .to({ x: 0.1 }, 80) // Reduced shake amount
        .yoyo(true)
        .repeat(3) // Fewer repetitions
        .start();
      
      setTimeout(() => {
        playArea.position.x = 0;
        questionContainer.textContent = `How many objects do you see?`;
      }, 1000);
    }
  }
  
  // Animation
  function animate() {
    requestAnimationFrame(animate);
    
    // Animate objects
    gameObjects.forEach(obj => {
      // Gentler rotation
      obj.rotation.x += obj.userData.rotationSpeed.x;
      obj.rotation.y += obj.userData.rotationSpeed.y;
      obj.rotation.z += obj.userData.rotationSpeed.z;
      
      // Gentler hovering animation
      const params = obj.userData.hoverParams;
      obj.position.y = obj.userData.originalY + 
        Math.sin(Date.now() * 0.0005 * params.speed + params.phase) * params.amplitude * 0.01;
    });
    
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
  
  // Add orbit controls for interactive view (tap & drag to rotate)
  const addOrbitControls = () => {
    // We'll use a simplified version without importing the OrbitControls library
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let cameraPivot = new THREE.Object3D();
    scene.add(cameraPivot);
    cameraPivot.add(camera);
    camera.position.set(0, 0, 10);
    camera.lookAt(cameraPivot.position);
    
    // Mouse events for desktop
    gameCanvas.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMousePosition = {
        x: e.clientX,
        y: e.clientY
      };
    });
    
    gameCanvas.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y
        };
        
        // Limit rotation to horizontal only for simplicity
        cameraPivot.rotation.y += deltaMove.x * 0.005;
        
        previousMousePosition = {
          x: e.clientX,
          y: e.clientY
        };
      }
    });
    
    gameCanvas.addEventListener('mouseup', () => {
      isDragging = false;
    });
    
    gameCanvas.addEventListener('mouseleave', () => {
      isDragging = false;
    });
    
    // Touch events for mobile - improved handling
    gameCanvas.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
      }
    }, { passive: false });
    
    gameCanvas.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length === 1) {
        const deltaMove = {
          x: e.touches[0].clientX - previousMousePosition.x,
          y: e.touches[0].clientY - previousMousePosition.y
        };
        
        // Limit rotation to horizontal only for simplicity
        cameraPivot.rotation.y += deltaMove.x * 0.005;
        
        previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY
        };
        
        e.preventDefault(); // Prevent page scrolling while rotating the scene
      }
    }, { passive: false });
    
    gameCanvas.addEventListener('touchend', () => {
      isDragging = false;
    }, { passive: true });
    
    gameCanvas.addEventListener('touchcancel', () => {
      isDragging = false;
    }, { passive: true });
    
    return cameraPivot;
  };
  
  // Handle window resize
  window.addEventListener('resize', handleResize);
  
  // Force a resize after a delay to ensure DOM layout is complete
  setTimeout(handleResize, 100);
  
  // Add simple orbit controls for better object viewing
  const cameraPivot = addOrbitControls();
  
  // Start the game
  generateQuestion();
  animate();
  
  console.log("Count Objects game setup complete");
  
  return { scene, camera, renderer };
} 
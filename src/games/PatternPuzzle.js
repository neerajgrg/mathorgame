import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

export function setupPatternPuzzle(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  console.log("Setting up Pattern Puzzle game...");
  console.log("Game canvas dimensions:", gameCanvas.clientWidth, gameCanvas.clientHeight);
  
  // Clear any existing content
  while (gameCanvas.firstChild) {
    gameCanvas.removeChild(gameCanvas.firstChild);
  }
  
  // Create a scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x6c5b7b);
  
  // Create a camera
  const camera = new THREE.PerspectiveCamera(75, 
    gameCanvas.clientWidth && gameCanvas.clientHeight ? gameCanvas.clientWidth / gameCanvas.clientHeight : 2, 
    0.1, 1000);
  camera.position.z = 12;
  
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
  let currentPattern = [];
  let patternShapes = [];
  let correctAnswer = null;
  
  // Different pattern types
  const patternTypes = [
    {
      name: 'alternate-colors',
      generator: (level) => {
        const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0xff00ff, 0x00ffff];
        const selectedColors = colors.slice(0, 2 + Math.min(level, 3)); // More colors at higher levels
        
        const pattern = [];
        for (let i = 0; i < 3 + level; i++) {
          pattern.push(selectedColors[i % selectedColors.length]);
        }
        
        // Missing piece is the next color in sequence
        const answer = selectedColors[pattern.length % selectedColors.length];
        return { pattern, answer };
      }
    },
    {
      name: 'rotate-shapes',
      generator: (level) => {
        const rotations = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4];
        
        // Create a pattern with rotations
        const increment = Math.PI/4; // 45 degrees
        const pattern = [];
        let currentRotation = 0;
        
        for (let i = 0; i < 3 + level; i++) {
          pattern.push(currentRotation);
          currentRotation = (currentRotation + increment) % (Math.PI * 2);
        }
        
        // Missing piece is the next rotation
        const answer = currentRotation;
        return { pattern, answer };
      }
    },
    {
      name: 'size-sequence',
      generator: (level) => {
        // Create a pattern with sizes
        const pattern = [];
        let size;
        
        if (level === 1) {
          // Simple alternating sizes
          for (let i = 0; i < 4; i++) {
            pattern.push(i % 2 === 0 ? 1 : 1.5);
          }
          size = pattern[pattern.length - 1] === 1 ? 1.5 : 1;
        } else if (level === 2) {
          // Growing sizes
          for (let i = 0; i < 4; i++) {
            pattern.push(1 + (i * 0.25));
          }
          size = 1 + (pattern.length * 0.25);
        } else {
          // Fibonacci-like sequence
          pattern.push(0.75);
          pattern.push(1);
          for (let i = 2; i < 4; i++) {
            const nextSize = Math.min(pattern[i-1] + pattern[i-2], 2.5);
            pattern.push(nextSize);
          }
          size = pattern[pattern.length - 1] + pattern[pattern.length - 2];
          size = Math.min(size, 3); // Cap the maximum size
        }
        
        return { pattern, answer: size };
      }
    }
  ];
  
  // Create a new pattern puzzle
  function createPattern() {
    // Clear previous pattern
    patternShapes.forEach(shape => scene.remove(shape));
    patternShapes = [];
    
    // Choose a pattern type based on level
    const patternTypeIndex = Math.min(level - 1, patternTypes.length - 1);
    const patternType = patternTypes[patternTypeIndex];
    
    // Generate the pattern
    const { pattern, answer } = patternType.generator(level);
    currentPattern = pattern;
    correctAnswer = answer;
    
    // Create the pattern shapes
    const spacing = 2.5;
    const startX = -(pattern.length * spacing) / 2;
    
    for (let i = 0; i < pattern.length; i++) {
      let shapeGeometry, position, rotation, scale;
      const value = pattern[i];
      
      if (patternType.name === 'alternate-colors') {
        // Create cubes with different colors
        shapeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const material = new THREE.MeshPhongMaterial({ color: value, shininess: 100 });
        
        const shape = new THREE.Mesh(shapeGeometry, material);
        shape.position.x = startX + (i * spacing);
        
        patternShapes.push(shape);
        scene.add(shape);
      } else if (patternType.name === 'rotate-shapes') {
        // Create arrows with different rotations
        const shape = createArrow(0x3498db);
        shape.rotation.z = value;
        shape.position.x = startX + (i * spacing);
        
        patternShapes.push(shape);
        scene.add(shape);
      } else if (patternType.name === 'size-sequence') {
        // Create spheres with different sizes
        shapeGeometry = new THREE.SphereGeometry(value, 32, 32);
        const material = new THREE.MeshPhongMaterial({ color: 0xe74c3c, shininess: 100 });
        
        const shape = new THREE.Mesh(shapeGeometry, material);
        shape.position.x = startX + (i * spacing);
        
        patternShapes.push(shape);
        scene.add(shape);
      }
    }
    
    // Add question mark for the missing piece
    const questionMark = createQuestionMark();
    questionMark.position.x = startX + (pattern.length * spacing);
    questionMark.position.y = 0;
    patternShapes.push(questionMark);
    scene.add(questionMark);
    
    // Update question text and score
    if (patternType.name === 'alternate-colors') {
      questionContainer.textContent = "What color comes next in the pattern? (red, green, blue, yellow, purple, cyan)";
    } else if (patternType.name === 'rotate-shapes') {
      questionContainer.textContent = "What direction does the next arrow point? (degrees clockwise from up: 0, 45, 90, 135, 180, 225, 270, 315)";
    } else if (patternType.name === 'size-sequence') {
      questionContainer.textContent = "What size comes next in the pattern? (Enter a number)";
    }
    
    scoreElement.textContent = score;
    
    // Clear input
    answerInput.value = '';
  }
  
  // Create an arrow for rotation puzzles
  function createArrow(color) {
    const arrowGroup = new THREE.Group();
    
    // Arrow body
    const bodyGeometry = new THREE.BoxGeometry(0.5, 2, 0.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color, shininess: 100 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = -0.5;
    arrowGroup.add(body);
    
    // Arrow head
    const headGeometry = new THREE.ConeGeometry(0.75, 1.5, 32);
    const headMaterial = new THREE.MeshPhongMaterial({ color, shininess: 100 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1;
    arrowGroup.add(head);
    
    return arrowGroup;
  }
  
  // Create a question mark
  function createQuestionMark() {
    const questionGroup = new THREE.Group();
    
    // Question mark body (sphere)
    const bodyGeometry = new THREE.TorusGeometry(0.8, 0.3, 16, 32, Math.PI * 1.5);
    const bodyMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100 });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.z = Math.PI;
    body.position.y = 0.5;
    questionGroup.add(body);
    
    // Question mark dot
    const dotGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const dotMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 100 });
    const dot = new THREE.Mesh(dotGeometry, dotMaterial);
    dot.position.y = -0.8;
    questionGroup.add(dot);
    
    return questionGroup;
  }
  
  // Check answer
  function checkAnswer() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    let correct = false;
    
    const patternTypeIndex = Math.min(level - 1, patternTypes.length - 1);
    const patternType = patternTypes[patternTypeIndex];
    
    if (patternType.name === 'alternate-colors') {
      // Check color answer
      const colorMap = {
        'red': 0xff0000,
        'green': 0x00ff00,
        'blue': 0x0000ff,
        'yellow': 0xffff00,
        'purple': 0xff00ff,
        'cyan': 0x00ffff
      };
      
      if (colorMap[userAnswer] === correctAnswer) {
        correct = true;
      }
    } else if (patternType.name === 'rotate-shapes') {
      // Check rotation answer
      const rotationMap = {
        '0': 0,
        '45': Math.PI/4,
        '90': Math.PI/2,
        '135': 3*Math.PI/4,
        '180': Math.PI,
        '225': 5*Math.PI/4,
        '270': 3*Math.PI/2,
        '315': 7*Math.PI/4
      };
      
      // Allow a small margin of error for rotation values
      const userRotation = rotationMap[userAnswer];
      if (userRotation !== undefined && 
          (Math.abs(userRotation - correctAnswer) < 0.1 || 
           Math.abs(userRotation - correctAnswer - Math.PI*2) < 0.1)) {
        correct = true;
      }
    } else if (patternType.name === 'size-sequence') {
      // Check size answer
      const userSize = parseFloat(userAnswer);
      if (!isNaN(userSize) && Math.abs(userSize - correctAnswer) < 0.2) {
        correct = true;
      }
    }
    
    if (correct) {
      // Correct answer
      score += 10 * level;
      questionContainer.textContent = "Correct! You found the pattern.";
      scoreElement.textContent = score;
      
      // Add the correct shape
      const lastShape = patternShapes.pop();
      scene.remove(lastShape);
      
      // Add the correct shape based on pattern type
      if (patternType.name === 'alternate-colors') {
        const shapeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const material = new THREE.MeshPhongMaterial({ color: correctAnswer, shininess: 100 });
        
        const shape = new THREE.Mesh(shapeGeometry, material);
        shape.position.copy(lastShape.position);
        
        patternShapes.push(shape);
        scene.add(shape);
      } else if (patternType.name === 'rotate-shapes') {
        const shape = createArrow(0x3498db);
        shape.rotation.z = correctAnswer;
        shape.position.copy(lastShape.position);
        
        patternShapes.push(shape);
        scene.add(shape);
      } else if (patternType.name === 'size-sequence') {
        const shapeGeometry = new THREE.SphereGeometry(correctAnswer, 32, 32);
        const material = new THREE.MeshPhongMaterial({ color: 0xe74c3c, shininess: 100 });
        
        const shape = new THREE.Mesh(shapeGeometry, material);
        shape.position.copy(lastShape.position);
        
        patternShapes.push(shape);
        scene.add(shape);
      }
      
      // Animate all shapes in the pattern
      patternShapes.forEach(shape => {
        new TWEEN.Tween(shape.position)
          .to({ y: shape.position.y + 1 }, 300)
          .easing(TWEEN.Easing.Quadratic.Out)
          .yoyo(true)
          .repeat(1)
          .start();
      });
      
      // Move to next level after delay
      setTimeout(() => {
        level++;
        createPattern();
      }, 2000);
    } else {
      // Wrong answer
      questionContainer.textContent = "That's not correct. Try again!";
      
      // Shake the question mark
      const questionMark = patternShapes[patternShapes.length - 1];
      new TWEEN.Tween(questionMark.position)
        .to({ x: questionMark.position.x + 0.3 }, 50)
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
    
    // Add a slight oscillation to the shapes
    patternShapes.forEach((shape, index) => {
      shape.position.y = Math.sin(Date.now() * 0.001 + index * 0.5) * 0.2;
      if (index === patternShapes.length - 1) {
        // Make the question mark move more dramatically
        shape.position.y = Math.sin(Date.now() * 0.002 + index * 0.5) * 0.4;
      }
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
  
  // Handle window resize
  window.addEventListener('resize', handleResize);
  
  // Force a resize after a delay to ensure DOM layout is complete
  setTimeout(handleResize, 100);
  
  // Start the game
  createPattern();
  animate();
  
  return { scene, camera, renderer };
} 
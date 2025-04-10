import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

// Decimal Dash Game - Practice ordering decimals on a number line
export function setupDecimalDash(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  // Game state
  let score = 0;
  let currentDecimals = [];
  let correctOrder = [];
  let playerOrder = [];
  let selectedDecimalIndex = -1;
  let gameActive = true;
  let level = 1;
  let lives = 3;
  let roundsCompleted = 0;
  
  // Level settings
  const levelSettings = [
    { count: 3, minDecimalPlaces: 1, maxDecimalPlaces: 1 }, // Level 1: 3 decimals with 1 decimal place
    { count: 4, minDecimalPlaces: 1, maxDecimalPlaces: 2 }, // Level 2: 4 decimals with 1-2 decimal places
    { count: 5, minDecimalPlaces: 1, maxDecimalPlaces: 2 }, // Level 3: 5 decimals with 1-2 decimal places
    { count: 5, minDecimalPlaces: 2, maxDecimalPlaces: 3 }, // Level 4: 5 decimals with 2-3 decimal places
    { count: 6, minDecimalPlaces: 2, maxDecimalPlaces: 3 }  // Level 5: 6 decimals with 2-3 decimal places
  ];
  
  // Setup scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x87CEEB); // Sky blue background
  
  // Setup camera
  const camera = new THREE.PerspectiveCamera(
    75, 
    gameCanvas.clientWidth / gameCanvas.clientHeight, 
    0.1, 
    1000
  );
  camera.position.z = 15;
  
  // Setup renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(gameCanvas.clientWidth, gameCanvas.clientHeight);
  gameCanvas.appendChild(renderer.domElement);
  
  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);
  
  // Create number line
  const numberLine = new THREE.Group();
  scene.add(numberLine);
  
  function createNumberLine() {
    // Clear existing number line
    while(numberLine.children.length > 0) {
      numberLine.remove(numberLine.children[0]);
    }
    
    // Create line
    const lineGeometry = new THREE.BoxGeometry(10, 0.1, 0.1);
    const lineMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
    const line = new THREE.Mesh(lineGeometry, lineMaterial);
    numberLine.add(line);
    
    // Add tick marks and labels
    for (let i = 0; i <= 10; i++) {
      // Create tick mark
      const tickGeometry = new THREE.BoxGeometry(0.05, 0.3, 0.1);
      const tickMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
      const tick = new THREE.Mesh(tickGeometry, tickMaterial);
      tick.position.x = -5 + i;
      tick.position.y = -0.1;
      numberLine.add(tick);
      
      // Create text label
      const labelDiv = document.createElement('div');
      labelDiv.className = 'number-label';
      labelDiv.style.position = 'absolute';
      labelDiv.style.color = 'black';
      labelDiv.style.fontSize = '14px';
      labelDiv.style.userSelect = 'none';
      labelDiv.style.fontWeight = 'bold';
      labelDiv.textContent = `${i/10}`;
      gameCanvas.appendChild(labelDiv);
      
      // Store the DOM element for later positioning
      tick.userData = { labelElement: labelDiv };
    }
    
    // Position the number line
    numberLine.position.y = -3;
  }
  
  // Create decimal blocks
  const decimalBlocks = [];
  const decimalBlocksGroup = new THREE.Group();
  scene.add(decimalBlocksGroup);
  
  function createDecimalBlocks() {
    // Clear existing blocks
    while(decimalBlocksGroup.children.length > 0) {
      decimalBlocksGroup.remove(decimalBlocksGroup.children[0]);
    }
    
    // Clear arrays
    decimalBlocks.length = 0;
    playerOrder.length = 0;
    
    // Get current level settings
    const settings = levelSettings[Math.min(level - 1, levelSettings.length - 1)];
    
    // Generate new random decimals
    currentDecimals = [];
    for (let i = 0; i < settings.count; i++) {
      // Generate a random decimal between 0 and 1
      const decimalPlaces = Math.floor(Math.random() * 
        (settings.maxDecimalPlaces - settings.minDecimalPlaces + 1)) + settings.minDecimalPlaces;
      
      let decimal;
      do {
        decimal = Math.random();
        decimal = parseFloat(decimal.toFixed(decimalPlaces));
      } while (currentDecimals.includes(decimal)); // Ensure no duplicates
      
      currentDecimals.push(decimal);
    }
    
    // Store correct order
    correctOrder = [...currentDecimals].sort((a, b) => a - b);
    
    // Create blocks for each decimal
    currentDecimals.forEach((decimal, index) => {
      // Block geometry
      const blockGeometry = new THREE.BoxGeometry(1, 0.5, 0.3);
      
      // Material with unique color
      const hue = (index / currentDecimals.length) * 360;
      const blockMaterial = new THREE.MeshPhongMaterial({ 
        color: new THREE.Color(`hsl(${hue}, 70%, 60%)`),
        specular: 0x111111,
        shininess: 30
      });
      
      // Create mesh
      const block = new THREE.Mesh(blockGeometry, blockMaterial);
      
      // Position blocks in a row at the top
      const spacing = 8 / Math.max(currentDecimals.length, 4);
      block.position.x = -3.5 + (index * spacing);
      block.position.y = 2;
      
      // Store decimal value
      block.userData = { 
        decimal: decimal,
        originalX: block.position.x,
        originalY: block.position.y,
        originalZ: block.position.z,
        index: index
      };
      
      // Add to scene and array
      decimalBlocksGroup.add(block);
      decimalBlocks.push(block);
      
      // Add decimal text
      const textDiv = document.createElement('div');
      textDiv.className = 'decimal-text';
      textDiv.style.position = 'absolute';
      textDiv.style.color = 'white';
      textDiv.style.fontSize = '16px';
      textDiv.style.fontWeight = 'bold';
      textDiv.style.textAlign = 'center';
      textDiv.style.width = '60px';
      textDiv.style.userSelect = 'none';
      textDiv.style.textShadow = '1px 1px 2px black';
      textDiv.textContent = decimal.toString();
      gameCanvas.appendChild(textDiv);
      
      // Store the DOM element
      block.userData.textElement = textDiv;
    });
    
    // Update question text
    questionContainer.textContent = `Order the decimals from smallest to largest on the number line.`;
  }
  
  // Handle block selection
  function selectDecimalBlock(index) {
    if (!gameActive) return;
    
    const block = decimalBlocks[index];
    
    // If already in player order, remove it
    const orderIndex = playerOrder.indexOf(block.userData.decimal);
    if (orderIndex !== -1) {
      playerOrder.splice(orderIndex, 1);
      
      // Animation to return to original position
      new TWEEN.Tween(block.position)
        .to({ 
          x: block.userData.originalX,
          y: block.userData.originalY,
          z: block.userData.originalZ
        }, 300)
        .easing(TWEEN.Easing.Back.Out)
        .start();
      
      // Reset block color
      const hue = (index / currentDecimals.length) * 360;
      block.material.color.set(new THREE.Color(`hsl(${hue}, 70%, 60%)`));
      
      // Update player's order positions
      updatePlayerOrderPositions();
      
      // Since we removed a block, we don't need to add it
      return;
    }
    
    // Add to player order
    playerOrder.push(block.userData.decimal);
    
    // Calculate position on number line
    const positionX = -5 + (block.userData.decimal * 10); // Scale to number line
    
    // Create animation
    new TWEEN.Tween(block.position)
      .to({ 
        x: positionX,
        y: -2.5,
        z: 0.2
      }, 300)
      .easing(TWEEN.Easing.Elastic.Out)
      .start();
    
    // Change block color to indicate selection
    block.material.color.set(0x33cc33); // Green
    
    // Check if player has ordered all decimals
    if (playerOrder.length === currentDecimals.length) {
      // Wait a moment before checking the order
      setTimeout(checkOrder, 1000);
    }
  }
  
  // Update positions of ordered blocks
  function updatePlayerOrderPositions() {
    // Update positions for all blocks in player's order
    playerOrder.forEach((decimal, index) => {
      // Find the block with this decimal
      const block = decimalBlocks.find(b => b.userData.decimal === decimal);
      if (block) {
        // Calculate position on number line
        const positionX = -5 + (decimal * 10); // Scale to number line
        
        // Create animation
        new TWEEN.Tween(block.position)
          .to({ 
            x: positionX,
            y: -2.5,
            z: 0.2
          }, 300)
          .easing(TWEEN.Easing.Elastic.Out)
          .start();
      }
    });
  }
  
  // Check player's order
  function checkOrder() {
    if (!gameActive) return;
    
    // Compare player's order with correct order
    let isCorrect = true;
    for (let i = 0; i < correctOrder.length; i++) {
      if (playerOrder[i] !== correctOrder[i]) {
        isCorrect = false;
        break;
      }
    }
    
    if (isCorrect) {
      // Correct order!
      score += 100 * level;
      roundsCompleted++;
      
      // Visual feedback - success message
      createFloatingText("Correct Order! +100", 'green');
      
      // Check for level up
      if (roundsCompleted >= 3) {
        levelUp();
      } else {
        // Start new round after a delay
        setTimeout(startNewRound, 2000);
      }
    } else {
      // Incorrect order
      lives--;
      
      // Visual feedback - error message
      createFloatingText("Incorrect Order", 'red');
      
      // Show correct order
      showCorrectOrder();
      
      // Check for game over
      if (lives <= 0) {
        endGame();
      } else {
        // Start new round after showing correct order
        setTimeout(startNewRound, 3000);
      }
    }
    
    // Update score display
    updateScore();
  }
  
  // Show correct order
  function showCorrectOrder() {
    // Find blocks and animate them to correct positions
    correctOrder.forEach((decimal, index) => {
      const block = decimalBlocks.find(b => b.userData.decimal === decimal);
      if (block) {
        // Calculate correct position
        const positionX = -5 + (decimal * 10); // Scale to number line
        
        // Animate to correct position
        new TWEEN.Tween(block.position)
          .to({ 
            x: positionX,
            y: -2.5,
            z: 0.2
          }, 500)
          .easing(TWEEN.Easing.Back.Out)
          .start();
        
        // Change color to indicate correct position
        new TWEEN.Tween(block.material.color)
          .to(new THREE.Color(0x33cc33), 500) // Green
          .start();
      }
    });
    
    // Update UI to show correct order
    questionContainer.textContent = "Correct order: " + correctOrder.join(" < ");
  }
  
  // Start a new round
  function startNewRound() {
    // Clear existing blocks
    decimalBlocks.forEach(block => {
      if (block.userData.textElement) {
        block.userData.textElement.remove();
      }
    });
    
    // Reset player order
    playerOrder = [];
    
    // Create new decimal blocks
    createDecimalBlocks();
  }
  
  // Level up
  function levelUp() {
    level++;
    roundsCompleted = 0;
    
    // Create level up message
    const levelUpMsg = document.createElement('div');
    levelUpMsg.style.position = 'absolute';
    levelUpMsg.style.color = 'gold';
    levelUpMsg.style.fontSize = '32px';
    levelUpMsg.style.fontWeight = 'bold';
    levelUpMsg.style.textAlign = 'center';
    levelUpMsg.style.width = '100%';
    levelUpMsg.style.top = '40%';
    levelUpMsg.style.zIndex = '100';
    levelUpMsg.style.textShadow = '2px 2px 4px rgba(0,0,0,0.5)';
    levelUpMsg.textContent = `LEVEL UP! Level ${level}`;
    gameCanvas.appendChild(levelUpMsg);
    
    // Remove the level up message after a delay
    setTimeout(() => {
      levelUpMsg.remove();
    }, 2000);
    
    // Start a new round with increased difficulty
    setTimeout(startNewRound, 2000);
  }
  
  // Create floating text
  function createFloatingText(text, color) {
    const floatingText = document.createElement('div');
    floatingText.className = 'floating-text';
    floatingText.style.position = 'absolute';
    floatingText.style.color = color;
    floatingText.style.fontSize = '28px';
    floatingText.style.fontWeight = 'bold';
    floatingText.style.textAlign = 'center';
    floatingText.style.width = '100%';
    floatingText.style.top = '50%';
    floatingText.style.zIndex = '100';
    floatingText.style.opacity = '1';
    floatingText.style.transition = 'all 1s ease-out';
    floatingText.textContent = text;
    gameCanvas.appendChild(floatingText);
    
    // Animate the floating text
    setTimeout(() => {
      floatingText.style.transform = 'translateY(-50px)';
      floatingText.style.opacity = '0';
    }, 10);
    
    // Remove the element after animation is complete
    setTimeout(() => {
      floatingText.remove();
    }, 1000);
  }
  
  // End game
  function endGame() {
    gameActive = false;
    
    // Show game over message
    const gameOverMsg = document.createElement('div');
    gameOverMsg.style.position = 'absolute';
    gameOverMsg.style.color = 'red';
    gameOverMsg.style.fontSize = '36px';
    gameOverMsg.style.fontWeight = 'bold';
    gameOverMsg.style.textAlign = 'center';
    gameOverMsg.style.width = '100%';
    gameOverMsg.style.top = '35%';
    gameOverMsg.style.zIndex = '100';
    gameOverMsg.textContent = 'GAME OVER';
    gameCanvas.appendChild(gameOverMsg);
    
    // Show statistics
    const statsMsg = document.createElement('div');
    statsMsg.style.position = 'absolute';
    statsMsg.style.color = 'white';
    statsMsg.style.fontSize = '20px';
    statsMsg.style.textAlign = 'center';
    statsMsg.style.width = '100%';
    statsMsg.style.top = '45%';
    statsMsg.style.zIndex = '100';
    statsMsg.innerHTML = `Final Score: ${score}<br>Level: ${level}<br>Rounds Completed: ${roundsCompleted + (level-1)*3}`;
    gameCanvas.appendChild(statsMsg);
    
    // Show retry button
    const retryBtn = document.createElement('button');
    retryBtn.style.position = 'absolute';
    retryBtn.style.top = '60%';
    retryBtn.style.left = '50%';
    retryBtn.style.transform = 'translateX(-50%)';
    retryBtn.style.padding = '10px 20px';
    retryBtn.style.fontSize = '18px';
    retryBtn.style.cursor = 'pointer';
    retryBtn.style.backgroundColor = '#4CAF50';
    retryBtn.style.color = 'white';
    retryBtn.style.border = 'none';
    retryBtn.style.borderRadius = '5px';
    retryBtn.style.zIndex = '100';
    retryBtn.textContent = 'Play Again';
    retryBtn.onclick = restartGame;
    gameCanvas.appendChild(retryBtn);
  }
  
  // Restart the game
  function restartGame() {
    // Clear game over elements
    gameCanvas.querySelectorAll('.floating-text, .decimal-text, .number-label').forEach(el => el.remove());
    gameCanvas.querySelectorAll('div').forEach(el => {
      if (el !== gameCanvas) el.remove();
    });
    
    // Reset game state
    score = 0;
    level = 1;
    lives = 3;
    roundsCompleted = 0;
    gameActive = true;
    playerOrder = [];
    
    // Start new game
    createNumberLine();
    startNewRound();
    updateScore();
  }
  
  // Update score display
  function updateScore() {
    scoreElement.textContent = `Score: ${score} | Level: ${level} | Lives: ${lives}`;
  }
  
  // Mouse interaction
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  gameCanvas.addEventListener('click', (event) => {
    // Get mouse position
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // Cast ray from camera
    raycaster.setFromCamera(mouse, camera);
    
    // Check for intersections with decimal blocks
    const intersects = raycaster.intersectObjects(decimalBlocks);
    
    if (intersects.length > 0) {
      // Find the index of the clicked block
      const clickedBlock = intersects[0].object;
      const blockIndex = decimalBlocks.findIndex(b => b === clickedBlock);
      
      if (blockIndex !== -1) {
        selectDecimalBlock(blockIndex);
      }
    }
  });
  
  // Make answer input and submit button not visible for this game
  answerInput.style.display = 'none';
  submitButton.style.display = 'none';
  
  // Window resize handler
  function handleResize() {
    camera.aspect = gameCanvas.clientWidth / gameCanvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(gameCanvas.clientWidth, gameCanvas.clientHeight);
  }
  
  window.addEventListener('resize', handleResize);
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    
    // Update text positions for blocks
    decimalBlocks.forEach(block => {
      if (block.userData.textElement) {
        const vector = block.position.clone();
        vector.project(camera);
        
        const x = (vector.x * 0.5 + 0.5) * gameCanvas.clientWidth;
        const y = (-vector.y * 0.5 + 0.5) * gameCanvas.clientHeight;
        
        block.userData.textElement.style.transform = `translate(-50%, -50%)`;
        block.userData.textElement.style.left = `${x}px`;
        block.userData.textElement.style.top = `${y}px`;
      }
    });
    
    // Update text positions for number line labels
    numberLine.children.forEach(child => {
      if (child.userData && child.userData.labelElement) {
        const vector = child.position.clone();
        // Apply parent transformations
        vector.applyMatrix4(numberLine.matrixWorld);
        // Project to screen space
        vector.project(camera);
        
        // Convert to CSS coordinates
        const x = (vector.x * 0.5 + 0.5) * gameCanvas.clientWidth;
        const y = (-vector.y * 0.5 + 0.5) * gameCanvas.clientHeight;
        
        // Update position
        child.userData.labelElement.style.transform = `translate(-50%, -50%)`;
        child.userData.labelElement.style.left = `${x}px`;
        child.userData.labelElement.style.top = `${y + 20}px`;
      }
    });
    
    // Gentle movement of the decimalBlocks that are not in the player's order
    decimalBlocks.forEach(block => {
      if (!playerOrder.includes(block.userData.decimal)) {
        block.rotation.y += 0.01;
        block.position.y = block.userData.originalY + Math.sin(Date.now() * 0.002 + block.userData.index) * 0.05;
      }
    });
    
    // Render scene
    renderer.render(scene, camera);
    
    // Update TWEEN
    TWEEN.update();
  }
  
  // Initial setup
  createNumberLine();
  createDecimalBlocks();
  updateScore();
  
  // Start animation loop
  animate();
  
  // Cleanup function
  return function cleanup() {
    // Stop game
    gameActive = false;
    
    // Remove event listeners
    window.removeEventListener('resize', handleResize);
    gameCanvas.removeEventListener('click', selectDecimalBlock);
    
    // Remove all game elements
    scene.clear();
    gameCanvas.innerHTML = '';
    
    // Remove any UI elements
    gameCanvas.querySelectorAll('.floating-text, .decimal-text, .number-label').forEach(el => el.remove());
    
    // Stop animation loop
    renderer.dispose();
  };
} 
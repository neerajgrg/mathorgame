import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

// Times Tables Game - Practice multiplication facts
export function setupTimesTables(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  // Game state
  let score = 0;
  let currentQuestion = null;
  let gameActive = true;
  let level = 1;
  let lives = 3;
  let questionsAnswered = 0;
  let correctStreak = 0;
  
  // Setup scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x4b0082); // Deep indigo background
  
  // Setup camera
  const camera = new THREE.PerspectiveCamera(
    75, 
    gameCanvas.clientWidth / gameCanvas.clientHeight, 
    0.1, 
    1000
  );
  camera.position.z = 5;
  
  // Setup renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(gameCanvas.clientWidth, gameCanvas.clientHeight);
  gameCanvas.appendChild(renderer.domElement);
  
  // Add lights
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);
  
  // Create multiplication table grid
  const tableGroup = new THREE.Group();
  scene.add(tableGroup);
  
  // Create tiles for the table
  const tiles = [];
  const highlightedTile = { x: -1, y: -1 };
  
  function createMultiplicationTable() {
    // Clear existing table
    while(tableGroup.children.length > 0) {
      tableGroup.remove(tableGroup.children[0]);
    }
    tiles.length = 0;
    
    // Set grid size based on level
    const maxNum = Math.min(level + 5, 12);
    
    // Create tiles for each number in the grid
    for (let y = 1; y <= maxNum; y++) {
      for (let x = 1; x <= maxNum; x++) {
        const product = x * y;
        
        // Create tile geometry and material
        const tileGeometry = new THREE.BoxGeometry(0.4, 0.4, 0.1);
        const tileMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xffffff,
          specular: 0x111111,
          shininess: 30
        });
        
        // Create the tile mesh
        const tile = new THREE.Mesh(tileGeometry, tileMaterial);
        
        // Position tile in grid
        tile.position.x = (x - maxNum/2 - 0.5) * 0.5;
        tile.position.y = (maxNum/2 - y + 0.5) * 0.5;
        
        // Store product value in userData
        tile.userData = { x, y, product };
        
        // Add to scene
        tableGroup.add(tile);
        tiles.push(tile);
      }
    }
    
    // Scale the entire table to fit in view
    const scale = 4.5 / maxNum;
    tableGroup.scale.set(scale, scale, scale);
  }
  
  // Create 3D number for displaying the answer
  const numberGroup = new THREE.Group();
  numberGroup.position.y = -2;
  scene.add(numberGroup);
  
  function createNumberDisplay(number) {
    // Clear previous number
    while(numberGroup.children.length > 0) {
      numberGroup.remove(numberGroup.children[0]);
    }
    
    // Convert number to string
    const numberText = number.toString();
    
    // Create a plane with text texture
    for (let i = 0; i < numberText.length; i++) {
      const digitGeometry = new THREE.TextGeometry(numberText[i], {
        font: new THREE.Font({
          // This is a placeholder; in a real app we would load a font
          // using THREE.FontLoader, but for simplicity we'll create
          // cubes instead of actual text geometry
        }),
        size: 0.3,
        height: 0.05
      });
      
      // Since TextGeometry may not work without a proper font loader,
      // we'll use a simple box as a fallback
      const cubeGeometry = new THREE.BoxGeometry(0.3, 0.4, 0.1);
      const material = new THREE.MeshPhongMaterial({ 
        color: 0xffcc00,
        emissive: 0x111111
      });
      
      const digitMesh = new THREE.Mesh(cubeGeometry, material);
      digitMesh.position.x = (i - numberText.length/2 + 0.5) * 0.4;
      
      numberGroup.add(digitMesh);
      
      // Add the actual digit as a separate div element for proper text display
      const digitDiv = document.createElement('div');
      digitDiv.className = 'digit-text';
      digitDiv.style.position = 'absolute';
      digitDiv.style.color = 'white';
      digitDiv.style.fontSize = '24px';
      digitDiv.style.fontWeight = 'bold';
      digitDiv.style.textAlign = 'center';
      digitDiv.style.width = '30px';
      digitDiv.style.userSelect = 'none';
      digitDiv.textContent = numberText[i];
      gameCanvas.appendChild(digitDiv);
      
      // Position will be updated in the animation loop
      digitMesh.userData = { textElement: digitDiv };
    }
  }
  
  // Game logic functions
  function generateQuestion() {
    if (!gameActive) return;
    
    // Determine max number based on level
    const maxNum = Math.min(level + 5, 12);
    
    // Generate random numbers for the question
    const num1 = Math.floor(Math.random() * maxNum) + 1;
    const num2 = Math.floor(Math.random() * maxNum) + 1;
    
    const answer = num1 * num2;
    
    currentQuestion = {
      num1: num1,
      num2: num2,
      answer: answer
    };
    
    // Update UI
    questionContainer.textContent = `${num1} × ${num2} = ?`;
    
    // Clear answer input
    answerInput.value = '';
    answerInput.focus();
    
    // Highlight the tile on the multiplication table
    highlightedTile.x = num1;
    highlightedTile.y = num2;
  }
  
  function checkAnswer() {
    if (!gameActive || !currentQuestion) return;
    
    const userAnswer = parseInt(answerInput.value);
    
    if (isNaN(userAnswer)) {
      // Invalid input
      answerInput.classList.add('error');
      setTimeout(() => {
        answerInput.classList.remove('error');
      }, 300);
      return;
    }
    
    // Check if answer is correct
    if (userAnswer === currentQuestion.answer) {
      // Correct answer
      score += 10 * level;
      correctStreak++;
      questionsAnswered++;
      
      // Visual feedback - flash green
      gameCanvas.style.backgroundColor = '#4CAF50';
      setTimeout(() => {
        gameCanvas.style.backgroundColor = '';
      }, 200);
      
      // Create a floating +10 text
      createFloatingText(`+${10 * level}`, 'green');
      
      // Show the correct product on the 3D display
      createNumberDisplay(currentQuestion.answer);
      
      // Check for level up
      if (correctStreak >= 5) {
        levelUp();
      }
      
      // Generate a new question after a delay
      setTimeout(generateQuestion, 1200);
    } else {
      // Incorrect answer
      lives--;
      correctStreak = 0;
      
      // Visual feedback - flash red
      gameCanvas.style.backgroundColor = '#f44336';
      setTimeout(() => {
        gameCanvas.style.backgroundColor = '';
      }, 200);
      
      // Create a floating text showing the correct answer
      createFloatingText(`Answer: ${currentQuestion.answer}`, 'red');
      
      // Show the correct product on the 3D display
      createNumberDisplay(currentQuestion.answer);
      
      // Check for game over
      if (lives <= 0) {
        endGame();
      } else {
        // Generate a new question after a delay
        setTimeout(generateQuestion, 2000);
      }
    }
    
    // Update score display
    updateScore();
  }
  
  function createFloatingText(text, color) {
    const floatingText = document.createElement('div');
    floatingText.className = 'floating-text';
    floatingText.style.position = 'absolute';
    floatingText.style.color = color;
    floatingText.style.fontSize = '24px';
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
  
  function levelUp() {
    level++;
    correctStreak = 0;
    
    // Create level up message
    const levelUpMsg = document.createElement('div');
    levelUpMsg.style.position = 'absolute';
    levelUpMsg.style.color = 'yellow';
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
    
    // Recreate the multiplication table for the new level
    createMultiplicationTable();
  }
  
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
    statsMsg.innerHTML = `Final Score: ${score}<br>Level: ${level}<br>Questions Answered: ${questionsAnswered}`;
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
  
  function restartGame() {
    // Clear game over elements
    gameCanvas.querySelectorAll('.floating-text, .digit-text').forEach(el => el.remove());
    gameCanvas.querySelectorAll('div').forEach(el => {
      if (el !== gameCanvas) el.remove();
    });
    
    // Reset game state
    score = 0;
    level = 1;
    lives = 3;
    questionsAnswered = 0;
    correctStreak = 0;
    gameActive = true;
    
    // Reset visual elements
    createMultiplicationTable();
    
    // Start new game
    generateQuestion();
    updateScore();
  }
  
  function updateScore() {
    scoreElement.textContent = `Score: ${score} | Level: ${level} | Lives: ${lives}`;
  }
  
  // Handle input and button click
  submitButton.addEventListener('click', checkAnswer);
  
  answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      checkAnswer();
    }
  });
  
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
    
    // Rotate table slightly for visual interest
    tableGroup.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;
    tableGroup.rotation.y = Math.cos(Date.now() * 0.0007) * 0.1;
    
    // Rotate number display for visual interest
    numberGroup.rotation.y = Math.sin(Date.now() * 0.001) * 0.2;
    
    // Update tile colors based on highlighting
    tiles.forEach(tile => {
      const { x, y } = tile.userData;
      
      // Reset tile color
      if (highlightedTile.x === x && highlightedTile.y === y) {
        // Highlight current question tile
        tile.material.color.setHex(0xffcc00);
        tile.material.emissive.setHex(0x553300);
        
        // Scale up slightly
        tile.scale.x = 1.2 + Math.sin(Date.now() * 0.005) * 0.1;
        tile.scale.y = 1.2 + Math.sin(Date.now() * 0.005) * 0.1;
        tile.scale.z = 1.2 + Math.sin(Date.now() * 0.005) * 0.1;
      } else if (highlightedTile.x === x || highlightedTile.y === y) {
        // Highlight row and column
        tile.material.color.setHex(0x66ccff);
        tile.material.emissive.setHex(0x001133);
        
        // Reset scale
        tile.scale.set(1, 1, 1);
      } else {
        // Normal color
        tile.material.color.setHex(0xffffff);
        tile.material.emissive.setHex(0x000000);
        
        // Reset scale
        tile.scale.set(1, 1, 1);
      }
    });
    
    // Update text positions for number display
    numberGroup.children.forEach(digitMesh => {
      if (digitMesh.userData.textElement) {
        const vector = digitMesh.position.clone();
        // Apply parent transformations
        vector.applyMatrix4(numberGroup.matrixWorld);
        // Project to screen space
        vector.project(camera);
        
        // Convert to CSS coordinates
        const x = (vector.x * 0.5 + 0.5) * gameCanvas.clientWidth;
        const y = (-vector.y * 0.5 + 0.5) * gameCanvas.clientHeight;
        
        // Update position
        digitMesh.userData.textElement.style.left = `${x - 15}px`;
        digitMesh.userData.textElement.style.top = `${y - 15}px`;
      }
    });
    
    // Render scene
    renderer.render(scene, camera);
    
    // Update TWEEN
    TWEEN.update();
  }
  
  // Initial setup
  createMultiplicationTable();
  generateQuestion();
  updateScore();
  
  // Start animation loop
  animate();
  
  // Cleanup function
  return function cleanup() {
    // Stop game
    gameActive = false;
    
    // Remove event listeners
    window.removeEventListener('resize', handleResize);
    submitButton.removeEventListener('click', checkAnswer);
    answerInput.removeEventListener('keydown', checkAnswer);
    
    // Remove all game elements
    scene.clear();
    gameCanvas.innerHTML = '';
    
    // Remove any UI elements
    gameCanvas.querySelectorAll('.floating-text, .digit-text').forEach(el => el.remove());
    
    // Stop animation loop
    renderer.dispose();
  };
} 
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

// Space Shooter Game - Focuses on multiplication practice
export function setupSpaceShooter(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  // Game state
  let score = 0;
  let currentQuestion = null;
  let currentEquation = '';
  let gameActive = true;
  let level = 1;
  let lives = 3;
  let correctAnswers = 0;
  
  // Setup scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000020); // Dark space background
  
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
  const ambientLight = new THREE.AmbientLight(0x333333);
  scene.add(ambientLight);
  
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 3, 5);
  scene.add(directionalLight);
  
  // Player ship
  const shipGeometry = new THREE.ConeGeometry(1, 2, 3);
  const shipMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
  const ship = new THREE.Mesh(shipGeometry, shipMaterial);
  ship.rotation.x = Math.PI; // Rotate to point forward
  ship.position.y = -10;
  scene.add(ship);
  
  // Stars background
  const stars = [];
  const starGeometry = new THREE.SphereGeometry(0.1, 8, 8);
  const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  
  for (let i = 0; i < 200; i++) {
    const star = new THREE.Mesh(starGeometry, starMaterial);
    star.position.x = Math.random() * 80 - 40;
    star.position.y = Math.random() * 80 - 40;
    star.position.z = Math.random() * 30 - 60;
    scene.add(star);
    stars.push(star);
  }
  
  // Meteors (enemies containing answer options)
  const meteors = [];
  
  // Projectiles
  const projectiles = [];
  const projectileGeometry = new THREE.SphereGeometry(0.3, 8, 8);
  const projectileMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  
  // Game logic functions
  function generateQuestion() {
    const maxNum = Math.min(10 + level, 12); // Adjust difficulty based on level
    const num1 = Math.floor(Math.random() * maxNum) + 1;
    const num2 = Math.floor(Math.random() * maxNum) + 1;
    
    const correctAnswer = num1 * num2;
    currentEquation = `${num1} × ${num2} = ?`;
    
    // Generate wrong answers that are close to the correct one
    const wrongAnswers = [];
    while (wrongAnswers.length < 3) {
      const offset = Math.floor(Math.random() * 6) - 3; // -3 to +3
      const wrongAnswer = correctAnswer + offset;
      
      if (wrongAnswer > 0 && wrongAnswer !== correctAnswer && !wrongAnswers.includes(wrongAnswer)) {
        wrongAnswers.push(wrongAnswer);
      }
    }
    
    // Combine and shuffle all answers
    const allAnswers = [...wrongAnswers, correctAnswer];
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    
    currentQuestion = {
      equation: currentEquation,
      correctAnswer: correctAnswer,
      options: allAnswers
    };
    
    // Update UI
    questionContainer.textContent = currentEquation;
    
    // Create meteors with answers
    createMeteors(allAnswers);
  }
  
  function createMeteors(answers) {
    // Clear existing meteors
    meteors.forEach(meteor => scene.remove(meteor.mesh));
    meteors.length = 0;
    
    // Create new meteors
    answers.forEach((answer, index) => {
      const size = 1.2;
      const meteorGeometry = new THREE.DodecahedronGeometry(size, 0);
      
      // Color the correct answer differently for debugging, but not visible to player
      const meteorMaterial = new THREE.MeshPhongMaterial({ 
        color: 0xaaaaaa,
        emissive: 0x333333,
        flatShading: true
      });
      
      const meteor = new THREE.Mesh(meteorGeometry, meteorMaterial);
      
      // Position meteors in a horizontal line near the top
      const xSpacing = 5;
      meteor.position.x = (index - 1.5) * xSpacing;
      meteor.position.y = 10;
      meteor.position.z = 0;
      
      // Create text for the answer
      const textMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide
      });
      
      // Add to scene
      scene.add(meteor);
      
      // Store meteor data
      meteors.push({
        mesh: meteor,
        answer: answer,
        isCorrect: answer === currentQuestion.correctAnswer,
        speed: 0.05 + (level * 0.01) // Speed increases with level
      });
      
      // Add answer text on the meteor
      const textDiv = document.createElement('div');
      textDiv.className = 'meteor-text';
      textDiv.style.position = 'absolute';
      textDiv.style.color = 'white';
      textDiv.style.fontSize = '18px';
      textDiv.style.fontWeight = 'bold';
      textDiv.style.textShadow = '1px 1px 2px black';
      textDiv.style.userSelect = 'none';
      textDiv.textContent = answer.toString();
      gameCanvas.appendChild(textDiv);
      
      // Store the DOM element for later positioning
      meteors[meteors.length - 1].textElement = textDiv;
    });
  }
  
  function shoot() {
    if (!gameActive) return;
    
    const projectile = new THREE.Mesh(projectileGeometry, projectileMaterial);
    projectile.position.copy(ship.position);
    scene.add(projectile);
    
    projectiles.push({
      mesh: projectile,
      speed: 0.4,
      active: true
    });
  }
  
  function checkCollisions() {
    // Check projectile-meteor collisions
    for (let i = 0; i < projectiles.length; i++) {
      const projectile = projectiles[i];
      if (!projectile.active) continue;
      
      for (let j = 0; j < meteors.length; j++) {
        const meteor = meteors[j];
        
        // Simple distance-based collision detection
        const distance = projectile.mesh.position.distanceTo(meteor.mesh.position);
        if (distance < 1.5) { // Adjust based on meteor size
          // Hit a meteor
          projectile.active = false;
          scene.remove(projectile.mesh);
          
          // Check if it's the correct answer
          if (meteor.isCorrect) {
            // Correct hit!
            score += 10 * level;
            correctAnswers++;
            meteor.mesh.material.color.set(0x00ff00); // Green flash
            
            // Create explosion effect
            createExplosion(meteor.mesh.position.clone());
            
            // Remove meteor and its text
            setTimeout(() => {
              scene.remove(meteor.mesh);
              if (meteor.textElement) {
                meteor.textElement.remove();
              }
            }, 200);
            
            // Check for level up
            if (correctAnswers >= 5) {
              level++;
              correctAnswers = 0;
              
              // Show level up message
              const levelUpMsg = document.createElement('div');
              levelUpMsg.style.position = 'absolute';
              levelUpMsg.style.color = 'yellow';
              levelUpMsg.style.fontSize = '24px';
              levelUpMsg.style.fontWeight = 'bold';
              levelUpMsg.style.textAlign = 'center';
              levelUpMsg.style.width = '100%';
              levelUpMsg.style.top = '50%';
              levelUpMsg.style.zIndex = '100';
              levelUpMsg.textContent = `LEVEL UP! Level ${level}`;
              gameCanvas.appendChild(levelUpMsg);
              
              setTimeout(() => {
                levelUpMsg.remove();
              }, 2000);
            }
            
            // Generate new question after a delay
            setTimeout(generateQuestion, 1500);
            
            break;
          } else {
            // Wrong answer
            meteor.mesh.material.color.set(0xff0000); // Red flash
            lives--;
            
            if (lives <= 0) {
              endGame();
            }
            
            setTimeout(() => {
              meteor.mesh.material.color.set(0xaaaaaa);
            }, 200);
          }
        }
      }
    }
  }
  
  function createExplosion(position) {
    const particleCount = 20;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xffff00 })
      );
      
      particle.position.copy(position);
      
      // Random velocity
      particle.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2
      );
      
      scene.add(particle);
      particles.push(particle);
      
      // Remove particles after a short time
      setTimeout(() => {
        scene.remove(particle);
      }, 800);
    }
    
    // Update particles for a brief period
    const updateExplosion = () => {
      particles.forEach(particle => {
        particle.position.add(particle.velocity);
        particle.scale.multiplyScalar(0.95);
      });
    };
    
    // Add to animation loop temporarily
    explosionUpdates.push(updateExplosion);
    setTimeout(() => {
      const index = explosionUpdates.indexOf(updateExplosion);
      if (index !== -1) {
        explosionUpdates.splice(index, 1);
      }
    }, 800);
  }
  
  const explosionUpdates = [];
  
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
    gameOverMsg.style.top = '40%';
    gameOverMsg.style.zIndex = '100';
    gameOverMsg.textContent = 'GAME OVER';
    gameCanvas.appendChild(gameOverMsg);
    
    // Show final score
    const finalScoreMsg = document.createElement('div');
    finalScoreMsg.style.position = 'absolute';
    finalScoreMsg.style.color = 'white';
    finalScoreMsg.style.fontSize = '24px';
    finalScoreMsg.style.textAlign = 'center';
    finalScoreMsg.style.width = '100%';
    finalScoreMsg.style.top = '50%';
    finalScoreMsg.style.zIndex = '100';
    finalScoreMsg.textContent = `Final Score: ${score}`;
    gameCanvas.appendChild(finalScoreMsg);
    
    // Show retry button
    const retryBtn = document.createElement('button');
    retryBtn.style.position = 'absolute';
    retryBtn.style.top = '60%';
    retryBtn.style.left = '50%';
    retryBtn.style.transform = 'translateX(-50%)';
    retryBtn.style.padding = '10px 20px';
    retryBtn.style.zIndex = '100';
    retryBtn.textContent = 'Play Again';
    retryBtn.onclick = () => {
      // Remove UI elements
      gameOverMsg.remove();
      finalScoreMsg.remove();
      retryBtn.remove();
      
      // Reset game
      score = 0;
      level = 1;
      lives = 3;
      correctAnswers = 0;
      gameActive = true;
      
      // Clear existing meteors
      meteors.forEach(meteor => {
        scene.remove(meteor.mesh);
        if (meteor.textElement) {
          meteor.textElement.remove();
        }
      });
      meteors.length = 0;
      
      // Start new game
      generateQuestion();
      updateScore();
    };
    gameCanvas.appendChild(retryBtn);
  }
  
  function updateScore() {
    scoreElement.textContent = `Score: ${score} | Level: ${level} | Lives: ${lives}`;
  }
  
  // Ship movement
  let targetX = 0;
  
  function handleMouseMove(event) {
    // Calculate mouse position relative to the canvas
    const rect = renderer.domElement.getBoundingClientRect();
    const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    
    // Set target position for the ship
    targetX = mouseX * 10; // Scale to reasonable range
  }
  
  gameCanvas.addEventListener('mousemove', handleMouseMove);
  
  // Shooting with click
  gameCanvas.addEventListener('click', shoot);
  
  // Window resize handler
  function handleResize() {
    camera.aspect = gameCanvas.clientWidth / gameCanvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(gameCanvas.clientWidth, gameCanvas.clientHeight);
  }
  
  window.addEventListener('resize', handleResize);
  
  // Animation loop
  function animate() {
    if (!gameActive) {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      return;
    }
    
    requestAnimationFrame(animate);
    
    // Update stars (subtle twinkling)
    stars.forEach(star => {
      star.position.y -= 0.05;
      if (star.position.y < -40) {
        star.position.y = 40;
        star.position.x = Math.random() * 80 - 40;
        star.position.z = Math.random() * 30 - 60;
      }
    });
    
    // Smooth ship movement
    ship.position.x += (targetX - ship.position.x) * 0.1;
    
    // Update projectiles
    projectiles.forEach(projectile => {
      if (projectile.active) {
        projectile.mesh.position.y += projectile.speed;
        
        // Remove projectiles that go off-screen
        if (projectile.mesh.position.y > 20) {
          scene.remove(projectile.mesh);
          projectile.active = false;
        }
      }
    });
    
    // Update meteors
    meteors.forEach(meteor => {
      meteor.mesh.position.y -= meteor.speed;
      meteor.mesh.rotation.x += 0.01;
      meteor.mesh.rotation.y += 0.01;
      
      // Update text position to follow meteor
      if (meteor.textElement) {
        const vector = meteor.mesh.position.clone();
        vector.project(camera);
        
        const x = (vector.x * 0.5 + 0.5) * gameCanvas.clientWidth;
        const y = -(vector.y * 0.5 - 0.5) * gameCanvas.clientHeight;
        
        meteor.textElement.style.transform = `translate(-50%, -50%)`;
        meteor.textElement.style.left = `${x}px`;
        meteor.textElement.style.top = `${y}px`;
      }
      
      // Check if meteor reached bottom
      if (meteor.mesh.position.y < -12) {
        if (meteor.isCorrect) {
          // Player missed the correct answer
          lives--;
          if (lives <= 0) {
            endGame();
          }
        }
        
        // Remove meteor
        scene.remove(meteor.mesh);
        if (meteor.textElement) {
          meteor.textElement.remove();
        }
        
        // Check if all meteors are gone
        const remainingMeteors = meteors.filter(m => m.mesh.parent === scene);
        if (remainingMeteors.length === 0) {
          // Generate new question
          generateQuestion();
        }
      }
    });
    
    // Update explosion particles
    explosionUpdates.forEach(update => update());
    
    // Check for collisions
    checkCollisions();
    
    // Update score display
    updateScore();
    
    // Render scene
    renderer.render(scene, camera);
    
    // Update TWEEN
    TWEEN.update();
  }
  
  // Initial setup
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
    gameCanvas.removeEventListener('mousemove', handleMouseMove);
    gameCanvas.removeEventListener('click', shoot);
    
    // Remove all game elements
    scene.clear();
    gameCanvas.innerHTML = '';
    
    // Remove any UI elements
    meteors.forEach(meteor => {
      if (meteor.textElement) {
        meteor.textElement.remove();
      }
    });
    
    // Stop animation loop
    renderer.dispose();
  };
} 
import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

export function setupNumberAdventure(gameCanvas, questionContainer, answerInput, submitButton, scoreElement) {
  console.log("Setting up Number Adventure game with canvas:", 
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
  
  // Add fog for depth effect
  scene.fog = new THREE.FogExp2(0x87CEEB, 0.02);
  
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
  camera.position.z = 8;
  camera.position.y = 1;
  
  // Create a renderer with better shadows
  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true
  });
  
  // Enable shadows
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
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
  
  // Create a path/trail through a forest
  const createPath = () => {
    // Sky/clouds (simple particles)
    const cloudParticles = [];
    const cloudGeometry = new THREE.SphereGeometry(0.5, 8, 8);
    const cloudMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8
    });
    
    for (let i = 0; i < 20; i++) {
      const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      cloud.position.set(
        Math.random() * 40 - 20,
        Math.random() * 3 + 5,
        Math.random() * 20 - 25
      );
      cloud.scale.set(
        Math.random() * 2 + 1,
        Math.random() * 1 + 0.5,
        Math.random() * 1 + 0.5
      );
      cloud.rotation.z = Math.random() * Math.PI;
      cloud.castShadow = false;
      cloud.receiveShadow = false;
      scene.add(cloud);
      cloudParticles.push(cloud);
    }
    
    // Ground
    const groundGeometry = new THREE.PlaneGeometry(20, 10);
    const groundMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8B4513, // Brown
      side: THREE.DoubleSide,
      shininess: 10
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = Math.PI / 2;
    ground.position.y = -1;
    ground.receiveShadow = true;
    scene.add(ground);
    
    // Path
    const pathGeometry = new THREE.PlaneGeometry(3, 10);
    const pathMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xD2B48C, // Tan
      side: THREE.DoubleSide,
      shininess: 5
    });
    const path = new THREE.Mesh(pathGeometry, pathMaterial);
    path.rotation.x = Math.PI / 2;
    path.position.y = -0.99;
    path.receiveShadow = true;
    scene.add(path);
    
    // Grass (small details along path edges)
    const createGrass = (x, z) => {
      const grassGroup = new THREE.Group();
      
      for (let i = 0; i < 5; i++) {
        const bladeHeight = 0.2 + Math.random() * 0.3;
        const bladeGeometry = new THREE.ConeGeometry(0.05, bladeHeight, 4);
        const bladeMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x4CAF50,
          shininess: 5
        });
        const blade = new THREE.Mesh(bladeGeometry, bladeMaterial);
        
        // Position around the center point with some randomization
        blade.position.set(
          x + (Math.random() * 0.4 - 0.2),
          -1 + bladeHeight/2,
          z + (Math.random() * 0.4 - 0.2)
        );
        // Random rotation
        blade.rotation.y = Math.random() * Math.PI;
        blade.rotation.x = Math.random() * 0.2;
        blade.castShadow = true;
        
        grassGroup.add(blade);
      }
      
      scene.add(grassGroup);
      return grassGroup;
    };
    
    // Add grass along path edges
    const grassPatches = [];
    for (let z = -5; z <= 5; z += 0.8) {
      grassPatches.push(createGrass(-1.6, z));
      grassPatches.push(createGrass(1.6, z));
    }
    
    // Trees (simple cones)
    const createTree = (x, z) => {
      const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 1, 8);
      const trunkMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x8B4513,
        shininess: 5
      });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.set(x, -0.5, z);
      trunk.castShadow = true;
      trunk.receiveShadow = true;
      
      const leavesGeometry = new THREE.ConeGeometry(0.8, 2, 8);
      const leavesMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x228B22,
        shininess: 10
      });
      const leaves = new THREE.Mesh(leavesGeometry, leavesMaterial);
      leaves.position.set(x, 1, z);
      leaves.castShadow = true;
      leaves.receiveShadow = true;
      
      scene.add(trunk);
      scene.add(leaves);
      
      return { trunk, leaves };
    };
    
    // Add trees on both sides of the path
    const trees = [];
    for (let z = -5; z <= 5; z += 2) {
      if (z !== 0) { // Skip the center where the door will be
        trees.push(createTree(-3, z));
        trees.push(createTree(3, z));
      }
    }
    
    return { ground, path, trees, cloudParticles, grassPatches };
  };
  
  // Create a castle/door
  const createCastle = () => {
    // Castle wall
    const wallGeometry = new THREE.BoxGeometry(6, 4, 0.5);
    const wallTexture = new THREE.TextureLoader().load('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyVpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjZCNzlCMUUyMTlGMTFFQTlCQ0JGMTk4QUVDQkFCRDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjZCNzlCMUYyMTlGMTFFQTlCQ0JGMTk4QUVDQkFCRDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNkI3OUIxQzIxOUYxMUVBOUJDQkYxOThBRUNCQUJEOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNkI3OUIxRDIxOUYxMUVBOUJDQkYxOThBRUNCQUJEOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plsf1j8AAADPSURBVHjaYmSgALCwsbH9//+f4dSpU4wUGcDCwMBgcfHiRdYNGzYwkm0AExOTA4jNysrKSLYBQMOfAw35DwQVpBrABDXkP9SAXKiYHVEGgLzPwsLiAHMJEAmePXuW8ejRowiXOhJtAAmE6oEMeA5kQ12UD+QzI/kCmQ1MWMhyGBjIBdq0cDsxIDqQsRpCigEkeg3sDCZoQmIgJRCRDUB2SQkwdfxnYWGJhIYBKcnZAcxMl6CuVwBGmQFMnpSDf//+KQL5DKRHIwsMDAxcAQEBAgwATl+imXpxEZ0AAAAASUVORK5CYII=');
    
    const wallMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xa0a0a0,
      shininess: 30,
      map: wallTexture
    });
    const wall = new THREE.Mesh(wallGeometry, wallMaterial);
    wall.position.z = -5;
    wall.castShadow = true;
    wall.receiveShadow = true;
    scene.add(wall);
    
    // Castle door
    const doorGeometry = new THREE.BoxGeometry(1.5, 2.5, 0.3);
    const doorMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8B4513,
      shininess: 30,
      specular: 0x222222
    });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.z = -4.8;
    door.position.y = -0.75;
    door.castShadow = true;
    door.receiveShadow = true;
    scene.add(door);
    
    // Door handle
    const handleGeometry = new THREE.SphereGeometry(0.1, 16, 16);
    const handleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xFFD700,
      shininess: 100,
      specular: 0xFFFFFF 
    });
    const handle = new THREE.Mesh(handleGeometry, handleMaterial);
    handle.position.set(0.4, -0.75, -4.65);
    scene.add(handle);
    
    // Castle towers
    const createTower = (x) => {
      const baseGeometry = new THREE.CylinderGeometry(0.8, 0.8, 5, 8);
      const baseMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x909090,
        shininess: 30
      });
      const base = new THREE.Mesh(baseGeometry, baseMaterial);
      base.position.set(x, 0, -5);
      base.castShadow = true;
      base.receiveShadow = true;
      
      const roofGeometry = new THREE.ConeGeometry(1, 1.5, 8);
      const roofMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x800000,
        shininess: 30
      });
      const roof = new THREE.Mesh(roofGeometry, roofMaterial);
      roof.position.set(x, 3, -5);
      roof.castShadow = true;
      roof.receiveShadow = true;
      
      // Add small windows to the tower
      const windowGeometry = new THREE.BoxGeometry(0.3, 0.5, 0.1);
      const windowMaterial = new THREE.MeshPhongMaterial({ 
        color: 0x87CEEB,
        shininess: 100,
        transparent: true,
        opacity: 0.7
      });
      
      // Create windows at different positions on the tower
      const windows = [];
      for (let i = 0; i < 2; i++) {
        const windowMesh = new THREE.Mesh(windowGeometry, windowMaterial);
        const angle = i * Math.PI;
        windowMesh.position.set(
          x + Math.sin(angle) * 0.75,
          i + 0.5,
          -5 + Math.cos(angle) * 0.75
        );
        windowMesh.lookAt(new THREE.Vector3(x, i + 0.5, -10));
        scene.add(windowMesh);
        windows.push(windowMesh);
      }
      
      scene.add(base);
      scene.add(roof);
      
      return { base, roof, windows };
    };
    
    const leftTower = createTower(-3.5);
    const rightTower = createTower(3.5);
    
    // Add a flag on top of a tower
    const flagpoleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5, 8);
    const flagpoleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x888888,
      shininess: 30
    });
    const flagpole = new THREE.Mesh(flagpoleGeometry, flagpoleMaterial);
    flagpole.position.set(rightTower.roof.position.x, rightTower.roof.position.y + 1.2, rightTower.roof.position.z);
    scene.add(flagpole);
    
    // Flag
    const flagGeometry = new THREE.PlaneGeometry(0.8, 0.5);
    const flagMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xFF0000,
      side: THREE.DoubleSide,
      shininess: 5
    });
    const flag = new THREE.Mesh(flagGeometry, flagMaterial);
    flag.position.set(rightTower.roof.position.x + 0.4, rightTower.roof.position.y + 1.5, rightTower.roof.position.z);
    flag.userData = {
      originalPosition: flag.position.clone(),
      waveSpeed: 2
    };
    scene.add(flag);
    
    return { wall, door, handle, leftTower, rightTower, flag };
  };
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add directional light (sunlight)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(5, 10, 7);
  directionalLight.castShadow = true;
  
  // Configure shadow properties
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  directionalLight.shadow.camera.left = -10;
  directionalLight.shadow.camera.right = 10;
  directionalLight.shadow.camera.top = 10;
  directionalLight.shadow.camera.bottom = -10;
  
  scene.add(directionalLight);
  
  // Add a point light near the door for dramatic effect
  const doorLight = new THREE.PointLight(0xFFD700, 0.5, 5);
  doorLight.position.set(0, 1, -4);
  scene.add(doorLight);
  
  // Create particle system for sparkle effects
  const createParticleSystem = () => {
    const particleCount = 50;
    const particles = new THREE.BufferGeometry();
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 0.1,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;
    }
    
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    
    // Function to emit particles at a position
    const emitParticles = (position, color) => {
      particleMaterial.color.set(color || 0xFFFFFF);
      particleMaterial.opacity = 1;
      
      const positions = particles.attributes.position.array;
      
      for (let i = 0; i < particleCount; i++) {
        // Random position within a sphere around the given position
        const radius = Math.random() * 0.5;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        positions[i * 3] = position.x + radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = position.y + radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = position.z + radius * Math.cos(phi);
      }
      
      particles.attributes.position.needsUpdate = true;
      
      // Fade out particles
      new TWEEN.Tween(particleMaterial)
        .to({ opacity: 0 }, 1000)
        .easing(TWEEN.Easing.Cubic.Out)
        .start();
    };
    
    return { particleSystem, emitParticles };
  };
  
  // Game variables
  let level = 1;
  let score = 0;
  let collectables = [];
  let currentObjectCount = 0;
  let doorOpen = false;
  let gameActive = true;
  
  // Create the scene elements
  const gamePath = createPath();
  const castle = createCastle();
  const particles = createParticleSystem();
  
  // Create a simple progress indicator
  const createLevelIndicator = () => {
    const levelIndicator = document.createElement('div');
    levelIndicator.style.position = 'absolute';
    levelIndicator.style.top = '10px';
    levelIndicator.style.right = '10px';
    levelIndicator.style.background = 'rgba(0, 0, 0, 0.5)';
    levelIndicator.style.color = 'white';
    levelIndicator.style.padding = '5px 10px';
    levelIndicator.style.borderRadius = '10px';
    levelIndicator.style.fontFamily = 'Arial, sans-serif';
    levelIndicator.style.fontSize = '14px';
    levelIndicator.style.fontWeight = 'bold';
    levelIndicator.style.pointerEvents = 'none';
    levelIndicator.textContent = `Level: ${level}`;
    levelIndicator.id = 'level-indicator';
    gameCanvas.appendChild(levelIndicator);
    
    return levelIndicator;
  };
  
  const levelIndicator = createLevelIndicator();
  
  // Create a hint button
  const createHintButton = () => {
    const hintButton = document.createElement('button');
    hintButton.style.position = 'absolute';
    hintButton.style.bottom = '10px';
    hintButton.style.right = '10px';
    hintButton.style.background = 'rgba(73, 109, 137, 0.8)';
    hintButton.style.color = 'white';
    hintButton.style.padding = '5px 10px';
    hintButton.style.borderRadius = '10px';
    hintButton.style.fontFamily = 'Arial, sans-serif';
    hintButton.style.fontSize = '14px';
    hintButton.style.fontWeight = 'bold';
    hintButton.style.border = 'none';
    hintButton.style.cursor = 'pointer';
    hintButton.textContent = 'Hint';
    hintButton.id = 'hint-button';
    
    hintButton.addEventListener('mouseenter', () => {
      hintButton.style.background = 'rgba(100, 149, 237, 0.8)';
    });
    
    hintButton.addEventListener('mouseleave', () => {
      hintButton.style.background = 'rgba(73, 109, 137, 0.8)';
    });
    
    hintButton.addEventListener('click', () => {
      if (!gameActive) return;
      
      // Highlight objects briefly
      let delay = 0;
      collectables.forEach(obj => {
        setTimeout(() => {
          // Create a flash effect
          const originalColor = obj.material.color.clone();
          
          // Color based on object type
          let highlightColor;
          switch(obj.userData.type) {
            case 0: highlightColor = new THREE.Color(0xFFFF00); break; // Star
            case 1: highlightColor = new THREE.Color(0xFF00FF); break; // Gem
            case 2: highlightColor = new THREE.Color(0xFFFF00); break; // Coin
            case 3: highlightColor = new THREE.Color(0xFFA500); break; // Chest
            default: highlightColor = new THREE.Color(0xFFFFFF);
          }
          
          // Apply flash effect
          new TWEEN.Tween(obj.material.color)
            .to({ r: highlightColor.r, g: highlightColor.g, b: highlightColor.b }, 300)
            .easing(TWEEN.Easing.Quadratic.Out)
            .chain(
              new TWEEN.Tween(obj.material.color)
                .to({ r: originalColor.r, g: originalColor.g, b: originalColor.b }, 300)
                .easing(TWEEN.Easing.Quadratic.In)
            )
            .start();
          
          // Emit particles
          particles.emitParticles(obj.position.clone(), highlightColor);
        }, delay);
        
        delay += 150;
      });
      
      // Show hint in question text
      const originalText = questionContainer.textContent;
      questionContainer.textContent = `There are ${currentObjectCount} treasures on the path. Try counting them!`;
      
      // Reset text after a delay
      setTimeout(() => {
        questionContainer.textContent = originalText;
      }, 3000);
    });
    
    gameCanvas.appendChild(hintButton);
    return hintButton;
  };
  
  const hintButton = createHintButton();
  
  // Play sound effects (create audio elements but keep them muted unless unmuted by user interaction)
  const createSoundEffects = () => {
    const soundEffects = {
      success: new Audio("data:audio/mp3;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHNUQUxCAAAAGAAAAFNvdW5kSmF5LmNvbSBTRlggTGlicmFyeVRZRVIAAAAFAAAAMjAyM1RDT04AAAAHAAAAT3RoZXJzVFJDSwAAAAMAAABzZngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tAwAAAAAEFoIQAAADRWjiSIIAAnTlqOHEkQQC2TlJhUhQRGPXe4PCyQc2xjRlL3W23flYtcYqG5RD+EWHZdQAkIBQsHwfB8Hw8OlrDp//7EsCVP8ABhjsGAEAAKiOImMAIAAcP/w8Pn//D/BAEAQBAyJAP/AIBsf/4P3/+CAIAgw//8rBASAQDAYDBP//+QHP//////////zEFNRQS//sSwGP/AAT45IgBBAAAgDyRACCAAAAxtMAAAMRrHJ0DpXMbYy7G7d1i1x8LNvkMOiE95GXMCQDBYrFVwOBYRhGDfBoKG////iCIfH///giP/T////+UIUAE0DAAYoRFWZjLUxQ1TMSFmc//+xLAd3/wBDRE9gCAAAh4eK7AAAAATG5oiZLM8S+yGHDULpczMF0yFpCe8jrnJLg8kZTLBwLCMIwbBkGw2GQEQQnEQRHBPBCIhCcQhCRKAIhCEIQhCE4g5B0BCEIM6CQ6Bnkw1FRTMuOTkuNKqqqqqg=="),
      error: new Audio("data:audio/mp3;base64,SUQzAwAAAAAAJlRQRTEAAAAcAAAAU291bmRKYXkuY29tIFNvdW5kIEVmZmVjdHNUQUxCAAAAGAAAAFNvdW5kSmF5LmNvbSBTRlggTGlicmFyeVRZRVIAAAAFAAAAMjAyM1RDT04AAAAHAAAAT3RoZXJzVFJDSwAAAAMAAABzZngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//tAwAAAAAFUoIQAAADeDlDgQkEgdTmrScMiIYoqvpv7zMFmXUe77/nPz/n+/B7//5EUCAQDCgYH+Dw//4Pn/8sdjsZ//7EsCSP8ABvjoGAEAAJuOYeMAIAA////w+//8Hh///wf/4fHw/hP//8HxCfD/EP/y3EZRC7JbZ3ct9bvlJB2xwxwAAAKAAACxAAAAf/kxBTUUzLjk5LjSqqqqqqqqq//sSwE9/wAO4NdwAQAAAeAa7gAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
    };
    
    // Mute all sounds initially
    Object.values(soundEffects).forEach(sound => {
      sound.volume = 0;
    });
    
    // Create a sound toggle button
    const soundButton = document.createElement('button');
    soundButton.style.position = 'absolute';
    soundButton.style.top = '10px';
    soundButton.style.left = '10px';
    soundButton.style.background = 'rgba(0, 0, 0, 0.5)';
    soundButton.style.color = 'white';
    soundButton.style.padding = '5px 10px';
    soundButton.style.borderRadius = '10px';
    soundButton.style.fontFamily = 'Arial, sans-serif';
    soundButton.style.fontSize = '14px';
    soundButton.style.border = 'none';
    soundButton.style.cursor = 'pointer';
    soundButton.innerHTML = '🔇 Sound';
    soundButton.id = 'sound-button';
    
    let soundEnabled = false;
    
    soundButton.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      
      if (soundEnabled) {
        soundButton.innerHTML = '🔊 Sound';
        Object.values(soundEffects).forEach(sound => {
          sound.volume = 0.3; // Set to a reasonable volume
        });
      } else {
        soundButton.innerHTML = '🔇 Sound';
        Object.values(soundEffects).forEach(sound => {
          sound.volume = 0;
        });
      }
    });
    
    gameCanvas.appendChild(soundButton);
    
    // Function to play a sound
    const playSound = (soundName) => {
      if (soundEffects[soundName]) {
        // Stop and reset the sound first
        soundEffects[soundName].pause();
        soundEffects[soundName].currentTime = 0;
        
        // Play the sound
        soundEffects[soundName].play().catch(err => {
          console.warn("Could not play sound:", err);
        });
      }
    };
    
    return { sounds: soundEffects, playSound };
  };
  
  const sounds = createSoundEffects();
  
  // Create collectable objects for counting
  const createCollectables = (count) => {
    const collectables = [];
    const collectableTypes = [
      // Star
      () => {
        const starGeometry = new THREE.OctahedronGeometry(0.3, 0);
        const starMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xFFD700, // Gold
          shininess: 100,
          specular: 0xFFFFFF,
          emissive: 0x996515,
          emissiveIntensity: 0.2
        });
        const star = new THREE.Mesh(starGeometry, starMaterial);
        
        // Add a glowing halo effect
        const glowGeometry = new THREE.SphereGeometry(0.4, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: 0xFFD700,
          transparent: true,
          opacity: 0.2,
          side: THREE.BackSide
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        star.add(glow);
        
        return star;
      },
      // Gem
      () => {
        const gemGeometry = new THREE.IcosahedronGeometry(0.3, 0);
        const gemMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x8A2BE2, // Purple
          shininess: 100,
          specular: 0xFFFFFF,
          transparent: true,
          opacity: 0.9
        });
        const gem = new THREE.Mesh(gemGeometry, gemMaterial);
        
        // Add a glowing core
        const coreGeometry = new THREE.IcosahedronGeometry(0.15, 0);
        const coreMaterial = new THREE.MeshBasicMaterial({
          color: 0xE6E6FA,
          transparent: true,
          opacity: 0.8
        });
        const core = new THREE.Mesh(coreGeometry, coreMaterial);
        gem.add(core);
        
        return gem;
      },
      // Coin
      () => {
        const coinGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32);
        const coinMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xFFD700, // Gold
          shininess: 100,
          specular: 0xFFFFFF
        });
        const coin = new THREE.Mesh(coinGeometry, coinMaterial);
        
        // Add details to the coin
        const detailGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.06, 32);
        const detailMaterial = new THREE.MeshPhongMaterial({
          color: 0xDAA520,
          shininess: 80
        });
        const detail = new THREE.Mesh(detailGeometry, detailMaterial);
        detail.position.y = 0;
        coin.add(detail);
        
        // Rotate coin to be face-up
        coin.rotation.x = Math.PI / 2;
        
        return coin;
      },
      // Chest
      () => {
        // Create chest base
        const baseGeometry = new THREE.BoxGeometry(0.4, 0.3, 0.3);
        const baseMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x8B4513,
          shininess: 30
        });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        
        // Create chest lid
        const lidGeometry = new THREE.BoxGeometry(0.4, 0.1, 0.3);
        const lidMaterial = new THREE.MeshPhongMaterial({ 
          color: 0x8B4513,
          shininess: 30
        });
        const lid = new THREE.Mesh(lidGeometry, lidMaterial);
        lid.position.y = 0.2;
        
        // Create chest lock
        const lockGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.05);
        const lockMaterial = new THREE.MeshPhongMaterial({ 
          color: 0xFFD700,
          shininess: 100
        });
        const lock = new THREE.Mesh(lockGeometry, lockMaterial);
        lock.position.set(0, 0.15, 0.175);
        
        // Create chest group
        const chest = new THREE.Group();
        chest.add(base);
        chest.add(lid);
        chest.add(lock);
        
        return chest;
      }
    ];
    
    // Calculate positions for collectables - along the path
    const positions = [];
    const pathWidth = 2;
    const pathLength = 8;
    
    // Create a more interesting distribution pattern
    // Make some clusters and some isolated treasures
    if (count <= 5) {
      // For small counts, distribute evenly along the path
      for (let i = 0; i < count; i++) {
        const z = (i / (count-1 || 1)) * pathLength - (pathLength / 2);
        const x = (Math.random() * pathWidth) - (pathWidth / 2);
        const y = 0.3 + Math.random() * 0.5;
        positions.push(new THREE.Vector3(x, y, z));
      }
    } else {
      // For larger counts, create clusters and isolated treasures
      const numClusters = Math.min(3, Math.floor(count / 3));
      let remainingItems = count;
      
      // Create cluster centers
      const clusterCenters = [];
      for (let i = 0; i < numClusters; i++) {
        const z = ((i / (numClusters-1 || 1)) * 0.8 - 0.4) * pathLength;
        const x = (Math.random() * (pathWidth/2)) - (pathWidth/4);
        clusterCenters.push({x, z});
      }
      
      // Assign items to clusters
      for (let i = 0; i < numClusters && remainingItems > 0; i++) {
        const clusterSize = Math.floor(remainingItems / (numClusters - i));
        remainingItems -= clusterSize;
        
        // Generate positions for this cluster
        for (let j = 0; j < clusterSize; j++) {
          const center = clusterCenters[i];
          const radius = 0.6 + Math.random() * 0.4;
          const angle = Math.random() * Math.PI * 2;
          
          const x = center.x + Math.cos(angle) * radius * 0.5;
          const z = center.z + Math.sin(angle) * radius;
          const y = 0.3 + Math.random() * 0.5;
          
          // Ensure x is within path bounds
          const boundedX = Math.max(Math.min(x, pathWidth/2), -pathWidth/2);
          positions.push(new THREE.Vector3(boundedX, y, z));
        }
      }
    }
    
    // Create the collectable objects at the calculated positions
    for (let i = 0; i < count; i++) {
      // Choose a random object type with weighted probability
      // Make stars and coins more common than gems and chests
      let typeIndex;
      const rand = Math.random();
      if (rand < 0.35) typeIndex = 0; // 35% star
      else if (rand < 0.7) typeIndex = 2; // 35% coin
      else if (rand < 0.9) typeIndex = 1; // 20% gem
      else typeIndex = 3; // 10% chest
      
      const collectable = collectableTypes[typeIndex]();
      
      collectable.position.copy(positions[i]);
      collectable.castShadow = true;
      collectable.receiveShadow = true;
      
      // Add rotation animation parameters
      collectable.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: Math.random() * 0.05 + 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        hoverParams: {
          amplitude: 0.1 + Math.random() * 0.1,
          speed: 0.5 + Math.random() * 1.0,
          phase: Math.random() * Math.PI * 2
        },
        originalY: positions[i].y,
        type: typeIndex,
        collected: false
      };
      
      scene.add(collectable);
      collectables.push(collectable);
    }
    
    return collectables;
  };
  
  // Generate a question for the current level
  function generateQuestion() {
    gameActive = true;
    
    // Restart animation if it stopped
    if (!animating) {
      animate();
    }
    
    // Update level indicator
    levelIndicator.textContent = `Level: ${level}`;
    
    // Remove any existing collectables
    collectables.forEach(obj => scene.remove(obj));
    collectables = [];
    doorOpen = false;
    
    // Reset door position
    castle.door.position.y = -0.75;
    castle.door.position.x = 0;
    
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
    
    // Create collectables
    collectables = createCollectables(currentObjectCount);
    
    // Set question text with more engaging prompt
    const prompts = [
      `How many treasure items can you find on the path? Count carefully to open the castle door!`,
      `Count the treasures scattered along the path. How many are there in total?`,
      `The castle door will open when you count all the treasures. How many do you see?`,
      `Look around and count all the magical treasures. How many are on the path?`
    ];
    
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    questionContainer.textContent = randomPrompt;
    
    // Clear input field
    answerInput.value = '';
    answerInput.style.display = 'inline-block';
    submitButton.style.display = 'inline-block';
    submitButton.textContent = 'Submit Answer';
    
    // Reset camera position smoothly
    new TWEEN.Tween(camera.position)
      .to({ x: 0, y: 1, z: 8 }, 1000)
      .easing(TWEEN.Easing.Cubic.InOut)
      .start();
    
    // Reset camera rotation
    camera.lookAt(0, 0, 0);
  }
  
  // Check the answer when Submit is clicked
  function checkAnswer() {
    if (!gameActive) return;
    
    const userAnswer = parseInt(answerInput.value);
    
    if (isNaN(userAnswer)) {
      return; // Not a valid number
    }
    
    console.log("Checking answer:", userAnswer, "Correct answer:", currentObjectCount);
    
    if (userAnswer === currentObjectCount) {
      // Correct answer
      gameActive = false;
      score += 10 * level;
      scoreElement.textContent = score;
      
      // Play success sound
      sounds.playSound('success');
      
      // Open the door animation
      doorOpen = true;
      const openDoorTween = new TWEEN.Tween(castle.door.position)
        .to({ y: 1.5 }, 1000)
        .easing(TWEEN.Easing.Cubic.Out)
        .onComplete(() => {
          // Play door open sound
          sounds.playSound('doorOpen');
        })
        .start();
      
      // Make collectables spin faster and float up
      collectables.forEach(obj => {
        const spinUpTween = new TWEEN.Tween(obj.userData.rotationSpeed)
          .to({ y: 0.2 }, 500)
          .start();
        
        // Add some randomization to the timing
        const delay = Math.random() * 500;
        
        setTimeout(() => {
          // Play treasure sound
          sounds.playSound('treasure');
          
          // Emit particles at the collectable position
          particles.emitParticles(obj.position.clone(), obj.material.color);
          
          // Float up animation
          new TWEEN.Tween(obj.position)
            .to({ y: obj.position.y + 2 }, 1500)
            .easing(TWEEN.Easing.Cubic.Out)
            .start();
        }, delay);
      });
      
      // Move camera to focus on door
      new TWEEN.Tween(camera.position)
        .to({ x: 0, y: 0.5, z: 0 }, 2000)
        .easing(TWEEN.Easing.Cubic.InOut)
        .start();
      
      // Show success message with more specific feedback
      const successMessages = [
        `Correct! There ${currentObjectCount === 1 ? 'is' : 'are'} ${currentObjectCount} treasure ${currentObjectCount === 1 ? 'item' : 'items'}. The castle door opens!`,
        `Great job! You counted all ${currentObjectCount} treasures correctly. The castle welcomes you!`,
        `Amazing counting! The ${currentObjectCount} treasures glow as the castle door swings open!`,
        `Perfect! You found all ${currentObjectCount} treasures. The door to the castle opens for you!`
      ];
      
      const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
      questionContainer.textContent = randomMessage;
      
      // After a delay, move to next level
      setTimeout(() => {
        level++;
        generateQuestion();
      }, 3000);
    } else {
      // Wrong answer - shake the door
      const shakeTween = new TWEEN.Tween(castle.door.position)
        .to({ x: 0.2 }, 50)
        .yoyo(true)
        .repeat(5)
        .start();
      
      // Play error sound
      sounds.playSound('error');
      
      setTimeout(() => {
        castle.door.position.x = 0;
      }, 300);
      
      // Show hint message with specific feedback
      if (userAnswer < currentObjectCount) {
        questionContainer.textContent = "Not quite right. There are more treasures than that. Look carefully along the whole path!";
      } else {
        questionContainer.textContent = "Not quite right. There are fewer treasures than that. Try counting each one carefully!";
      }
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
  let animating = false;
  function animate() {
    animating = true;
    if (!gameActive) {
      animating = false;
      return;
    }
    
    requestAnimationFrame(animate);
    
    // Rotate collectables
    collectables.forEach(obj => {
      obj.rotation.x += obj.userData.rotationSpeed.x;
      obj.rotation.y += obj.userData.rotationSpeed.y;
      obj.rotation.z += obj.userData.rotationSpeed.z;
      
      // Hover effect (if not currently floating away)
      if (!doorOpen) {
        const params = obj.userData.hoverParams;
        obj.position.y = obj.userData.originalY + 
          Math.sin(Date.now() * 0.001 * params.speed + params.phase) * params.amplitude;
      }
    });
    
    // Door gentle swing if not open
    if (!doorOpen) {
      castle.door.rotation.y = Math.sin(Date.now() * 0.001) * 0.05;
    }
    
    // Animate flag
    if (castle.flag) {
      const waveSpeed = castle.flag.userData.waveSpeed;
      castle.flag.rotation.x = Math.sin(Date.now() * 0.002 * waveSpeed) * 0.1;
      castle.flag.rotation.z = Math.sin(Date.now() * 0.001 * waveSpeed) * 0.2;
    }
    
    // Animate clouds drifting
    if (gamePath.cloudParticles) {
      gamePath.cloudParticles.forEach((cloud, index) => {
        cloud.position.x += 0.002 * (index % 3 === 0 ? 1 : -1);
        
        // Reset position if cloud moves too far
        if (cloud.position.x > 25) cloud.position.x = -25;
        if (cloud.position.x < -25) cloud.position.x = 25;
      });
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
  
  // Add simple camera movement based on mouse position
  gameCanvas.addEventListener('mousemove', (e) => {
    const rect = renderer.domElement.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    
    // Gentle camera movement
    const targetX = mouseX * 0.5;
    const targetY = mouseY * 0.3 + 1; // Add 1 to keep camera elevated
    
    // Smooth lerp to target
    camera.position.x += (targetX - camera.position.x) * 0.05;
    camera.position.y += (targetY - camera.position.y) * 0.05;
    
    // Keep camera looking at the center of the scene
    camera.lookAt(0, 0, 0);
  });
  
  // Start the game
  generateQuestion();
  animate();
  
  console.log("Number Adventure game setup complete");
  
  return { scene, camera, renderer };
} 
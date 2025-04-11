/**
 * This is a utility script to generate placeholder icons.
 * In a production environment, you would create proper icons with a design tool.
 * 
 * To use this script:
 * 1. Install canvas: npm install canvas
 * 2. Run with Node.js: node generate-icons.js
 */

const fs = require('fs');
const { createCanvas } = require('canvas');

// Icon sizes to generate
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Splash screen sizes for iOS
const splashSizes = [
  { width: 640, height: 1136 },  // iPhone SE
  { width: 750, height: 1334 },  // iPhone 8, iPhone 7, iPhone 6s
  { width: 1125, height: 2436 }, // iPhone X
  { width: 1242, height: 2208 }, // iPhone 8 Plus
  { width: 1536, height: 2048 }, // iPad Pro 9.7", iPad Air, iPad Mini
  { width: 1668, height: 2224 }, // iPad Pro 10.5"
  { width: 2048, height: 2732 }  // iPad Pro 12.9"
];

// Generate square icons with the MathOrGame text
function generateIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, size, size);
  gradient.addColorStop(0, '#4361ee');
  gradient.addColorStop(0.5, '#3a0ca3');
  gradient.addColorStop(1, '#7209b7');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  
  // Text
  const fontSize = Math.max(size / 10, 10);
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw "Math" on top
  ctx.fillText('Math', size / 2, size / 2 - fontSize / 2);
  
  // Draw "Game" on bottom
  ctx.fillText('Game', size / 2, size / 2 + fontSize / 2);
  
  // Save the file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`icon-${size}x${size}.png`, buffer);
  
  console.log(`Generated icon-${size}x${size}.png`);
}

// Generate splash screens
function generateSplashScreen(width, height) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#4361ee');
  gradient.addColorStop(0.5, '#3a0ca3');
  gradient.addColorStop(1, '#7209b7');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  // Text
  const fontSize = Math.max(width / 10, 40);
  ctx.font = `bold ${fontSize}px Arial`;
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  
  // Draw "MathOrGame" in the center
  ctx.fillText('MathOrGame', width / 2, height / 2 - fontSize / 2);
  
  // Draw tagline
  const tagFontSize = fontSize / 2;
  ctx.font = `${tagFontSize}px Arial`;
  ctx.fillText('Learn Math. Play Games.', width / 2, height / 2 + fontSize);
  
  // Save the file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(`splash-${width}x${height}.png`, buffer);
  
  console.log(`Generated splash-${width}x${height}.png`);
}

// Generate all icons
console.log('Generating PWA icons...');
sizes.forEach(size => generateIcon(size));

// Generate all splash screens
console.log('\nGenerating splash screens...');
splashSizes.forEach(size => generateSplashScreen(size.width, size.height));

console.log('\nAll assets generated successfully!');
console.log('Note: In a production environment, replace these with properly designed icons and splash screens.'); 
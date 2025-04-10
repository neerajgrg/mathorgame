# MathOrGame

MathOrGame is a frontend-only, browser-based educational website that uses Three.js to teach math (up to 8th standard) through interactive and entertaining 3D games. The aim is to make learning fun, accessible, and gamified—all without backend services.

## Features

- Interactive 3D math games for grades 1-8
- Client-side only - works offline
- Four main math categories (Arithmetic, Geometry, Data & Measurement, Logic & Algebra)
- Progress tracking using localStorage
- Responsive design for desktop, tablet, and mobile
- Built with Three.js for immersive 3D experiences

## Games

- **Dungeon Escape**: Solve addition and subtraction equations to open doors
- **Space Shooter**: Practice multiplication by shooting correct answers
- **Shape Builder**: Build shapes and match outlines to learn geometry
- **Volume Quest**: Calculate volume of 3D objects to progress

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/mathorgame.git
   cd mathorgame
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build will be in the `dist` directory and can be deployed to any static web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## Technologies Used

- HTML, CSS, JavaScript
- Three.js for 3D rendering
- Tween.js for animations
- Vite for build tooling
- LocalStorage for data persistence

## Support the Project

If you like this project, consider supporting us through:

- [Ko-fi](https://ko-fi.com)
- Sharing with teachers, students, and parents

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## PWA Support

This application includes Progressive Web App (PWA) support, which allows users to install it on their devices and use it offline.

### PWA Features

- **Installable**: Users can install the app on their devices
- **Offline Support**: Core functionality works without an internet connection
- **Responsive Design**: Works well on all device sizes
- **App-like Experience**: Full-screen mode without browser UI

### Setting Up the Icons

For a complete PWA experience, you'll need to generate icon files in various sizes. We've provided a utility script to help:

1. Install the required package:
   ```
   npm install canvas
   ```

2. Run the icon generator script:
   ```
   node public/icons/generate-icons.js
   ```

3. Move the generated icons to the `public/icons` directory.

Alternatively, you can create custom icons using design tools like Figma, Adobe Photoshop, or any other image editor. Make sure to create all the sizes specified in the `manifest.json` file.

### Testing PWA Functionality

To test the PWA functionality:

1. Build the application for production:
   ```
   npm run build
   ```

2. Serve the production build:
   ```
   npx serve -s dist
   ```

3. Open the application in Chrome or another PWA-supporting browser.

4. You should see an install prompt or be able to install the app from the browser menu.

### PWA Files

- **manifest.json**: Defines app metadata, icons, and behavior
- **sw.js**: Service worker for offline caching
- **register-sw.js**: Registers the service worker
- **offline.html**: Fallback page when offline

## Deploying to GitHub Pages

MathOrGame is fully compatible with GitHub Pages. There are several ways to deploy:

### Option 1: Using GitHub Actions (Automatic)

This repository includes a GitHub Actions workflow that automatically builds and deploys your app:

1. Push your code to GitHub (main or master branch)
2. Go to your repository Settings → Pages
3. Under "Build and deployment" select:
   - Source: "GitHub Actions"
4. The app will build and deploy automatically on each push

If you encounter the "Missing download info for actions/upload-artifact@v3" error:
- The workflow has been updated to use compatible versions
- Just push the updated .github/workflows/deploy.yml file

### Option 2: Using gh-pages package (Manual)

For manual deployment using npm:

1. Install gh-pages if not already installed:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Deploy with a single command:
   ```bash
   npm run deploy
   ```

3. Your app will be deployed to the gh-pages branch

### Option 3: Manual Deployment

If you prefer fully manual deployment:

1. Build your project:
   ```bash
   npm run build
   ```

2. The build process creates a `dist` folder with all deployment files

3. Push the contents of the `dist` folder to your preferred branch (e.g., gh-pages)

4. In your GitHub repository settings:
   - Go to Settings → Pages
   - Under "Build and deployment" select:
     - Source: "Deploy from a branch"
     - Branch: Choose your branch (e.g., gh-pages)
     - Folder: "/" (root)

### Important Notes for GitHub Pages

- The PWA has been configured to work with GitHub Pages path structure
- All static assets use relative paths (`./` prefix) for proper loading
- A special 404.html page is included to handle client-side routing
- The service worker is configured to work within the GitHub Pages environment

Remember that it may take a few minutes for your site to be published after pushing changes.

---

Made with ❤️ by the MathOrGame Team 
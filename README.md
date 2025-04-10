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

MathOrGame is fully compatible with GitHub Pages. Follow these steps to deploy:

1. First, build your project:
   ```bash
   npm run build
   ```

2. If you're deploying to a user or organization site (username.github.io), copy all files from the `dist` folder to the root of your repository.

3. If you're deploying to a project site (username.github.io/mathorgame), copy all files from the `dist` folder to the root of your repository.

4. For project sites, make sure your repository settings are configured to deploy from the branch where you pushed the build files.

5. In your GitHub repository, go to Settings > Pages and:
   - Select the branch containing your build files
   - Choose the root folder (/) as the source
   - Click Save

6. GitHub will provide you with a URL where your site is published.

### Important Notes for GitHub Pages

- The PWA has been configured to work with GitHub Pages path structure
- All static assets use relative paths (`./` prefix) for proper loading
- A special 404.html page is included to handle client-side routing
- The service worker is configured to work within the GitHub Pages environment

Remember that it may take a few minutes for your site to be published after pushing changes.

---

Made with ❤️ by the MathOrGame Team 
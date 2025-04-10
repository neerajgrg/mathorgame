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

---

Made with ❤️ by the MathOrGame Team 
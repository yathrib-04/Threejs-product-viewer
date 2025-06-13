# Interactive 3D Product Viewer

An interactive 3D product viewer built with Three.js that allows users to explore a chair model with mouse interactions and automatic camera rotation.

## Features

- **Interactive 3D Chair Model**
  - Built using basic Three.js geometries
  - Realistic materials and lighting
  - Centered at origin for proper camera rotation

- **Mouse Interactions**
  - Hover effects with part highlighting
  - Click feedback with color and scale changes
  - Interactive info panel showing part names
  - Raycasting for precise part selection

- **Camera Controls**
  - Automatic smooth rotation around the product
  - Manual orbit controls for user interaction
  - Zoom and pan capabilities
  - Responsive to window resizing

- **Visual Effects**
  - Ambient and directional lighting
  - Smooth animations and transitions
  - Part highlighting and feedback effects

## Project Structure

```
├── index.html          # Main HTML file
├── js/
│   ├── main.js         # Main application entry point
│   ├── initScene.js    # Scene, camera, and renderer setup
│   ├── createProduct.js # Chair model creation
│   ├── addLighting.js  # Lighting setup
│   ├── interaction.js  # Mouse interaction handling
│   └── cameraAnimation.js # Camera rotation animation
└── README.md          # Project documentation
```

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```bash
   cd Threejs-product-viewer
   ```

3. Start a local server (using Live Server in VS Code or any other local server)

4. Open your browser and navigate to:
   ```
   http://localhost:5503
   ```

## Usage

- **Mouse Controls**
  - Left-click and drag to rotate the view
  - Scroll to zoom in/out
  - Right-click and drag to pan
  - Hover over parts to see their names
  - Click on parts for visual feedback

- **Automatic Features**
  - Camera automatically rotates around the product
  - Auto-rotation pauses during user interaction
  - Resumes after 2 seconds of inactivity

## Technical Details

- Built with Three.js
- Uses ES6 modules
- Implements modern JavaScript features
- Responsive design
- Optimized for performance

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Dependencies

- Three.js (v0.157.0)
- ES Module Shims (v1.8.0)

## Future Improvements

- Add more product models
- Implement texture support
- Add animation controls
- Include measurement tools
- Add export functionality

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details. 
// Import required Three.js modules and custom components
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { initScene } from './initScene.js';
import { createProduct } from './createProduct.js';
import { addLighting } from './addLighting.js';
import { setupInteraction } from './interaction.js';
import { setupCameraAnimation } from './cameraAnimation.js';

// Initialize scene, camera, and renderer
const { scene, camera, renderer, controls } = initScene();
const product = createProduct();
scene.add(product);
addLighting(scene);
setupInteraction(scene, camera);
const updateCamera = setupCameraAnimation(camera, controls, scene);

// Main animation loop for continuous rendering
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    updateCamera(); // Update camera position for smooth rotation
    renderer.render(scene, camera);
}

animate();
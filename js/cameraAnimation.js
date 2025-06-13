import * as THREE from 'three';

export function setupCameraAnimation(camera, controls, scene) {
    const state = {
        radius: 7,                // Distance from center
        height: 5,                // Camera height
        theta: 0,                 // Angle in radians
        rotationSpeed: 0.1,       // Revolutions per second
        isAutoRotating: true,
        lastTime: performance.now()
    };

    // OrbitControls setup
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableZoom = true;
    controls.minDistance = 3;
    controls.maxDistance = 10;

    controls.target.set(0, 0, 0);
    controls.update();

    // Update camera position based on theta
    function updateCameraRotation() {
        const x = state.radius * Math.cos(state.theta);
        const z = state.radius * Math.sin(state.theta);
        camera.position.set(x, state.height, z);
        camera.lookAt(0, 0, 0);
        controls.target.set(0, 0, 0);
        controls.update();
    }

    // Auto-rotation control
    let rotationTimeout;

    function startAutoRotation() {
        state.isAutoRotating = true;
        state.lastTime = performance.now();
    }

    function stopAutoRotation() {
        state.isAutoRotating = false;
    }

    controls.addEventListener('start', () => {
        clearTimeout(rotationTimeout);
        stopAutoRotation();
    });

    controls.addEventListener('end', () => {
        clearTimeout(rotationTimeout);
        rotationTimeout = setTimeout(startAutoRotation, 2000);
    });

    // Called every frame in main.js
    function updateCamera() {
        const currentTime = performance.now();
        const deltaTime = Math.min((currentTime - state.lastTime) / 1000, 0.1);
        state.lastTime = currentTime;

        if (state.isAutoRotating) {
            state.theta += deltaTime * state.rotationSpeed * 2 * Math.PI;
            if (state.theta > 2 * Math.PI) {
                state.theta -= 2 * Math.PI;
            }
            updateCameraRotation();
        } else {
            // Keep controls synced to prevent snapping
            controls.update();
        }
    }

    // Initial positioning
    updateCameraRotation();
    startAutoRotation();

    return updateCamera;
}

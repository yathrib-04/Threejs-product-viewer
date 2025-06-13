import * as THREE from 'three';

export function setupInteraction(scene, camera) {
    // Initialize raycaster and mouse tracking
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const infoPanel = document.getElementById('info');
    const partName = document.getElementById('part-name');
    let hoveredObject = null;
    let originalColors = new Map();
    let originalScales = new Map();
    
    // Store original colors and scales
    scene.traverse((object) => {
        if (object.isMesh) {
            originalColors.set(object, object.material.color.clone());
            originalScales.set(object, object.scale.clone());
        }
    });

    function resetObject(object) {
        // Reset object to original state
        if (object && originalColors.has(object)) {
            object.material.color.copy(originalColors.get(object));
            object.scale.copy(originalScales.get(object));
        }
    }

    function highlightObject(object) {
        // Apply hover highlight effect
        if (object) {
            object.material.emissive.setHex(0x333333);
        }
    }

    function clickEffect(object) {
        if (!object) return;
        
        // Store original color
        const originalColor = object.material.color.clone();
        
        // Change color
        object.material.color.setHex(0xff0000);
        
        // Scale effect
        const originalScale = object.scale.clone();
        object.scale.multiplyScalar(1.2);
        
        // Reset after animation
        setTimeout(() => {
            object.material.color.copy(originalColor);
            object.scale.copy(originalScale);
        }, 300);
    }
    
    window.addEventListener('mousemove', (event) => {
        // Process mouse movement for hover
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        
        if (hoveredObject) {
            resetObject(hoveredObject);
        }
        
        if (intersects.length > 0) {
            hoveredObject = intersects[0].object;
            highlightObject(hoveredObject);
            infoPanel.style.display = 'block';
            partName.textContent = hoveredObject.name;
        } else {
            hoveredObject = null;
            infoPanel.style.display = 'none';
        }
    });

    window.addEventListener('click', (event) => {
        // Handle click events
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(scene.children, true);
        
        if (intersects.length > 0) {
            const clickedObject = intersects[0].object;
            clickEffect(clickedObject);
        }
    });
}
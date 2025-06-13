import * as THREE from 'three';

export function createProduct() {
    const group = new THREE.Group();
    
    // Seat
    const seatGeometry = new THREE.BoxGeometry(2, 0.2, 2);
    const seatMaterial = new THREE.MeshPhongMaterial({ color: 0x8B4513 });
    const seat = new THREE.Mesh(seatGeometry, seatMaterial);
    seat.name = 'seat';
    group.add(seat);
    
    // Back
    const backGeometry = new THREE.BoxGeometry(2, 2, 0.2);
    const back = new THREE.Mesh(backGeometry, seatMaterial);
    back.position.set(0, 1, -1);
    back.name = 'back';
    group.add(back);
    
    // Legs
    const legGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2);
    const legMaterial = new THREE.MeshPhongMaterial({ color: 0x4A4A4A });
    
    const positions = [
        [-0.8, -1, -0.8],
        [0.8, -1, -0.8],
        [-0.8, -1, 0.8],
        [0.8, -1, 0.8]
    ];
    
    positions.forEach((pos, index) => {
        const leg = new THREE.Mesh(legGeometry, legMaterial);
        leg.position.set(...pos);
        leg.name = `leg${index + 1}`;
        group.add(leg);
    });
    
    return group;
}
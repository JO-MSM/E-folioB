
//import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";
import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';
function 
CreateSkySphere(scene, camera, sun) {
    // Configurar câmera
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // Adicionar luz ambiente
    const luzAmbiente = new THREE.AmbientLight(0x404040);
    scene.add(luzAmbiente);

    // Adicionar luz direcional
    const luzDirecional = new THREE.DirectionalLight(0xffffff, 1, 500);
    luzDirecional.position.set(1, 1, 1).normalize();
    scene.add(luzDirecional);

    // Adicionar luz pontual (esfera amarela no céu)
    sun = new THREE.PointLight(0xffff00, 0.8, 10);
    sun.position.set(0, 4, -2);
    sun.castShadow = true; // Habilitar sombras

    // Configurações de sombras para a luz pontual
    sun.shadow.mapSize.width = 1024;
    sun.shadow.mapSize.height = 1024;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 15;

    // Esfera amarela para representar a luz pontual
    const esferaLuzPontual = new THREE.Mesh(new THREE.SphereGeometry(0.6, 200, 200), new THREE.MeshBasicMaterial({
        color: 0xffff00
    }));

    const centralPoint = new THREE.Mesh();
    centralPoint.position.set(0, 0, 0);
    
    sun.add(esferaLuzPontual);
    centralPoint.add(sun);
    scene.add(centralPoint);

    camera.position.z = 6;

    return [scene, camera, sun];
}

export {CreateSkySphere};


import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

//============================================================================

function CreateSkySphere(scene, camera, luzPontual) {

    // Configurar câmera
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // Adicionar luz ambiente
    const luzAmbiente = new THREE.AmbientLight(0x404040);
    scene.add(luzAmbiente);

    // Adicionar luz direcional
    const luzDirecional = new THREE.DirectionalLight(0xffffff, 0.5);
    luzDirecional.position.set(1, 1, 1).normalize();
    scene.add(luzDirecional);

    // Adicionar luz pontual (esfera amarela no céu)
    luzPontual = new THREE.PointLight(0xffff00, 1, 10);
    luzPontual.position.set(0, 5, 0);
    luzPontual.castShadow = true; // Habilitar sombras

    // Configurações de sombras para a luz pontual
    luzPontual.shadow.mapSize.width = 1024;
    luzPontual.shadow.mapSize.height = 1024;
    luzPontual.shadow.camera.near = 0.5;
    luzPontual.shadow.camera.far = 15;

    // Esfera amarela para representar a luz pontual
    const esferaLuzPontual = new THREE.Mesh(new THREE.SphereGeometry(0.05, 12, 12), new THREE.MeshBasicMaterial({
        color: 0xffff00
    }));

    luzPontual.add(esferaLuzPontual);
    scene.add(luzPontual);

    camera.position.z = 5;

    return [scene, camera, luzPontual];
}

export {CreateSkySphere};

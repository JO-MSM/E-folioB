console.log("Check oppening file: skySphere.js");
//============================================================================

import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';


// verificar valores
let xRandomCoord = Math.round(Math.random() * 10);
let yRandomCoord = Math.round(Math.random() * 10);

function CreateSkySphere() {

    /**const skySphere = new THREE.SphereGeometry(16, 30, 30)
     const sKySphereMaterial = new THREE.MeshBasicMaterial({
     map: textureLoader.load(sunTexture)
     })

     let sphere = new THREE.Mesh(skySphere, sKySphereMaterial);

     // Para representar os sol com as configurações em modo objeto
     sphere = {      // Constiuir as condições para skySphere amarelo
     position: new THREE.Vector3((yRandomCoord===0?2:yRandomCoord), (xRandomCoord===0?2:xRandomCoord), 0)
     }; **/


        // Configuração da cena
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75,
        window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Configurar câmera
    camera.position.set(5, 5, 5);
    camera.lookAt(0, 0, 0);

    // Adicionar luz ambiente
    const luzAmbiente = new THREE.AmbientLight(0x404040);
    scene.add(luzAmbiente);

    // Adicionar luz direcional
    const luzDirecional = new THREE.DirectionalLight(0xffffff, 0.5);
    luzDirecional.position.set(1, 1, 1).normalize();
    scene.add(luzDirecional);

    // Adicionar luz pontual (esfera amarela no céu)
    const luzPontual = new THREE.PointLight(0xffff00, 1, 10);
    luzPontual.position.set(0, 5, 0);
    scene.add(luzPontual);

    // Esfera amarela para representar a luz pontual
    const esferaLuzPontual = new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(new THREE.SphereGeometry(100, 100, 10, 1, 10, 1, 10)), new THREE.MeshBasicMaterial({
        color: 0xffff00
    }));

    luzPontual.add(esferaLuzPontual);

    return [scene, camera];
}

export {CreateSkySphere};
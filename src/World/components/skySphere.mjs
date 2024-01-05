console.log("Check oppening file: skySphere.js");
//============================================================================

import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';


// verificar valores
let xRandomCoord = Math.round(Math.random()*10);
let yRandomCoord = Math.round(Math.random()*10);

function createSkySphere(){

    const skySphere = new THREE.SphereGeometry(16, 30, 30)
    const sKySphereMaterial = new THREE.MeshBasicMaterial({
        map: textureLoader.load(sunTexture)
    })

    let sphere = new THREE.Mesh(skySphere, sKySphereMaterial);

    /* Para representar os sol com as configurações em modo objeto */
    sphere = {      /* Constiuir as condições para skySphere amarelo */
        position: new THREE.Vector3((yRandomCoord==0?2:yRandomCoord), (xRandomCoord==0?2:xRandomCoord), 0)
    };

    return skySphere;
}

export { createSkySphere };
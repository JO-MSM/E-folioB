//import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';
/** Para que se possa atualizar de forma constante o ficheiro assim que ocorra
uma modificação dinâmica em qualquer parte do projeto **/

let renderer;
function createRenderer(container, scene, camera) {

    renderer = new THREE.WebGLRenderer();
    renderer.render(scene, camera);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.append(renderer.domElement);

    //let controls = new OrbitControls(camera, renderer.domElement);
    //controls.addEventListener("change", () => renderer.render(scene, camera));

    return renderer;
}


function renderLight(scene, camera, sun) {
    sun.rotation.y += 0.01;
    renderer.render( scene, camera );
}

/*
function renderCentralPoint(scene, camera, centralPoint) {
    centralPoint.rotation.y += 0.04;
    renderer.render( scene, camera );
}
*/
function renderCentralPoint(scene, camera, centralPoint) {
    if (centralPoint) {
        centralPoint.rotation.y += 0.04;
        renderer.render(scene, camera);
    }
}

export { createRenderer , renderLight, renderCentralPoint};




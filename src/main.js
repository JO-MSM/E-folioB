
//============================================================================
//import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";
import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';
import { createTerrainCustomization } from "./Terrain/terrainCustomization.mjs";
import {createControls} from "./Terrain/uiControls.mjs";
import {createRenderer, renderLight, renderCentralPoint } from "./Terrain/rendering.mjs";
import {CreateSkySphere} from "./Terrain/skySphere.mjs";
//import {createTerrain} from "./Terrain/terrainGeneration.mjs";
//import {addOns} from './Terrain/components/addOns.mjs';

let scene;
let camera;
let sun;
let centralPoint;

function main() {
    const container = document.querySelector('#scene-container');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000 );
    const values = new CreateSkySphere(scene, camera, sun);
    scene = values[0];
    camera = values[1];
    sun = values[2];
    centralPoint = values[3];

    createControls()
    createTerrainCustomization(scene)
    createRenderer(container, scene, camera)

}
function animate() {
    requestAnimationFrame( animate );
    renderLight( scene, camera, sun );
    renderCentralPoint(scene, camera, centralPoint);
}

main();
animate();


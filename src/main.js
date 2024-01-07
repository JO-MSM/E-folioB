//============================================================================
import * as THREE from "https://unpkg.com/three@0.160.0/build/three.module.js";

//import { createTerrainCustomization } from "./Terrain/components/terrainCustomization.mjs"; /* Para criar terreno*/
import {createTerrain} from "./Terrain/terrainGeneration.mjs";
import {createControls} from "./Terrain/uiControls.mjs";
import {createRenderer, render} from "./Terrain/rendering.mjs";
import {CreateSkySphere} from "./Terrain/skySphere.mjs";
//import {addOns} from './Terrain/components/addOns.mjs';

var scene;
var camera;
var luzPontual;
function main() {
    const container = document.querySelector('#scene-container');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000 );
    const values = new CreateSkySphere(scene, camera, luzPontual);
    scene = values[0];
    camera = values[1];
    luzPontual = values[2];

    createControls()
    createTerrain(scene)
   // terreno.receiveShadow=true;

    createRenderer(container, scene, camera)

}

function animate() {
    requestAnimationFrame( animate );
    render( scene, camera, luzPontual );
}


main();
animate();

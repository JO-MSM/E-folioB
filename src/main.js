//import {OrbitControls} from "https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js";

console.log("Check oppening file: main.js");
//============================================================================

/* Ficheiros importandos de ./components */
//import { createCamera } from "./Terrain/components/camera.mjs";
//import { createScene } from "./Terrain/components/scene.mjs";
//import { createTerrainCustomization } from "./Terrain/components/terrainCustomization.mjs"; /* Para criar terreno*/
import {criarTerreno} from "./Terrain/terrainGeneration.mjs";

/* Ficheiros importandos de ./systems */
import { createRenderer} from "./Terrain/rendering.mjs";
import {CreateSkySphere} from "./Terrain/skySphere.mjs";
import * as THREE from "https://unpkg.com/three@0.124.0/build/three.module.js";
//import {addOns} from './Terrain/components/addOns.mjs';


/* Variáveis que são específicas os modulos específicos, para que não sejam acedidos
fora do módulo correspondente */

function main() {


    /* Para selecionar a tag onde esta parte será apresentada */
    const container = document.querySelector('#scene-container');

    let values = new CreateSkySphere();
    let scene = values[0];
    let camera = values[1];

    const tamanhoTerreno = 10;
    const subdivisoesTerreno = 100;
    const terrainSettings = {
        deformacao: 2,
        cor: 0x00ff00
    };
    const terreno = criarTerreno(tamanhoTerreno, subdivisoesTerreno, terrainSettings);
    scene.add(terreno);

    let renderer = createRenderer(scene, camera);
    /* Para atualizar o container do index.html em main.js a partir da nova função criada em world */
    container.append(renderer.domElement);

    /* Para redemensionar cada função a cada momento que ocora alteração do global */
    //const resizer = new Resizer(container, camera, renderer);
}

main();

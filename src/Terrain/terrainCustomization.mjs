console.log("Check oppening file: main.js");
//============================================================================

/* Ficheiros importandos de ./components */
import { createTerrainGeneration } from "./terrainGeneration.mjs";
//import {addOns} from './addOns.mjs';
/* Ficheiros importandos de ./systems */
import { createRenderer} from "./rendering.mjs";
import { Resizer } from "../systems/Resizer.mjs";
/* Outros */
import { OrbitControls } from 'https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js';




/* Variáveis que são específicas os modulos específicos, para que não sejam acedidos
fora do módulo correspondente */
let camera;
let scene;
let renderer;
let controls;

/* Para construir um conteúdo único para o objeto criado */
class World {
    constructor(container) {
        /* Para reinicializar todas as partes do objetos criados anteriormente dentro do ficheiro Terrain */
        renderer = createRenderer();
        scene = createScene();
        camera = createCamera();
        controls = new OrbitControls(camera, renderer.domElement);



        let terrain = createTerrainGeneration();
        terrain.noiseType = "perlin";
        terrain.heightMap = null;
        terrain.scale = 50;

        let terrainCustomization = createTerrainCustomization();
        terrainCustomization.size = 1000;
        terrainCustomization.scale = 10;
        terrain.addComponent(terrainCustomization);

        scene.add(terrain);

        let skySphere = new createSkySphere();
        skySphere.material.color = new THREE.Color(0xffff00);
        scene.add(skySphere);

        /* Para atualizar o container do index.html em main.js a partir da nova função criada em world */
        container.append(renderer.domElement);

        /* Para redemensionar cada função a cada momento que ocora alteração do global */
        const resizer = new Resizer(container, camera, renderer);
    }

    render() {
        controls.addEventListener("change", () => renderer.render(scene, camera));
        renderer.render(scene, camera);
    }

}


function main() {


    /* Para selecionar a tag onde esta parte será apresentada */
    const container = document.querySelector('#scene-container');

    /* Permite criar chamar a função Terrain criada noutro ficheiro */
    const world = new World(container);

    /* Para que a variável sofra "actualização" constante em cada nova alteração de forma imediata */
    world.render();
}

main();

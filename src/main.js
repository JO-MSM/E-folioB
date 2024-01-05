
console.log("Check oppening file: main.js");
//============================================================================

/* Ficheiros importandos de ./components */
import { createCamera } from './World/components/camera.mjs';
import { createScene } from './World/components/scene.mjs';
import { createTerrainCustomization } from './World/components/terrainCustomization.mjs'; /* Para criar terreno*/

/* Ficheiros importandos de ./systems */
import { createRenderer } from './World/systems/renderer.mjs';
import { Resizer } from './World/systems/resizer.mjs';

/* Ficheiros importandos em CDN segundo requisitos de avaliação */
import { OrbitControls } from 'https://unpkg.com/three@0.124.0/examples/jsm/controls/OrbitControls.js';

/* Variáveis que são específicas os modulos específicos, para que não sejam acedidos
fora do módulo correspondente */
let camera;
let scene;
let renderer;
let controls;

/* Para construir um conteúdo único para os objeto criado */
class World {
    constructor(container) {
        /* Para reinicializar todas as partes do objetos criados anteriormente dentro do ficheiro World */
        renderer = createRenderer();
        scene = createScene();
        camera = createCamera();
        controls = new OrbitControls(camera, renderer.domElement);

        /* Para criar o tabuleiro e este se tornar visivel */
        let terrainCustomization = new TerrainCustomization(scene, camera, renderer, controls);

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

    /* Permite criar chamar a função World criada noutro ficheiro */
    const world = new World(container);

    /* Para que a variável sofra "actualização" constante em cada nova alteração de forma imediata */
    world.render();
}

main();

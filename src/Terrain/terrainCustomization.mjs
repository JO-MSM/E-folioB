console.log("Check oppening file: main.js");
//============================================================================

/* Ficheiros importandos de ./components */
import {createTerrainGeneration} from "./terrainGeneration.mjs";
//import {addOns} from './addOns.mjs';
/* Ficheiros importandos de ./systems */
import {createRenderer} from "./rendering.mjs";
import {Resizer} from "../systems/Resizer.mjs";
/* Outros */

/* Para construir um conteúdo único para o objeto criado */
function customizeTerrain(container) {

    /* Para redemensionar cada função a cada momento que ocora alteração do global */
    //const resizer = new Resizer(container, camera, renderer);
}

/**
 * class Resizer {
 *     constructor(container, camera, renderer) {
 *         // Determina a frequencia com o que aspeto da "Câmara" corresponde às proporções         do conteiner, na janela correspondente
 *
 camera.aspect = container.clientWidth / container.clientHeight;
 *
 *         // Actualiza a zona do espaço da função Terrain, quer realmente se torna visível no ecran
 *
 camera.updateProjectionMatrix();
 *
 *         // Para que a imagem devolvida que se tem de corresponder, tenha o mesmo tamanho
 *     que o container onde este se encontra presente
 *
 renderer.setSize(container.clientWidth, container.clientHeight);
 *
 *         // Para determinar a frequência de actuzalização do pixel das imagens a apresentar independentemente do tipo de dispositivo /
 *
 renderer.setPixelRatio(window.devicePixelRatio);
 *
 }
 *
 }
 *
 *
 */




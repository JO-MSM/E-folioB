console.log("Check oppening file: terrainGeneration");

/* Ficheiros importandos de ./components */
import {createTerrainGeneration} from "./terrainGeneration.mjs";

function createTerrainCustomization(scene) {
    let altura = 0;
    let cor = 0;
    const createTerrainPerlinNoise = createTerrainGeneration(scene, altura, cor);

}
export {createTerrainCustomization};





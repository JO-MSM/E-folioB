
console.log("Check oppening file: createTerrainGeneration.mjs");
//============================================================================

import { createTerrainGeneration } from './components/terrainGeneration.mjs'; /* Para criar terreno*/
import { createSkySphere } from './components/skySphere.mjs'; /* Para criar sol */


// uiControls
// cursor, barra: cores, altura,...

function createTerrainCustomization() {
    let terrainCustomization;
    let skySphere = createSkySphere();

    let terraineGeneration = createTerraineGeneration();

    function animate(){
        skySphere.rotateY(0.004);
    }

    renderer.setAnumationLoop(animate);

    //terrena= mesh..asdadssdas

    terrainCustomization.add(terraineGeneration);
    terrainCustomization.add(skySphere);

    return terrainCustomization;
}

export { createTerrainCustomization };
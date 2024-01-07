// Configurar GUI

import {GUI} from 'https://unpkg.com/three@0.124.0/examples/jsm/libs/dat.gui.module.js';

function createControls() {
    const gui = new GUI();
    const terrainFolder = gui.addFolder('Configurações do Terreno');
    const terrainSettings = {
        deformacao: 2,
        cor: 0x00ff00
    };
    const deformationSlider = terrainFolder.add(terrainSettings, 'deformacao', 0, 10).name('Deformação');
    const colorFolder = gui.addFolder('Configurações de Cor');
    const colorSlider = colorFolder.addColor(terrainSettings, 'cor').name('Cor do Terreno');
}

export {createControls}
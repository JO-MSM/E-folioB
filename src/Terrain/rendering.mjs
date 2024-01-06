
console.log("Check oppening file: renderering.mjs");
//============================================================================

import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';

/* Para que se possa atualizar de forma constante o ficheiro assim que ocorra
uma modificação dinâmica em qualquer parte do projeto */
function createRenderer() {

    const renderer = new THREE.WebGLRenderer();

    /* Para atualizar o pixel (dimensão, espaço, aspeto, ...) no global (index)
    em que se torna visual o tabuleiro criado */
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );

    return renderer;
}

export { createRenderer };


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
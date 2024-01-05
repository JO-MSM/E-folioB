
console.log("Check oppening file: renderering.js");
//============================================================================

import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';

/* Para que se possa atualizar de forma constante o ficheiro assim que ocorra
uma modificação dinâmica em qualquer parte do projeto */
function createRender() {

    const renderering = new THREE.WebGLRenderer();

    /* Para atualizar o pixel (dimensão, espaço, aspeto, ...) no global (index)
    em que se torna visual o tabuleiro criado */
    renderering.setPixelRatio( window.devicePixelRatio );
    renderering.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderering.domElement );

    return renderering;
}

export { createRender };
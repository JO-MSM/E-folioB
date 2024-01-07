/*
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

// Função para criar terreno usando Perlin Noise
function createTerrain(scene) {
    //TODO Com o slider mudar o innerWidth
    var geometry = new THREE.PlaneGeometry( window.innerWidth, window.innerHeight, 256, 256 );
    var material = new THREE.MeshLambertMaterial({color: 0xE6EBED});
    var terrain = new THREE.Mesh( geometry, material );
    terrain.rotation.x = Math.PI / 2;
    scene.add( terrain );

    var peak = 60;
    var vertices = terrain.geometry.attributes.position.array;
    for (var i = 0; i <= vertices.length; i += 3) {
        vertices[i+2] = peak * Math.random();
    }
    terrain.geometry.attributes.position.needsUpdate = true;
    terrain.geometry.computeVertexNormals();
}

export { createTerrain };
*/

import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
import { SimplexNoise } from 'https://unpkg.com/three/examples/jsm/math/SimplexNoise.js';

function createTerrain(scene) {
    // TODO Com o slider mudar o innerWidth
    const geometry = new THREE.PlaneGeometry(
        window.innerWidth,
        window.innerHeight,
        512,
        512);
    const material = new THREE.MeshPhongMaterial({
        color: 0xE6EBED,
    });
    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = Math.PI / 4;

    scene.add(terrain);

    // Gerar terreno usando o ruído Simplex
    const simplexNoise = new SimplexNoise();
   // const gaussianNoise = new THREE.Noise();
    const vertices = terrain.geometry.attributes.position.array;

    for (let i = 0; i <= vertices.length; i += 3) {
        // Gerar altura usando o ruído Simplex
        const altura = simplexNoise.noise(vertices[i] / 100, vertices[i + 1] / 100) * 100;

        // Aplicar altura ao vértice
        vertices[i + 2] = altura;
    }

    // Atualizar geometria para refletir as alterações de altura
    terrain.geometry.attributes.position.needsUpdate = true;
    terrain.geometry.computeVertexNormals();
}

export {createTerrain};

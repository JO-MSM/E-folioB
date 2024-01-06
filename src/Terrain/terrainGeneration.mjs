console.log("Check oppening file: createTerrainGeneration.mjs");
import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';
//============================================================================

// Função para criar terreno usando Perlin Noise ///////////////////creio estar melhor//////////////
// Função para criar terreno usando Perlin Noise
function criarTerreno(tamanho, subdivisoes, config) {
    const geometria = new THREE.PlaneGeometry(tamanho, tamanho, subdivisoes, subdivisoes);
    const material = new THREE.MeshBasicMaterial({
        color: config.cor,
        wireframe: true
    });

    const vertices = geometria.vertices;
    const perlin = new THREE.Vector3();
    const escalaRuido = 0.1;

    for (let i = 0; i < vertices.length; i += 3) {
        const x = vertices[i];
        const y = vertices[i + 1];
        const z = vertices[i + 2];

        // Usar Perlin Noise para gerar a altura do terreno
        perlin.set(x * escalaRuido, y * escalaRuido, z * escalaRuido);
        vertices[i + 1] = THREE.MathUtils.mapLinear(Math.random(), 0, 1, -config.deformacao, config.deformacao);

        // Ajustar a altura conforme necessário
        vertices[i + 1] *= 2;
    }

    geometria.computeFaceNormals();
    geometria.computeVertexNormals();

    return new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(geometria), material);
}
export {criarTerreno};
import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
//import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';

import { SimplexNoise } from 'https://unpkg.com/three/examples/jsm/math/SimplexNoise.js';

// Função para criar terreno usando Perlin Noise
/*function createTerrainGeneration(scene) {
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

export {createTerrainGeneration};

*/


//codigo para 10% do terreno-ultimo codigo feito
function createTerrainGeneration(scene, altura, cor) {
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
        let minimo = vertices[i+1];
        if(minimo < 0 ) {
            minimo = 0 ;
        }
        const altura = simplexNoise.noise(vertices[i] / 100, minimo/ 100) * 100;

        // Aplicar altura ao vértice
        vertices[i + 2] = altura;
    }

    // Atualizar geometria para refletir as alterações de altura
    terrain.geometry.attributes.position.needsUpdate = true;
    terrain.geometry.computeVertexNormals();
}
export {createTerrainGeneration};


//
// import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';
// import Perlin from 'https://unpkg.com/perlin@0.6.0';
//
// function createTerrain(scene) {
//     // Adicionar dois pontos centrais para as montanhas
//     const mountainCenter1 = new THREE.Vector3(0, 0, 0);
//     const mountainCenter2 = new THREE.Vector3(100, 0, 0);
//
//     // Criar uma função que calcule a distância entre dois pontos
//     function distance(a, b) {
//         return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
//     }
//
//     // Criar a geometria do terreno
//     const geometry = new THREE.PlaneGeometry(
//         window.innerWidth,
//         window.innerHeight,
//         112,
//         112
//     );
//
//     // Criar o material do terreno
//     const material = new THREE.MeshPhongMaterial({
//         color: 0xE6EBED,
//     });
//
//     // Criar o terreno
//     const terrain = new THREE.Mesh(geometry, material);
//     terrain.rotation.x = Math.PI / 4;
//
//     // Atualizar as alturas dos vértices do terreno usando Perlin Noise
//     const vertices = terrain.geometry.attributes.position.array;
//     const noise = new Perlin();
//
//     for (let i = 0; i < vertices.length; i += 3) {
//         const vertex = new THREE.Vector3(vertices[i], vertices[i + 1], vertices[i + 2]);
//
//         // Calcular a altura do vértice usando Perlin Noise
//         const distanceToMountain1 = distance(vertex, mountainCenter1);
//         const distanceToMountain2 = distance(vertex, mountainCenter2);
//         const perlinValue = noise.noise(distanceToMountain1 * 0.02, distanceToMountain2 * 0.02, 0);
//
//         // Ajustar a altura com base no valor do Perlin Noise
//         const height = perlinValue * 50;
//
//         // Atualizar a altura do vértice
//         vertices[i + 2] = height;
//     }
//
//     // Atualizar a geometria do terreno
//     terrain.geometry.attributes.position.needsUpdate = true;
//     terrain.geometry.computeVertexNormals();
//
//     scene.add(terrain);
// }
//
// export { createTerrain };

//NOVA TENTATIVA => A APAGAR???
// import * as THREE from 'https://unpkg.com/three@0.124.0/build/three.module.js';
//
// function createTerrain(scene) {
//     const width = 100;
//     const height = 100;
//     const amplitude = 10;
//     const frequency = 0.01;
//     const seed = 1;
//
//     // Cria um objeto THREE.BufferGeometry
//     const geometry = new THREE.BufferGeometry();
//
//     // Cria um vetor de posições
//     const positions = [];
//
//     // Itera sobre todos os pontos do terreno
//     for (let x = 0; x < width; x++) {
//         for (let y = 0; y < height; y++) {
//             // Calcula a altura do ponto
//             const height = amplitude * noise.perlin(x * frequency, y * frequency, seed);
//
//             // Adiciona o ponto à lista de posições
//             positions.push(x, y, height);
//         }
//     }
//
//     // Adiciona as posições à geometria
//     geometry.addAttribute("position", new THREE.BufferAttribute(positions, 3));
//
//     // Cria um objeto THREE.Mesh
//     const mesh = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial());
//
//     // Retorna o objeto THREE.Mesh
//     return mesh;
// }
// export { createTerrain};

/*

///VERSAO = 0.124
// Configurar cena
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Configurar geometria
const planeGeometry = new THREE.PlaneGeometry(10, 10, 64, 64);

// Criar uma função para gerar alturas usando Perlin Noise
const generateHeight = (width, height) => {
    const data = new Float32Array(width * height);
    const perlin = new THREE.PerlinNoise();

    for (let i = 0; i < data.length; i++) {
        const x = i % width;
        const y = Math.floor(i / width);

        data[i] = Math.abs(perlin.noise(x / 10, y / 10, 0));
    }

    return data;
};

const planeVertices = planeGeometry.attributes.position.array;
const planeHeights = generateHeight(65, 65);

// Ajustar a altura dos vértices do plano
for (let i = 0, j = 0, l = planeVertices.length; i < l; i++, j += 3) {
    planeVertices[j + 1] = planeHeights[i] * 2; // Multiplicando para ajustar a escala
}

// Configurar material
const planeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

// Adicionar plano à cena
scene.add(plane);

// Configurar posição da câmera
camera.position.z = 5;

// Configurar animação
const animate = function () {
    requestAnimationFrame(animate);

    // Rotacionar o plano para melhor visualização
    plane.rotation.x += 0.005;
    plane.rotation.y += 0.005;

    renderer.render(scene, camera);
};

// Iniciar animação
animate();
*/

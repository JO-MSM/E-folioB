import * as THREE from "https://unpkg.com/three@0.124.0/build/three.module.js";

console.log("Check oppening file: createTerrainGeneration.mjs");
//============================================================================

/*
function createTerrainGeneration(size, height, color, ) {
    /!* Para que a grelha apareça com os diferentes quadrados *!/
    const geometry = new THREE.PlaneGeometry(size, size);

    /!* Para criar a base do material de cor branca em modo default,
    mas com as cores desejadas para a creação do tabuleiro  *!/
    const material = new THREE.MeshBasicMaterial({
      color: color,
      side: THREE.DoubleSide,
      opacity: 0.60,
      transparent: true
      height: 0.1;
      size: [];

      // s......


    });


    return terrainGeneration;
}
*/

function createTerrainGeneration () {

    var terrainValues = [];
    var mult = 100;
    var xoff = 0;
    var yoff = 0;
    var inc = 0.01;

    function setup() {
        createCanvas(500, 500, WEBGL);
        angleMode(DEGREES);

        for (var y = 0; y < 60; y++) {
            terrainValues.push([]);
            xoff = 0;
            for (var x = 0; x < 60; x++) {
                terrainValues[y][x] = map(noise(xoff, yoff), 0, 1, -mult, mult);
                xoff = xoff + inc;
            }
            yoff = yoff + inc;
        }
    }

    function draw() {
        background(0);

        stroke(255);
        strokeWeight(0.5);
        noFill();

        rotateX(65);
        translate(-width / 2, -height / 2);
        for (var y = 0; y < 60; y++) {
            beginShape(TRIANGLE_STRIP);
            for (var x = 0; x < 60; x++) {
                vertex(x * 10, y * 10, terrainValues[y][y]);
                vertex(x * 10, (y + 1) * 10, terrainValues[y][x]);
            }
            endShape();
        }
    }
}


export { createTerrainGeneration };
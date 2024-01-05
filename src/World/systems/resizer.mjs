
console.log("Check oppening file: resizer.js");
//============================================================================


class resizer {
    constructor(container, camera, renderer) {
        /* Determina a frequencia com o que aspeto da "Câmara" corresponde às proporções
        do conteiner, na janela correspondente */
        camera.aspect = container.clientWidth / container.clientHeight;

        /* Actualiza a zona do espaço da função World, quer realmente se torna visível no ecran */
        camera.updateProjectionMatrix();

        /* Para que a imagem devolvida que se tem de corresponder, tenha o mesmo tamanho
    que o container onde este se encontra presente */
        renderer.setSize(container.clientWidth, container.clientHeight);

        /* Para determinar a frequência de actuzalização do pixel das imagens a apresentar
    independentemente do tipo de dispositivo */
        renderer.setPixelRatio(window.devicePixelRatio);
    }
}

export { resizer };
const campo_texto = document.querySelector("#cuadroTexto");
const campo_mensaje = document.querySelector("#mensaje");

const matriz_code = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],
    ["u","ufat"],
];

function btnencriptar() {
    const texto = encriptar(campo_texto.value);
    campo_mensaje.value = texto;
    document.getElementById("imagen").style.display = "none";
}

function encriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][0],matriz_code[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const texto = desencriptar(campo_texto.value);
    campo_mensaje.value = texto;
}

function desencriptar(fraseEncriptada) {
    for (let i = 0; i < matriz_code.length; i++) {
        if(fraseEncriptada.includes(matriz_code[i][1])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            )
        }
    }
    return fraseEncriptada;
}

const content = document.getElementById("mensaje");
const btn = document.getElementById('btncopiar');

btn.addEventListener('click', e => {
    content.select();
    document.execCommand('copy');
});
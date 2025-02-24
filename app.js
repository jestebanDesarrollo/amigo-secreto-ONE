// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputNombre = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let amigos = []

function agregarAmigo() {
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, Ingresa un nombre válido.");
        return ;
    }

    amigos.push(nombre);

    inputNombre.value = "";


};

function actualizarLista() {

}
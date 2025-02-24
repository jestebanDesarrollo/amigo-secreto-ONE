// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputNombre = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let reiniciarBtn = document.getElementById('reiniciarBtn')
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

    actualizarLista()

};

function actualizarLista() {
    listaAmigos.innerHTML = "";

    //Se crea para recorrer el array de amigos y agregar cada uno como un <li> en la lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo; //Se le asigna el nombre del amigo al texto <li>
        listaAmigos.appendChild(li);
    });
};

function sortearAmigo(){
    if (amigos.length === 0 ){
        alert("No hay amigos en la lista para sortear.")
        return;
    };

    //Limpiar lista de amigos 
    listaAmigos.innerHTML = "";

    let indexAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indexAleatorio];

    //Mostrar el resultado.
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSorteado}</strong></li>`;
<<<<<<< HEAD

    //Habilitar el boton de reinicio
    reiniciarBtn.disabled = false
};

function reiniciar(){
    amigos.length = 0;
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
    inputNombre.value = "";

    reiniciarBtn.disabled = true
=======
>>>>>>> a8a00ed0e5102f2cf2da77bb05fed92d01175b8f
};


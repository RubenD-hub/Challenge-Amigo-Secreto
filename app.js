// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// ********************************
// *   Declaración de Variables   *
// ********************************
let amigos = [];

// ********************************
// *   Declaración de Funciones   *
// ********************************

function agregarAmigo() {
  //Almacena el valor del campo
  let nombreAmigo = String(document.getElementById("amigo").value);
  //Evalúa el valor
  if (nombreAmigo == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    //Agrega el valor al array
    amigos.push(nombreAmigo);
    //Limpia el campo de entrada
    limpiarCampo("#amigo");
    //Imprime la lista de amigos
    imprimirLista();
  }
}

//Limpia campo de entrada
function limpiarCampo(elemento) {
  document.querySelector(elemento).value = "";
}

//Imprime lista de amigos ingresados
function imprimirLista() {
  let lista = document.querySelector("#listaAmigos");
  //Borra los elementos de la lista
  asignarTextoElemento('#listaAmigos', '');

  //Itera e imprime los nombres dentro del array amigos
  for (let i = 0; i < amigos.length; i++) {
    //Crea elemento de lista
    let li = document.createElement("li");
    //Asigna el valor que contendrá
    li.appendChild(document.createTextNode(amigos[i]));
    //Agrega el elemento de lista a la lista
    lista.appendChild(li);
  }
}

//Sortea un nombre del array amigos
function sortearAmigo() {
  //Obtiene el tamaño del array
  let numeroAmigos = amigos.length;
  //Evalúa la cantidad de elementos del array
  if (numeroAmigos != 0) {
    //Genera un numero aleatorio entre 0 y el tamaño del array -1
    numSorteado = Math.floor(Math.random() * numeroAmigos);
    //Imprime el amigo sorteado, utilizando el num. aleatorio como indice
    asignarTextoElemento(
      "#resultado",
      `El amigo secreto sorteado es: ${amigos[numSorteado]}`
    );
    //Borra los elementos de la lista
    asignarTextoElemento('#listaAmigos', '');
    amigos=[];
  } else {
    //En caso del tamaño del array sea 0
    alert("No has ingresado ningún amigo");
  }
}

//Asigna un texto a cierto elemento
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

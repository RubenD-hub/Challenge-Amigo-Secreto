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
    limpiarCampo();
    //Imprime la lista de amigos
    imprimirLista();
  }
}

//Limpia campo de entrada
function limpiarCampo() {
  document.querySelector("#amigo").value = "";
}

//Imprime lista de amigos ingresados
function imprimirLista() {
  let lista = document.querySelector("#listaAmigos");
  //Borra los elementos de la lista
  lista.innerHTML = "";

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

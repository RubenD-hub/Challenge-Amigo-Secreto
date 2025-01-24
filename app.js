// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declaración de Variables
let amigos = [];

// Declaración de Funciones

function agregarAmigo() {
  let nombreAmigo = String(document.getElementById("amigo").value);
  if (nombreAmigo == "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombreAmigo);
    console.log(amigos);
  }
}

function encriptar() {
  var frase = document.getElementById("textoEncriptado").value.toLowerCase();
  var textoEncriptado = frase.replace(/e/gim, "enter");
  var textoEncriptado = textoEncriptado.replace(/i/gim, "imes");
  var textoEncriptado = textoEncriptado.replace(/a/gim, "ai");
  var textoEncriptado = textoEncriptado.replace(/o/gim, "ober");
  var textoEncriptado = textoEncriptado.replace(/u/gim, "ufat");
  document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
  document.getElementById("botonCopiar").style.display = "show";
  document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptar() {
  var frase = document.getElementById("textoEncriptado").value.toLowerCase();
  var textoEncriptado = frase.replace(/enter/gim, "e");
  var textoEncriptado = textoEncriptado.replace(/imes/gim, "i");
  var textoEncriptado = textoEncriptado.replace(/ai/gim, "a");
  var textoEncriptado = textoEncriptado.replace(/ober/gim, "o");
  var textoEncriptado = textoEncriptado.replace(/ufat/gim, "u");
  document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}

function copiar() {
  var contenido = document.querySelector("#textoDesencriptado");
  contenido.select();
  document.execCommand("copy");
}

function convertirAMinusculas(input) {
  input.value = input.value.toLowerCase();
}

function eliminarCaracteresEspeciales(input) {
  input.value = input.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

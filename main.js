var textInput = document.querySelector("#input-texto");
var outInput = document.querySelector(".texto-saida");


function criptografar(){

  var texto = textInput.value;

  var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

  
  document.getElementById('output').innerHTML = '<textarea readonly id="output-texto">' + resultCripto + 
  '</textarea>' + ' <button id="botao-copiar" onclick="copiar()">Copiar</button> '
}

function descriptografar(){

    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  
    document.getElementById('output').innerHTML = '<textarea readonly id="output-texto"> ' + resultDescripto + 
    '</textarea>' + ' <button id="botao-copiar"  onclick="copiar()">Copiar</button> '
}

function copiar() {
    var textoCop = document.getElementById('output-texto');
  
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
    window.location.reload();
}  
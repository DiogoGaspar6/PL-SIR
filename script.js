window.addEventListener('load', function(){
  mostrarChave()
})

function gerarNumero(min, max){
  return Math.floor(Math.random() * (max - min) + min)
}


function gerarChave(){
  let numeros = []
  let estrelas = []
  let chaveFinal

  for (let i = 0; i < 5; i++) {
    numeros.push(gerarNumero(1, 50)) 
  }

  for (let i = 0; i < 2; i++) {
    estrelas.push(gerarNumero(1, 12))
  }

  var numerosText = numeros.join(", ")
  var estrelasText = estrelas.join(", ")
  chaveFinal = "Numeros: " + numerosText + " Estrelas: " + estrelasText
  console.log("Chave: " + chaveFinal)
  return chaveFinal
}

function gerarNovaChave(){
  const chave = document.getElementById("numeroschave")
  chave.innerText = ""
  mostrarChave()
}
function mostrarChave(){
  const chave = document.getElementById("numeroschave")
  chave.innerText = gerarChave()
}
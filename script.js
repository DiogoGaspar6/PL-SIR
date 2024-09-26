window.addEventListener('load', function () {
  mostrarChave()
})

function gerarNumero(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function gerarEstrela(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function gerarNumeroChave() {
  let numeros = []
  let n = 5

  let temp = 0;
  for (let i = 0; i < n; i++) {
    temp = gerarNumero(1, 50);
    while(numeros.includes(temp)){
      temp = gerarNumero(1, 50);
    }
    numeros.push(temp)
  }
  var numerosText = numeros.join(", ")
  return "Numeros: " + numerosText
}

function gerarEstrelasChave() {
  let estrelas = []
  let n = 2
  let temp = 0

  for (let i = 0; i < n; i++) {
    temp = gerarEstrela(1,12)
    while(estrelas.includes(temp)){
      temp = gerarEstrela(1,12)
    }
    estrelas.push(temp)
  }

  var estrelasText = estrelas.join(", ")

  return "Estrelas: " + estrelasText
}

function gerarNovaChave() {
  mostrarChave()
}
function mostrarChave() {
  const numerochave = document.getElementById("numeroschave")
  const estrelasChave = document.getElementById("estrelaschave")
  numerochave.innerText = gerarNumeroChave()
  estrelasChave.innerText = gerarEstrelasChave()
}
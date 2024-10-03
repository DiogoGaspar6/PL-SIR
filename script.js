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
  return numeros
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
  return estrelas
}

function gerarNovaChave() {
  mostrarChave()
}
function mostrarChave() {
  const numerochave = document.getElementById("numeroschave")
  const estrelasChave = document.getElementById("estrelaschave")

  const numeros = gerarNumeroChave()
  const estrelas = gerarEstrelasChave()

  numerochave.innerText = "Numeros: " + numeros.join(", ")
  estrelasChave.innerText = "Estrelas: " + estrelas.join(", ")

  const chave = {
    numeros: numeros,
    estrelas: estrelas
  }

  const chaveJSON = JSON.stringify(chave)
  console.log(chaveJSON)

  fetch('http://localhost:3000/save', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body:{
      body: chaveJSON
    }
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('[ERROR]' + error))
}

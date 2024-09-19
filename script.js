function gerarNumero(min, max){
  key.innerText = gerarChave()
  return Math.random() * (max - min) + min
}


function gerarChave(){
  let numeros
  let estrelas
  let chaveFinal

  for (let i = 0; i < 5; i++) {
    numeros += gerarNumero(1, 50); 
  }

  for (let i = 0; i < 2; i++) {
    estrelas += gerarNumero(1, 12);
  }

  return
}
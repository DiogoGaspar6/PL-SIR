const express = require('express');
const cors = require('cors')
const fs = require('fs');
const app = express();
const port = 3000;

app.use(cors())
app.use(express.json())

app.post('/save', (req, res) => {
  const data = req.body
  fs.writeFile('chave.json', JSON.stringify(data, null, 2), (error) => {
    if(error){
      res.status(500).send('[ERROR] Não conseguiu salvar o ficheiro json')
    }else{
      res.send('[SUCESS] Ficheiro JSON salvo com sucesso!')
    }
  })
})

app.listen(port, ()=> {
  console.log(`Server aberto em  http://localhost:${port}`)
})
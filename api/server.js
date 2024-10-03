const express = require('express');
const cors = require('cors');
const app = express();

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generateEuromilhoesKey = (req, res) => {
    let numeros = [];
    let estrelas = [];

    for (let i = 0; i < 5; i++) {
        let numero = generateRandomNumber(1, 51);

        while (numeros.includes(numero)) {
            numero = generateRandomNumber(1, 51);
        }

        numeros.push(numero);
    }

    for (let i = 0; i < 2; i++) {
        let numero = generateRandomNumber(1, 13);

        while (estrelas.includes(numero)) {
            numero = generateRandomNumber(1, 13);
        }

        estrelas.push(numero);
    }

    return res.status(200).json({
        "chave": {
            "numeros": numeros,
            "estrelas": estrelas
        }
    });
}

app.use(cors());
app.get('/generate-key', generateEuromilhoesKey);

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = {
    generateEuromilhoesKey
}
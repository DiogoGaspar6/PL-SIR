const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.static(__dirname))
app.use(cors());
app.get('/', (req, res) => {
    res.sendFile(__dirname + '../index.html');
})

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const generateEuromilhoesKey = (req, res) => {
    let numbers = [];
    let stars = [];

    for (let i = 0; i < 5; i++) {
        let number = generateRandomNumber(1, 51);

        while (numbers.includes(number)) {
            number = generateRandomNumber(1, 51);
        }

        numbers.push(number);
    }

    for (let i = 0; i < 2; i++) {
        let number = generateRandomNumber(1, 13);

        while (stars.includes(number)) {
            number = generateRandomNumber(1, 13);
        }

        stars.push(number);
    }

    return res.status(200).json({
        "chave": {
            "numeros": numbers,
            "estrelas": stars
        }
    });
}
app.get('/generate-key', generateEuromilhoesKey);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = {
    generateEuromilhoesKey
}
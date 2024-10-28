const apiURL = "/"

window.addEventListener('load', function() {
    updateHtml();
})

function updateHtml() {
    let numbers = document.getElementById("numeroschave");
    let stars = document.getElementById("estrelaschave");
    getEuromilhoesKey().then(json => {
        numbers.innerHTML = json.chave.numeros;
        stars.innerHTML = json.chave.estrelas;
    });
}

async function getEuromilhoesKey() {
    let response = await fetch(apiURL + "generate-key");
    let json = await response.json();
    return json;
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
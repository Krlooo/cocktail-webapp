const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const ingredientsDiv = document.getElementById("ingredients");
const tutorialDiv = document.getElementById("tutorial");
const nameDiv = document.getElementById("name");
const img = document.getElementById('img');


window.onload = function () {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            image = data.drinks[0].strDrinkThumb
            const drink = data.drinks[0];
            img.src = image;
            nameDiv.innerText = (drink.strDrink)
            tutorialDiv.innerText = (drink.strInstructions)
            for (let property in drink) {
                // Verificar si la propiedad es un ingrediente
                if (property.startsWith('strIngredient') && drink[property] !== null) {
                    ingredientsDiv.innerHTML = ingredientsDiv.innerHTML + "<p>" + drink[property] + "</p>"
                    // Imprimir el valor del ingrediente
                }
            }
        });


};
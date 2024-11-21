let section_detaller = document.querySelector(".section_detaller")
const url = 'https://dummyjson.com/recipes'
console.log(section_detaller)


fetch(url)
.then(function(response) {
    return response.json()
  })
  .then(function(data) {
    console.log(data);
    let recipeDetails = `
      <article class="art_detalle">
        <h1 class="recipe-title">${data.name}</h1>
        <img src="${data.image}" alt="${data.name}" class="recipe-image">
        <p class="recipe-cooking-time">Tiempo de cocción: ${data.cookingTime} minutos</p>
        <h2>Instrucciones de preparación:</h2>
        <p class="recipe-instructions">${data.instructions}</p>
        <h3>Categorías:</h3>
        <ul class="recipe-categories">
    `;
    for (let i = 0; i < data.category.length; i++) {
      recipeDetails += `<li><a href="./categoria.html?categoria=${data.category[i]}">${data.category[i]}</a></li>`;
    }
    recipeDetails += `
        </ul>
      </article>
    `;
    section_detaller.innerHTML = recipeDetails;
  })
  .catch(function(error) {
    console.log("El error es: " + error);
  })

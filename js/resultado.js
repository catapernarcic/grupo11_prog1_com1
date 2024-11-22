let search_results = document.querySelector(".search-results")

let queryString = location.search;

let queryStringObj = new URLSearchParams(queryString);

let q = queryStringObj.get('q');
console.log(queryString);
console.log("Valor de q:", q);

let url = `https://dummyjson.com/recipes/search?q=${q}`



fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data);
    
    let results = "";
    for (let i = 0; i < data.recipes.length; i++){
        results +=
    
        `<article class="art_receta">
        <img src=${data.recipes[i].image} alt="imagen" class="img_receta">
        <h2>${data.recipes[i].name}</h2>
        <p>Nivel de dificultad: ${data.recipes[i].difficulty} </p>
        <p> <a href="./detalle_receta.html?id=${data.recipes[i].id}">Detalle</a></p>
        </article>`;
    
      };     

    search_results.innerHTML = results; 
})
.catch(function(error) {
    console.log("Error: " + error);
  })
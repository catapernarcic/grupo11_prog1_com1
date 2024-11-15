let section_main = document.querySelector(".section_main")
let url = 'https:/dummyjson.com/recipes'

console.log(section_main)

fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let characters = "";
  for (let i = 0; i < data.results.length; i++){ // da error algo del length
    results +=    

    `<article>
    <img src=${data.results[i].image} alt="imagen">
    <h2>${data.results[i].name}</h2>
    <p>Nivel de dificultad: ${data.results[i].difficulty} </p>
    <p> <a href="./detalle_receta.html?id=${data.results[i].id}">Detalle</a></p>
    </article>`

  };

})
.catch(function(error) {
  console.log("Error: " + error);
})


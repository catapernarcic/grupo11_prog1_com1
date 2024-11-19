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
  section_main.innerHTML = characters;
  for (let i = 0; i < 10; i++){ 
    characters=
    `<article class="art_receta">
    <img src=${data.recipes[i].image} alt="imagen" class="img_receta">
    <h2>${data.recipes[i].name}</h2>
    <p>Nivel de dificultad: ${data.recipes[i].difficulty} </p>
    <p> <a href="./detalle_receta.html?id=${data.recipes[i].id}">Detalle</a></p>
    </article>`;
    section_main.innerHTML += characters;
  };

})
.catch(function(error) {
  console.log("Error: " + error);
})


 
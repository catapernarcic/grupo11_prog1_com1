let section_main = document.querySelector(".section_main")
let url = 'https:/dummyjson.com/recipes'
let numero = 10

console.log(section_main)
cargar_mas();
function cargar_mas(){
fetch(url)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let characters = "";
  section_main.innerHTML = characters;
  for (let i = 0; i < numero; i++){ 
    characters=
    `<article class="art_receta">
    <img src=${data.recipes[i].image} alt="imagen" class="img_receta">
    <h2>${data.recipes[i].name}</h2>
    <p>Nivel de dificultad: ${data.recipes[i].difficulty} </p>
    <p class="data-recipie"> <a href="./detalle_receta.html?id=${data.recipes[i].id}">Ir a detalle</a></p>
    </article>`;
    section_main.innerHTML += characters;
  };

})
.catch(function(error) {
  console.log("Error: " + error);
})
}

  let boton = document.querySelector("#cargar");
  let section = document.querySelector(".section_main");
  let pagina = 0; 

  boton.addEventListener("click", function () {
      pagina += 10;
      console.log("Cargando recetas desde la página:", pagina);
      fetch(`https://dummyjson.com/recipes?limit=10&skip=${pagina}`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
              
              console.log(data); 
              if (data.recipes && data.recipes.length > 0) {
                  data.recipes.forEach(recipe => {
                      section.innerHTML += `
                          <article class="art_receta">
                              <img class="img_receta" src="${recipe.image}" alt="${recipe.name}">
                              <h3>${recipe.name}</h3>
                              <p>Dificultad: ${recipe.difficulty}</p>
                              <a class="data-recipie" href="detalle_receta.html?id=${recipe.id}">Ir a detalle</a>
                          </article>
                      `;
                  });
                  pagina += 10;
              } else {
                console.log("No hay más recetas para cargar.");
                boton.style.display = "none";
            }
          })
          .catch(error => {
              console.error("Error al cargar recetas:", error);
          });
  });

let section_main = document.querySelector(".section_main")
let url = 'https:/dummyjson.com/recipes'
let numero = 10


let search = document.querySelector("#search"); 
let campo = document.querySelector("#boton_texto"); 
console.log(search);

search.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let validar = true;
    if (campo.value == "") {
        alert("El campo no puede estar vacío");
        validar = false; 
    }
    if (campo.value.length < 3) {
        alert("El campo debe tener más de 3 caracteres");
        validar = false; 
    }
    if (validar) {
        search.submit(); 
    }
}); 


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
    <p class="data-recipie"> <a class="data-recipiea" href="./detalle_receta.html?id=${data.recipes[i].id}">Ir a detalle</a></p>
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
  let pagina = 10; 

  boton.addEventListener("click", function () {
    if (pagina >= 30) {
      console.log("Se han cargado todas las recetas disponibles.");
      return;
  }
      console.log("Cargando recetas desde la página:", pagina);
      fetch(`https://dummyjson.com/recipes?limit=10&skip=${pagina}`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
              
              console.log(data); 
              for (let i = 0; i < data.recipes.length; i++) {
                let recipe = data.recipes[i];
                section.innerHTML += `
                <article class="art_receta">
                    <img class="img_receta" src="${recipe.image}" alt="${recipe.name}">
                    <h3>${recipe.name}</h3>
                    <p>Dificultad: ${recipe.difficulty}</p>
                    <p class="data-recipie"><a  href="detalle_receta.html?id=${recipe.id}">Ir a detalle</a> </p>
                </article>
                `;
                
              }
              pagina += 10;
          })
          .catch(error => {
              console.error("Error al cargar recetas:", error);
          });
        });

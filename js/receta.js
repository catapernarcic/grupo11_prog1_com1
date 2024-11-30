let section_detaller = document.querySelector(".section_detaller");

let querysting = location.search; 
let queryStringobj = new URLSearchParams(querysting); 
let idusuario = queryStringobj.get("id");

let url = `https://dummyjson.com/recipes/${idusuario}`;

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
        <p class="recipe-cooking-time">Tiempo de cocción: ${data.cookTimeMinutes || "N/A"} minutos</p>
        <h2>Instrucciones de preparación:</h2>
        <ul class="recipe-instructions">
    `;

    for (let instruction of data.instructions) {
      recipeDetails += `<li>${instruction}</li>`;
    }

    recipeDetails += `
        </ul>
        <h3>Etiquetas:</h3>
        <ul class="recipe-tags">
    `;

    if (data.tags && data.tags.length > 0) {
      for (let tag of data.tags) {
        recipeDetails += `<li><a href="./detalle_categoria.html?category=${tag}">${tag}</a></li>`;
      }
    } else {
      recipeDetails += `<li>No hay etiquetas disponibles</li>`;
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

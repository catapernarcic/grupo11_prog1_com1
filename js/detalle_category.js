let detalle_categories = document.querySelector(".detalle_categories");
const queryParams = new URLSearchParams(window.location.search);
const category = queryParams.get("category"); 

if (category) {
    let url = `https://dummyjson.com/recipes/tag/${category}`; 
console.log(category);

    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);  

            
            if (data.recipes && data.recipes.length > 0) {
                let recipesHTML = `<ul class="ulp">`;
                
                for (let recipe of data.recipes) {
                    recipesHTML += `<article class="detll_cate">
                        <h2 class="h1_detalle">${recipe.name}</h2>
                        <img class="img_detalle" src="${recipe.image}" alt="${recipe.name}">
                        <p><strong>Ingredientes:</strong> ${recipe.ingredients} </p>
                        <p><strong>Dificultad:</strong> ${recipe.difficulty}</p>
                        <p><strong>Tiempo de cocción:</strong> ${recipe.cookTimeMinutes} minutos</p>
                        <p><strong>Cantidad de porciones:</strong> ${recipe.servings}</p>
                    </article>`;
                }
                recipesHTML += `</ul>`;
                detalle_categories.innerHTML = recipesHTML;  
            } else {
                detalle_categories.innerHTML = "<p>No se encontraron recetas para esta categoría.</p>";
            }
        })
        .catch(function(error) {
            console.log("Error al obtener las recetas:", error);
        });
} 
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
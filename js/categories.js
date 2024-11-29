let categoriasht = document.querySelector(".categoriasht");

let url = "https://dummyjson.com/recipes/tags";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data); 

        
        if (data && data.length > 0) {
            let categoriesHTML = "<ul>";
            
           
            for (let category of data) {
                categoriesHTML += `<li class="listacat" ><a class="categA" href="./detalle_categoria.html?category=${category}">${category} /</a></li>`;
            }
            categoriesHTML += "</ul>";

            
            categoriasht.innerHTML = categoriesHTML;  
        } 
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });
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

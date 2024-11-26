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
                categoriesHTML += `<li><a href="./detalle_categoria.html?category=${category}">${category}</a></li>`;
            }
            categoriesHTML += "</ul>";

            
            categoriasht.innerHTML = categoriesHTML;  
        } 
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });

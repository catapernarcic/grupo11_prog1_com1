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
    <p class="data-recipie"> <a href="./detalle_receta.html?id=${data.recipes[i].id}">Detalle</a></p>
    </article>`;
    section_main.innerHTML += characters;
  };

})
.catch(function(error) {
  console.log("Error: " + error);
})
}


let boton = document.querySelector("#cargar")
let pagina = 0

boton.addEventListener("click", function(){
    console.log(pagina);
    pagina +=10
    console.log(pagina);

    fetch(`https://dummyjson.com/recipes?limit=10&skip=${pagina}`)
      .then(function(res){
       return res.json()
    })
    .then(function(data){
        console.log(data)


        for(let i = 0; i < 10; i++){
            section.innerHTML += `
                <article>
                    <img src="${data.recipes[i].image}" alt="">
                    <div>
                        <h3>${data.recipes[i].name}</h3>
                        <p>${data.recipes[i].difficulty}</p>
                        <a href="detalle-receta.html?id=${data.recipes[i].id}">Ir a detalle</a>
                    </div>
                </article>
            `
        }
    })
})



 
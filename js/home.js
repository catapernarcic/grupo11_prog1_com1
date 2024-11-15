fetch('')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let characters = "";
  for (let i = 0; i < data.results.length; i++){


    `<article>
    <img src="" alt="">
    <h2></h2>
    <p>Nivel de dificultad: </p>
    <p> <a href="./detalle_receta.html">Detalle</a></p>
    </article>`

  };

})
.catch(function(error) {
  console.log("Error: " + error);
})


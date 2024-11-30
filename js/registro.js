let form = document.querySelector("#registerForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
  
      
    let emailError = document.querySelector("#emailError");
    let passwordError = document.querySelector("#passwordError");
  
    let isValid = true;
  
      
    if (email.value === "") {
      emailError.innerHTML = "Por favor complete el campo";
      emailError.style.display = "block";
      
      isValid = false;
    }
  
      
    if (password.value === "") {
      passwordError.innerHTML = "Por favor complete el campo";
      errorpassw.style.display = "block";
      
      isValid = false;
    }
  
     
    if (isValid) {
      window.location.href = "login.html";
    }
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
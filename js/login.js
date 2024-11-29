let email = document.querySelector("#email");
let password = document.querySelector("#password");
let formulario = document.querySelector("#form_login");
let erroremail = document.querySelector(".email2");
let errorpassw = document.querySelector(".password2");

formulario.addEventListener("submit", function (event) {
    event.preventDefault(); 

    let validar = true; 


    if (email.value === "") {
        erroremail.style.display = "block";
        erroremail.innerText = "El email está vacío";
        alert("El email está vacío");
        validar = false;
    } 


    if (password.value === "") {
        errorpassw.style.display = "block";
        errorpassw.innerText = "La contraseña está vacía";
        alert("La contraseña está vacía");
        validar = false;
    } 

    if (validar) {
        formulario.submit();
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

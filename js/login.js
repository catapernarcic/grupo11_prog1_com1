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
        erroremail.innerText = "El campo está vacío";
        validar = false;
    } 


    if (password.value === "") {
        errorpassw.style.display = "block";
        errorpassw.innerText = "El campo está vacío";
        validar = false;
    } 

    if (validar) {
        formulario.submit();
    }
});

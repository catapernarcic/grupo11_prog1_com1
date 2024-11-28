let form = document.querySelector("#registerForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
  
      
    let emailError = document.querySelector("#emailError");
    let passwordError = document.querySelector("#passwordError");
  
    let isValid = true;
  
      
    if (email == "") {
      emailError.innerHTML = "Por favor complete el campo";
      isValid = false;
    }
  
      
    if (password == "") {
      passwordError.innerHTML = "Por favor complete el campo";
      isValid = false;
    } 
  
     
    if (isValid) {
      window.location.href = "login.html";
    }
});


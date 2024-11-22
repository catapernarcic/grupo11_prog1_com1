document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value.trim();
  
      
      const emailError = document.getElementById("emailError");
      const passwordError = document.getElementById("passwordError");
  
      let isValid = true;
  
      
      if (!email) {
        emailError.textContent = "Por favor complete el campo";
        isValid = false;
      } else {
        emailError.textContent = "";
      }
  
      
      if (!password) {
        passwordError.textContent = "Por favor complete el campo";
        isValid = false;
      } else {
        passwordError.textContent = "";
      }
  
     
      if (isValid) {
        window.location.href = "login.html";
      }
    });
  });
  
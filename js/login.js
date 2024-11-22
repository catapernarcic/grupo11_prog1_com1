let email = document.querySelector("#email")
let password = document.querySelector("#password")

let erroremail = document.querySelector(".email")
let errorpassw = document.querySelector(".password")

contact_form.addEventListener('submit', function(event){
    let validar = true
    event.preventDeafult();
    if(email.value == ""){
        erroremail.style.display = "block"  
        erroremail.innerText = "El campo esta vacio"   
        let validar = false
    }
    if(password.value == ""){
        errorpassw.style.display = "block" 
        errorpassw.innerText = "El campo esta vacio" 
        let validar = false    
    }
    if(validar){
        form.submit()
    }
    
})
/*Validar Inicio Sesion */
const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e=>{
  e.preventDefault()
  let warnings =""
  let entrar = false
  let regexEmail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  parrafo.innerHTML = ""
  if(nombre.value.length <6){
     warnings += `El nombre debe contener al menos 6 caracteres <br>`
     entrar = true
  }
  if(!regexEmail.test(email.value)){
    warnings += `El mail no es valido <br>`
    entrar = true
}
if(password.value.length < 8){
    warnings += `La contraseña debe contener al menos 8 caracteres <br>`
    entrar= true
}
if(entrar){
    parrafo.innerHTML = warnings
} else{
    parrafo.innerHTML = "Bienvenido!"
}
})
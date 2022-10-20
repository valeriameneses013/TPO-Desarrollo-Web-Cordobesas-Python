/* VALIDACION DE FORMULARIO */

document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("form").addEventListener('submit', validarFormulario); 
 });
 
 function validarFormulario(evento) {
   evento.preventDefault();
   var nombre = document.getElementById('nombre').value;
   if(nombre.length == 0) {
     alert('No ingresaste tu Nombre');
     return;
   }
   var Apellido = document.getElementById('Apellido').value;
   if (Apellido.length == 0 ) {
     alert('No ingresaste tu Apellido');
     return;
   }
   var Edad = document.getElementById('Edad').value;
   if (Edad.length == 0 ) {
     alert('No ingresaste tu Edad');
     return;
   }
   var Fecha = document.getElementById('Fecha').value;
   if (Fecha.length == 0 ) {
     alert('No ingresaste tu Fecha de nacimiento');
     return;
   }
   var Mail = document.getElementById('Mail').value;
   if (Mail.length == 0 ) {
     alert('No ingresaste tu E-mail');
     return;
   }
   var Tel = document.getElementById('Tel').value;
   if (Tel.length == 0 ) {
     alert('No ingresaste tu teléfono');
     return;
   }
    var PassW = document.getElementById('PassW').value;
   if (PassW.length == 0 ) {
     alert('No ingresaste tu contraseña');
     return;
   }
   this.submit();
 }

 /*ACA NO SE TENDRIAN QUE SINCRONIZAR LAS DOS TAREAS? */


 /* ENVIO DE FORMULARIO CON FORMSPREE */

 const $form = document.querySelector("#form")

$form.addEventListener("submit", handleSubmit)

 async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            "Accept": "application/json"
        }
     })
        if(response.ok){
        this.reset()
        alert("Gracias por registrarse")
     }  
}

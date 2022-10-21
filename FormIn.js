
/* VALIDACION DE FORMULARIO */

document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("form").addEventListener('submit', validarFormulario); 
 });
 
 function validarFormulario(evento) {
   evento.preventDefault();
   var Nombre = document.getElementById('Nombre').value;
   if(Nombre.length == 0) {
     alert('No ingresaste tu nombre');
     return;
   }
   var Email = document.getElementById('Email').value;
   if (Email.length == 0 ) {
     alert('No ingresaste tu email');
     return;
   }
   var Teléfono = document.getElementById('Teléfono').value;
   if (Teléfono == 0 ) {
     alert('No ingresaste tu teléfono');
     return;
   }
   var Mensaje = document.getElementById('Mensaje').value;
   if (Mensaje.length == 0 ) {
     alert('No ingresaste tu mensaje');
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
        alert("Gracias por enviar su mensaje")
     }  
}

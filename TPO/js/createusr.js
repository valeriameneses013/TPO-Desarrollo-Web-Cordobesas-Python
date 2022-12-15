function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let a = document.getElementById("txtApellido").value
    let e = document.getElementById("txtEdad").value
    let fn = document.getElementById("txtFecNac").value
    let m = document.getElementById("txtMail").value
    let t = document.getElementById("txtCelular").value 
    let c = document.getElementById("txtClave").value
    let im = document.getElementById("txtImagen").value
    
 
    let usuario = {
        nombre: n,
        apellido: a,
        edad: e,
        fecNac: fn,
        mail: m,
        celular: t,
        clave: c,
        imagen: im
    }
    let url = "http://localhost:5000/usuarios"
    var options = {
        body: JSON.stringify(usuario),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "../../index.html";
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
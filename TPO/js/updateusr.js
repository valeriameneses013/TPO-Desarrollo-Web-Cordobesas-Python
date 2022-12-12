var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
document.getElementById("txtNombre").value = decodeURIComponent(parts[1][1])
document.getElementById("txtApellido").value = decodeURIComponent(parts[2][1])
document.getElementById("txtEdad").value = decodeURIComponent(parts[3][1])
document.getElementById("txtFecNac").value = decodeURIComponent(parts[4][1])
document.getElementById("txtMail").value = decodeURIComponent(parts[5][1])
document.getElementById("txtCelular").value = decodeURIComponent(parts[6][1])
document.getElementById("txtClave").value = decodeURIComponent(parts[7][1])

 
function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let a = document.getElementById("txtApellido").value
    let e = document.getElementById("txtEdad").value
    let fn = document.getElementById("txtFecNac").value
    let m = document.getElementById("txtMail").value
    let t = document.getElementById("txtCelular").value 
    let c = document.getElementById("txtClave").value
    let usuario = {
        nombre: n,
        apellido: a,
        edad: e,
        fecNac: fn,
        mail: m,
        celular: t,
        clave: c
    }
    let url = "http://localhost:5000/usuarios/"+id
    var options = {
        body: JSON.stringify(usuario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "../../index.html"
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
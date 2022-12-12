var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
document.getElementById("txtNombre").value = decodeURIComponent(parts[1][1])
document.getElementById("txtDias").value = decodeURIComponent(parts[2][1])
document.getElementById("txtHorario").value = decodeURIComponent(parts[3][1])
document.getElementById("txtModalidad").value = decodeURIComponent(parts[4][1])
document.getElementById("txtCosto").value = decodeURIComponent(parts[5][1])
document.getElementById("txtDuracion").value = decodeURIComponent(parts[6][1])

 
function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let di = document.getElementById("txtDias").value
    let h = document.getElementById("txtHorario").value
    let m = document.getElementById("txtModalidad").value
    let c = parseFloat(document.getElementById("txtCosto").value)
    let du = parseInt(document.getElementById("txtDuracion").value)
   
    let materia = {
        nombre: n,
        dias: di,
        horario: h,
        modalidad: m,
        costo: c,
        duracion: du
    }
    let url = "http://localhost:5000/materias/"+id
    var options = {
        body: JSON.stringify(materia),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
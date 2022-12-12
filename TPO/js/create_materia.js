function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let di = document.getElementById("txtDias").value
    let h = document.getElementById("txtHorario").value
    let m = document.getElementById("txtModalidad").value
    let c = document.getElementById("txtCosto").value
    let du = document.getElementById("txtDuracion").value 
       
 
    let materia = {
        nombre: n,
        dias: di,
        horario: h,
        modalidad: m,
        costo: c,
        duracion: du,
    }
    let url = "http://localhost:5000/materias"
    var options = {
        body: JSON.stringify(materia),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
 
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar" )
            console.error(err);
        })
}
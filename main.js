let url="./opiniones.json"
let datos = [];
fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data)
        datos = data.arreglo
        console.log(datos)
        


        let cad = `<div class="container">`

        for (opinion of datos) {
            cad += `
            <div class="tarjeta">
                <img src="${opinion.imagen}" alt="${opinion.nombre}">
                <div class="cuerpo">
                    <p>${opinion.opinion}</p> <br>
                    <h4>${opinion.nombre}  ${opinion.apellido}</h4>
                 </div>
            </div>
            `
        }
        cad += `</div>
        `
        console.log(cad)
        document.getElementById("tarjetas").innerHTML = cad;
    }
    );
let url="https://mocki.io/v1/b3649a05-4111-4686-bc00-fc2b5e0f97a7"
let datos = [];
fetch(url)
    .then(response => response.json())
    .then(data => {

        console.log(data)
        datos = data
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
    
    /* EMPIEZA HEADER */

    var x = document.getElementsByClassName("hlink")
    x[0].innerHTML = ` 
    <a href="../index.html#Inicio">INICIO</a>
    `
    var x = document.getElementsByClassName("hlink")
    x[1].innerHTML = ` 
    <a href=" ../index.html#Materias">MATERIAS</a>
    `
    var x = document.getElementsByClassName("hlink")
    x[2].innerHTML = ` 
    <a href="../index.html#Profesores">PROFESORES</a>
    `
    var x = document.getElementsByClassName("hlink")
    x[3].innerHTML = ` 
    <a href="../index.html#Contacto">CONTACTO</a>
    `
     /* TERMINA HEADER */

     /* EMPIEZA FOOTER */

     var x = document.getElementsByClassName("flink")
     x[0].innerHTML = `
     <a href="./index.html#Inicio">INICIO</a>
     `
    
     var x = document.getElementsByClassName("flink")
     x[1].innerHTML = `
     <a href="./index.html#Materias">MATERIAS</a>
     `
     
     var x = document.getElementsByClassName("flink")
     x[2].innerHTML = `
     <a href="./index.html#Profesores">PROFESORES</a>
     `
     
     var x = document.getElementsByClassName("flink")
     x[3].innerHTML = ` 
     <a href="./index.html#Contacto">CONTACTO</a>
     `

     var x = document.getElementsByClassName("redes")
     x[0].innerHTML=`
     <a target="_blank" href="https://facebook.com"
     ><img src="./imagenes/facebook.png" alt="facebook"
     /></a>
     `

     var x = document.getElementsByClassName("redes")
     x[1].innerHTML=`
     <a target="_blank" href="https://instagram.com"
     ><img src="./imagenes/instagram.png" alt="instagram"
     /></a>
     `
     var x = document.getElementsByClassName("redes")
     x[2].innerHTML=`
     <a target="_blank" href="https://whatsapp.com"
     ><img src="./imagenes/whatsapp.png" alt="whatsapp"
    /></a>
     `
     var x = document.getElementsByClassName("redes")
     x[3].innerHTML=`
     <a target="_blank" href="https://twitter.com"
     ><img src="./imagenes/gorjeo.png" alt="twitter"
    /></a>
     `
    /* TERMINA FOOTER */

    
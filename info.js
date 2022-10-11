/* INFORMACION */

var data= [
{
    "id": 1,
    "name": "Matemática",
    "day": "Lunes, Miércoles y Viernes",
    "hour": "Mañana y tarde",
    "type": "Virtual",
    "price": "$500 por 1:30hs"
},
{
    "id": 2,
    "name": "Química",
    "day": "Martes y Jueves",
    "hour": "Tarde",
    "type": "Presencial",
    "price": "$700 por 1:30hs"
},
{
    "id": 3,
    "name": "Física",
    "day": "Miércoles y sábados",
    "hour": "Mañana y tarde",
    "type": "Virtual",
    "price": "$500 por 1:30hs"
},
{
    "id": 4,
    "name": "Universidad",
    "day": "Todos los días",
    "hour": "Tarde",
    "type": "Presencial",
    "price": "$1500 por 1:30hs"
},
{
    "id": 5,
    "name": "Inglés",
    "day": "Martes y Viernes",
    "hour": "Mañana y tarde",
    "type": "Presencial o Virtual",
    "price": "$500 por 1:30hs"
},
{
    "id": 6,
    "name": "Lengua",
    "day": "Todos los días",
    "hour": "Por la tarde",
    "type": "Presencial o Virtual",
    "price": "$400 por 1:30hs"
},

]

/*FUNCION =RICK&MORTY */

let cad=`<div class="container">`
for(materia of data){
    cad+=`<div class="tarjeta">
     <h3>  ${materia.name}</h3>
     <div class="cuerpo">
        <p>Días: ${materia.day}</p>
        <p>Horario: ${materia.hour}</p>
        <p>Modalidad ${materia.type}</p>
        <p>Valor: ${materia.price}</p>   
        <button class="anotar"></button>
     </div> 

    </div>    
    `
}
cad+=` </div> `
console.log(cad)
document.getElementById("materias").innerHTML=cad


/* FUNCION BOTON - REVISAR */
var x = document.getElementsByClassName("anotar")
x[0].innerHTML = ` 
<a href="./registro.html" target="_blank">INSCRIBIRSE</a>
 `
 
var x = document.getElementsByClassName("anotar")
x[1].innerHTML = ` 
<a href="./registro.html" target="_blank">INSCRIBIRSE</a>
`   

var x = document.getElementsByClassName("anotar")
x[2].innerHTML = ` 
<a href="./registro.html" target="_blank">INSCRIBIRSE</a>
`
 
var x = document.getElementsByClassName("anotar")
x[3].innerHTML = ` 
<a href="./registro.html" target="_blank">INSCRIBIRSE</a>
`   
var x = document.getElementsByClassName("anotar")
x[4].innerHTML = ` 
<a href="./registro.html" target="_blank">INSCRIBIRSE</a>
`   
var x = document.getElementsByClassName("anotar")
x[5].innerHTML = ` 
<a href="./registro.html" target="_blank">INSCRIBIRSE</a>
`   
/* INFORMACION */

var data = [
{
    "id": 1,
    "name": "Matemática"
    "day": "Lunes, Miércoles y Viernes"
    "hour": "Matutino y Vespertino"
    "type": "Virtual"
    "price" "$500 por 1:30hs"
},
{
    "id": 2,
    "name": "Química"
    "day": "Martes y Jueves"
    "hour": "Por la tarde"
    "type": "Presencial"
    "price" "700 por 1:30hs"
},
{
    "id": 3,
    "name": "Física"
    "day": "Miércoles y sábados"
    "hour": "Matutino y Vespertino"
    "type": "Virtual"
    "price" "$500 por 1:30hs"
},
{
    "id": 4,
    "name": "Universidad"
    "day": "Todos los días"
    "hour": "Por la tarde"
    "type": "Presencial"
    "price" "$1500 por 1:30hs"
},
]

let cad=`<div class="container">`
for(materia of data){
    cad+=`<div class="tarjeta">
     <h2> Materia: ${materia.name}</h2>
     <div class="cuerpo">
        <p>Días:${materia.day}</p>
        <p>Horario:${materia.hour}</p>
        <p>Modalidad ${materia.type}</p>
        <p>Valor:${materia.price}</p>    
     </div> 
    </div>    
    `
}
cad+=` </div> `
console.log(cad)
document.getElementById("materias").innerHTML=cad

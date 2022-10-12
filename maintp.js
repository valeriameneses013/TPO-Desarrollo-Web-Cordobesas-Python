const { createApp } = Vue

createApp({
data() {
return {
arregloProfes:[
{   "nombre": "Prof. de Matemática",
    "experiencia": "Me llamo Juan Carlos, y las Matemáticas son mi pasión desde que tengo uso de razón. Mi carrera está enfocada en transmitir todos mis conocimientos y demostrar que cualquier persona puede aprender! ¡Las matemáticas requieren práctica pero no son imposibles!",
    "imagen": "./imagenes/Profe1.jfif",
    "id": 1
},
{   "nombre": "Prof. de Química",
    "experiencia": "Mi nombre es Carolina y tengo 10 años de experiencia enseñando Química en Secundarios y de manera particular a alumnos de diferentes edades. Mi interés por la química comenzó cuando conocí la historia de Louis Pasteur, Robert Boyle y Antoine Lavoisier.",
    "imagen": "./imagenes/Profe2.jfif",
    "id": 2
},
{   "nombre": "Prof. de Física",
    "experiencia": "¡Hola a todos! Me llamo Zulma y soy Profesora de Física formada en la UTN. Doy clases en la Universidad y en los terciaros del Centro de Córdoba desde hace 5 años. Me recibí con diploma de honor y en mis comienzos tuve la suerte de trabajar codo a codo junto Marie Curie, Niels Bohr y Michael Faraday.",
    "imagen": "./imagenes/Profe3.jfif",
    "id": 3
},
{   "nombre": "Ingreso a la Universidad",
    "experiencia": "Me llamo Roberto y soy el consejero académico de Instituto Cajal Medicina. En otras palabras, mi trabajo es acompañar y orientar a los estudiantes en la selección de su carrera universitaria tomando en cuenta su educación, gustos y disponibilidad horaria.",
    "imagen": "./imagenes/Profe5.jfif",
    "id": 4
},
],   
}
}
}).mount('#app')


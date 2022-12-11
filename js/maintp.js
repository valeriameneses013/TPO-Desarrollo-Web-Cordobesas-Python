const { createApp } = Vue

createApp({
data() {
return {
arregloProfes:[]
}
},
methods: {
    fetchData(url) {
        fetch(url)
        .then(response => response.json())
        .then(data =>{
            this.arregloProfes=data //GUARDA EN ARRAY OBTENIDO DEL JSON
            console.log(this.arregloProfes)
        })
    }
  },
  created(){ //QUE METODO DE VUE EJECUTAR
    this.fetchData("https://mocki.io/v1/b2c80aec-9fb9-4c6a-a77f-518c800dcf46")
  }

}).mount('#app')



const { createApp } = Vue
createApp({
  data() {
    return{
    url: "http://numbersapi.com/3/trivia?fragment",
    frase:[],
    }
  },

methods:{
    fetchData(url){
      fetch(url)
        .then(response => response.json())
        .then(data =>{
          this.frase=data
          console.log(this.frase)
        })  
      }
    },
 created(){
    this.fetchData(this.url)
  }
    }).mount("#app")

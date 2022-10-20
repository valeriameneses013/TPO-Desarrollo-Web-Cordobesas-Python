let cad = `
<div class="containerheader">
        <section>
          <img class="logo" src="./Imagenes/logotemp.png" alt="Logo">
        </section>

        
        <button id="menu">
          <span id="menu-abrir">&#9776</span>
          <span id="menu-cerrar">X</span>
        </button>
        

        <section>
          <nav>
            <ul>
              <li >
                <a href="#Inicio">INICIO</a>             
              <li>
                <a href="#Materias">MATERIAS</a>
              </li>
              <li>
                <a href="#Profesores">PROFESORES</a>
              </li>
              <li>
                <a href="#Contacto">CONTACTO</a>
              </li>
              <li>
                <a href="./registro.html" target="_blank">REGISTRO</a>
              </li>
              <li>
              <a href="iniciosesion.html" target="_blank">MI CUENTA</a>
              </li>
            </ul>
          </nav>
        </section>


        <section>
          <div class="buscar">
            <input type="text" class="buscar_texto" placeholder="Buscar" required />
                <a href="" class="button">
                <i class="fa-solid fa-2x fa-magnifying-glass"></i>
                </a>
          </div>    
        </section>
        
      </div>
      `
document.getElementById("idheader").innerHTML = cad;
cad = `
<div class="containerfooter">
<section>
    <div class="centered">
    <ul>
        <li>
        <a href="#Inicio">INICIO</a>
        <!--Aqui tambien le puedo poner a cada "a" la clase centered-->
        </li>
        <li>
        <a href="#Materias">MATERIAS</a>
        </li>
        <li>
        <a href="#Profesores">PROFESORES</a>
        </li>
        <li>
        <a href="#Contacto">CONTACTO</a>
        </li>
        <li>
        <a href="./registro.html" target="_blank">REGISTRO</a>
        </li>
        <li>
        <a href="iniciosesion.html" target="_blank">MI CUENTA</a>
        </li>
    </ul>
    </div>
</section>
<section>
    <nav class="centered">
    <a target="_blank" href="https://facebook.com"
        ><img src="./Imagenes/facebook.png" alt="facebook"
    /></a>
    <a target="_blank" href="https://instagram.com"
        ><img src="./imagenes/instagram.png" alt="instagram"
    /></a>
    <a class="fijo" target="_blank" href="https://whatsapp.com"
        ><img src="./Imagenes/whatsapp.png" alt="whatsapp"
    /></a>
    <a target="_blank" href="https://twitter.com"
        ><img src="./imagenes/gorjeo.png" alt="twitter"
    /></a>
    </nav>
</section>
<section>
    <div>
    <ul>
        <li><a target="_blank" href="./mapa.html">MAPA DEL SITIO</a></li>
        <li><a target="_blank" href="./pol.html">POLITICAS DE PRIVACIDAD</a></li>
        <li><a target="_blank" href="./term.html">TERMINOS Y CONDICIONES</a></li>
    </ul>
    </div>
</section>
</div>     
`
document.getElementById("idfooter").innerHTML = cad;


window.addEventListener("DOMContentLoaded", (event) => {
  const menuBtn = document.getElementById("menu");
  const nav = document.querySelector(".containerheader nav");

  menuBtn.addEventListener("click", (event) => {
    menuBtn.classList.toggle("salir");
    nav.classList.toggle("visible");
  });
});




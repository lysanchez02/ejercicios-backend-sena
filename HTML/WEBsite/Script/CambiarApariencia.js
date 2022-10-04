function cambiarimg(){
    let imagen=document.getElementById("rx");
    
    if(imagen.src.match("ax")){
        imagen.src="Imagenes/rx.png"
     } else {
        imagen.src="Imagenes/ax.jpg"
        }
    }

   /*document.getElementById("rx").src="Imagenes/ax.jpg" */
    
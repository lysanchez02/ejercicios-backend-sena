                //METODOS ARRAYS Javascript
//CREAR UN ARRAY
    const planetas = ['mercurio','venus','tierra','marte','jupiter','saturno','urano','neptuno']
    console.log(planetas);
//ACCEDER A UN ELEMENDO MEDIANTE SU INDICE
    let primero = planetas[0]
    let ultimo = planetas[planetas.length -1]
    console.log(ultimo);
//AÑADIR ELEMENTO AL FINAL
    let nuevaLongitud = planetas.push('Pluton');
    console.log(planetas);
//AÑADIR ELEMENTO AL PRINCIPIO
    let nuevLongitud = planetas.unshift('sol');
    console.log(planetas);
//ELIMINAR ULTIMO ELEMENTO
    let ultim = planetas.pop();
    console.log(planetas);
//ELIMINAR PRIMER ELEMENTO
    let prim = planetas.shift();
    console.log(planetas);
//ELIMINAR UNO O MAS ELEMENTOS MEDIANTE SU INDICE
    posicion = 2;
    cantidad = 3;
    let elementoEliminado = planetas.splice(posicion,cantidad);
    console.log(planetas);
//COPIAR UN ARRAY
    let copiaArray = planetas.slice();
    console.log(copiaArray);
//MOSTRAR CANTIDAD DE ELEMENTOS
    console.log(planetas.length);
//MOSTRAR ELEMENTOS EN UNA TABLA
    console.table(planetas);
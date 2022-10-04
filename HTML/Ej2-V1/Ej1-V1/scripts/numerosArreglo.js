function arregloNumeros()
{
    var arr=cargarNumeros();

     console.log("Se encontraron "+pares(arr)+" numeros pares -");
     console.log("Se encontraron "+imPares(arr)+" numeros impares -");
     console.log("Se encontraron "+Primos(arr)+" numeros primos -");
   
     console.log(arr);

}



function Primos(arr)
{
    var conteo=0;

    for (let index = 0; index < arr.length; index++) {
        
        let cX=0;
        for (let x = 1; x <= arr[index] ; x++) {           
            if(arr[index]%x==0)
            {
                cX++;
            }        
        }
        
        if(cX<=2)
        {
            conteo++;
        }        
        
    }

    return conteo;
}

function imPares(arr)
{
    var conteo=0;

    for (let index = 0; index < arr.length; index++) {
        
        if(arr[index]%2!=0)
            conteo++;
        
    }

    return conteo;
}

function pares(arr)
{
    var conteo=0;

    for (let index = 0; index < arr.length; index++) {
        
        if(arr[index]%2==0)
            conteo++;
        
    }

    return conteo;
}

//funcion que pide al usuario numeros y los almacena en un arreglo
function cargarNumeros()
{
    var arregloN= new Array();
    var n, index=0;

    while(n!=0)
    {
        n=parseInt(prompt("Ingrese un valor numerico: "));
        if (n==0 || isNaN(n))
        {
            break;
        }
        arregloN[index]=n; index++;
    }
    return arregloN;
}

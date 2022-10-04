function pares()
{
    var arr = cargarNumeros();
    
}




function cargarNumeros()
{
    var arregloN = new Array();
    var n;

    while(n!=0)
    {
        n=parseInt(prompt("Ingrese un valor numerico."));
        if(n==0 || isNaN(n))
        break;
    
        arregloN[index]=n; index++;
    }
    return arregloN;
}

cargarNumeros();
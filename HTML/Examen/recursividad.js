/* function recursivo()
{
    var numero =[];
    var suma = 0;
    
    for (var i = 0; i < 4; i++){
        numero[i] = Number(prompt("Ingrese un numero que termine en cero"));				
        suma = suma + numero[i];
    }
    
    document.write('suma = ' +suma + '; promedio = ' + suma/4);
    
}

//sumar N cantidad de numeros por el usuario
function sumarNum()
{
    var a=[]
   
    while(a!=0 || isNaN(a))
    {
        a=prompt("Ingrese los numeros");   
        
    }
    console.log(a);
}

sumarNum();
*/

//convertir decimales a binario
function convertirabinario (numero) {
    if (numero > 0) {
        return convertirabinario( parseInt(numero / 2) ) + (numero % 2)
    };
    return 'Ingrese un valor mayor que 0';
}

window.onload = function () {
    console.log(convertirabinario(prompt("Ingrese un numero para convertir:")));
}
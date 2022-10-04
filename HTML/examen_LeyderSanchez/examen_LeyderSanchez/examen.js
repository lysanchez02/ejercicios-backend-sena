//Problema1
function examen(){
    diaSemana=["EL DIA NO EXISTE!","Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

    x=parseInt(prompt("DIAS DE LA SEMANA","Ingrese Un Numero entre 1-7"));

if (x<8)
{
    alert(diaSemana[x]);
}else
{
    alert("EL DIA NO EXISTE!")
}
};

//Problema2
function examen2()
{
    let datos= new Array();
    var x, index=0;
    while(x!=0)
    {
        var x=parseInt(prompt("Ingrese los valores, digite 0 para terminar."));
        if (x==0 || isNaN(x))
        {
            break;
        }
    datos[index]=x; index++;
    }
    console.log("El arreglo es: " + datos)
    console.log("El arreglo tiene "+datos.length+" valores")
    console.log()
    console.log()
   return datos;

};

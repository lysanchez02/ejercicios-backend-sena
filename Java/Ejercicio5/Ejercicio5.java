import java.util.Scanner;
public class Ejercicio5{
public static void main(String [] args){

	System.out.println("Ingresa la cantidad de ventas:");

	Scanner ventas = new Scanner(System.in);
	int num,a=0,i,precio;
	num = ventas.nextInt();

	for(i=1; i<=num; i++) {
	
	
Scanner unid = new Scanner(System.in);
precio = unid.nextInt();

a = (a+precio);


  }
System.out.println("EL resultado de la suma de las ventas es:  "+a);
 }
}
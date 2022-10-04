import java.util.Scanner;
public class Ejercicio3{
public static void main(String[]args){
  System.out.println("Ingrese el precio del producto.");
  Scanner teclado = new Scanner(System.in);
  Double num, iva, total;
  num=teclado.nextDouble();

 iva = (num*0.21);
 total=(num-iva);
System.out.println("El total del producto con 21% de dcto es:  " + total);

 }
}
import java.util.Scanner;
  public class Ejercicio1{
  public static void main(String args []){

System.out.println("Digite un valor Divisible por2.");

   Scanner num = new Scanner(System.in);
    int val;
    val = num.nextInt();
 

if(val % 2 ==0){
	System.out.println("El valor que ingresaste es divisible por 2");
   }else{
	System.out.println("El valor no es divisible por 2");
   }
  }
 }
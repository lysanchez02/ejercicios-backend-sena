import java.util.Scanner;
public class Ejercicio2{
	public static void main(String args[]){
	
	System.out.println("Digite un valor");

	Scanner teclado = new Scanner(System.in);
	int val;
        val = teclado.nextInt();
	
	System.out.println("El caracter que corresponde es:  ");
	System.out.print((char)val);
	
  }
}
import java.util.Scanner;
public class formulaCuadratica{
public static void main(String args[]){

System.out.println("Ingrese los valores para A, B, C y X, en (ax)2+(bx)+(c)=0");

int d=0;

Scanner num1 = new Scanner(System.in);
int a;

a = num1.nextInt();

Scanner num2 = new Scanner(System.in);
int b;

b = num2.nextInt();

Scanner num3 = new Scanner(System.in);
int c;

c = num3.nextInt();

Scanner num4 = new Scanner(System.in);
int x;

x = num4.nextInt();

d=(a*x)*(a*x)+(b*x)+(c);

System.out.println("El resultado de la formula es:  "+d);

}
}
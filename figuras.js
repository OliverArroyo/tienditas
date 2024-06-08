package figuras;

/**
 *
 * @author Oliver
 */
public class Figuras {

   public static double areaTriangulo(double base, double altura) {
        return (base * altura) / 2;
    }

    public static double perimetroTriangulo(double lado1, double lado2, double lado3) {
        return lado1 + lado2 + lado3;
    }

    public static double areaCuadrado(double lado) {
        return lado * lado;
    }

    public static double perimetroCuadrado(double lado) {
        return 4 * lado;
    }

    public static double areaCirculo(double radio) {
        return Math.PI * radio * radio;
    }

    public static double perimetroCirculo(double radio) {
        return 2 * Math.PI * radio;
    }

    public static void main(String[] args) {
        double baseTriangulo = 5;
        double alturaTriangulo = 10;
        double lado1Triangulo = 5;
        double lado2Triangulo = 10;
        double lado3Triangulo = 8;
        System.out.println("Área del triángulo: " + areaTriangulo(baseTriangulo, alturaTriangulo));
        System.out.println("Perímetro del triángulo: " + perimetroTriangulo(lado1Triangulo, lado2Triangulo, lado3Triangulo));

        double ladoCuadrado = 4;
        System.out.println("Área del cuadrado: " + areaCuadrado(ladoCuadrado));
        System.out.println("Perímetro del cuadrado: " + perimetroCuadrado(ladoCuadrado));

        double radioCirculo = 3;
        System.out.println("Área del círculo: " + areaCirculo(radioCirculo));
        System.out.println("Perímetro del círculo: " + perimetroCirculo(radioCirculo));
    }
}

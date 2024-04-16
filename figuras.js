const triangulo = {
    tipo: 'triangulo',
    altura: 10,
    base: 10
}
const cuadrado = {
    tipo: 'cuadrado',
    altura: 4,
    base: 4
}
const circulo = {
    tipo: 'circulo',
    radio: 5,
}

document.write("<br><h2>Figuras</h2>");
document.write("<br>Circulo: ");
document.write("Radio: " + circulo.radio + "Circunferencioa: ");
document.write("<br>Diametro: " + (2*circulo.radio));  

document.write("Cuadrado: ");
document.write("altura: " + cuadrado.altura + "base: " + cuadrado.base);
document.write("<br>Area: " + (cuadrado.base*cuadrado.altura));
document.write("<br>Diametro: " + (4*cuadrado.base));


document.write("triangulo: ");
document.write("altura: " + triangulo.altura + "base: " + triangulo.base);
document.write("<br>Area: " + ((triangulo.base*triangulo.altura)/2));
document.write("<br>Diametro: " + (3*triangulo.base));


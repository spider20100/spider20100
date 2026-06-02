import leia from 'readline-sync';    

//entrada
var celcius = leia .questionFloat("digite a temperatura em graus celsius")

var fahrenheit = (celcius * 1.8) + 32;
var kelvin = celcius + 273.15;

//saida
console.log(celcius + " graus celcius e igual a " + fahrenheit + "graus fahrenheit")
console.log(celcius + " graus celcius e igual a " + kelvin + "graus  kelvin");
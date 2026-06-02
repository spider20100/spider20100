import leia from 'readline-sync';    

//entrada
var largura = leia.question("digite a largura do retangulo:")
var comprimento = leia.question("digite o comprimento do retangulo:")

var area = (largura * comprimento);

//processamento
var area = altura * largura;

//saida
console.log("a area  do retangulo é; " + area.tofixed(2));


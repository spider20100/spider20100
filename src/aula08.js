import leia from 'readline-sync'
//entrada
var number = leia.questionint("digite um numero: ");

//processamento
var dobro = number * 2;
var triplo = number * 3;

//saida
console.log("o numero é: " + number);
console.log("o dobro do numero: " + dobro) 
console.log("o triplo do numero é: " + triplo)
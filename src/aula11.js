import leia from 'readline-sync'

//entrada
var metros = leia.questionFloat("digite um numero em metros");

//processamento
var centimetros = metros * 100
var milimetros = metros * 100

//saida
console.log("---resultado----")
console.log(metros.toFixed(2) + " M")
console.log(centimetros.toFixed(2) + " CM")
console.log(milimetros.toFixed(2) + " MM")
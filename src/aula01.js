/*import leia from 'readline-sync' ;

var nome = leia.question("digite seu nome: ");

console.log("olá " + nome + " tudo bem?")

var idade = leia.questionInt(` $(nome) qual a sua idade? `)

if(idade>= 16){
    leia.keyinselect(["sim", "nao"], "voce tem titulo de eleitor? ");
if(temtitulo ===1)
console.log(" você pode votar!!!")
} else {
 console.log("NÃO VOTA!!!")
}

var nome = 'victor';
nome = 'victor hugo';
var idade1 = 15;
var idade2 = "15";

if (idade1 == idade2){
    console.log ("são iguais (==)")
*/

if (idade1 === idade2){
    console.log ("são iguais (==)")
}

import leia from 'readline-sync'

var nota1, nota2, nota3;

nota1 = leia.questionFloat("digite a primeira nota");
nota2 = leia.questionFloat("digite a segunda nota");
nota3 = leia.questionFloat("digite a terceira nota");

var soma = nota1 + nota2 + nota3;
var media = soma / 3;

console.log ("A media é: " + media.toFixed(2));

varidade = leia.questionint ("digite sua idade");

var idadeemmeses = idade * 12;
console.log ("sua udade em meses é " + idadeemmeses + " meses");

var idadeemdias = idade * 365;
console.log ("sua udade em meses é " + idadeemdias + " dias");                                                                               





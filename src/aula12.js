import leia from 'readline-sync'

//entrada
var nome = leia.question("informe o nome do funcionario: ")
var salario = leia.questionFloat("digite o salario: R$");

//processamento
var novoSalario = salario + salario * 1.15;
salario *= 1.15;

//saida
console.log("o novo salario do " + nome + " será de R$" + novoSalario);
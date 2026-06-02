import leia from 'readline-sync'

//entrada
var valorproduto = leia.questionFloat("digite o valor do produto : R$");

//processamento
var valorprodutocomdesconto = valorproduto - (valorproduto * (10 / 100));

//saida
console.log("o valor do produto é: R$" + valorprodutocomdesconto.toFixed(2))
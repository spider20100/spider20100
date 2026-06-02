import leia from 'readline-sync'

var valorproduto = leia.questionFloat("Digite o valor do prodeuto: ");

if(valorproduto < 20) {
  var valorFinal = valorproduto + (valorproduto *(45 / 100));
  console.log("VALOR FINAL DO PRODUTO É : R$" + valorFinal.toFixed(2))
} else{
    var valorFinal = valorProduto + (valorProduto * (30 / 100));
    console.log("VALOR FINAL DO PRODUTO É: R$" + valorFinal.toFixed(2))
}
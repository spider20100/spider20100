import leia from 'readline-sync'
///ENTRADA
var totaleleitores = leia.questionint("INFORME O TOTAL DE ELEITORES DA CIDADE: ");
var totalbrancos = leia.questionint ("INFORME A QTD DE VOTOS BRANCOS: ")
var totalnulos = leia.questionint("INFORME A QTD DE VOTOS NULOS: ")
var totalvalidos = leia.questionint(" INFORME A QTD DE VOTOS VALIDOS ");

/// PROCESSAMENTO
var percentualbrancos = (totalbrancos / totaldeeleitores) * 100;
var percentualnulos = (totalnulos / totaleleitores) * 100
var percentualvalidos = (totalvalidos / totaleleitores) * 100

/// SAIDA
console.log("percentual de votos brancos " + percentualbrancos.toFixed(2) + "%")
console.log("percentual de votos nulos: " + percentualnulos.toFixed(2) + "%")
console.log("percentual de votos validos " + percentualvalidos.tofixed(2) + "%")




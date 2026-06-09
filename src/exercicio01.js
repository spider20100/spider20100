import leia from 'readline-sync';

var senhapadrao ="1234";
var senhadigitada = leia.question("digite sua senha");

if(senhausuario === senhapadrao){
    console.log("acesso permitido!!!")
}else{
    console.log("acesso negado!!!")
}


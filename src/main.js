var func = require('./funcao');
var func2 = require('./funcao2');
var readlineSync = require('readline-sync');

console.log("programa para verificar idade valida para trabalho\n");
console.log("==================================================\n");

console.log("programa para verificar se a idade digitada, estando dentro do primeiro requisito (entre 18 e 65 anos), é maior ou igual a 50 anos\n");
console.log("==================================================================================================================================\n");

var idade = readlineSync.question("Digite sua idade : ");

func.idadeValida(idade);

func2.idadeMaior(idade);   
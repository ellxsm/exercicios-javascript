//npm install readline-sync

let rlSync = require("readline-sync");

let nome = rlSync.question("Qual seu nome? \n");
console.log(`Olá, ${nome}! \n`);

let idade = rlSync.question("Qual sua idade? \n");
console.log(`Sua idade é: ${idade}!`);

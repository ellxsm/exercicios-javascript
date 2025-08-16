//Verificar se B é par ou impar usando ternário

let B = 11;
/*  Ternário:
    condicao ? valorSeVerdadeiro : valorSeFalso
*/
let msg = B % 2 != 0 ? "Sim, B é impar!" : "Não, B é par!";
//B dividido por 2 sobra 1. 1 é diferente de 0. Sendo assim, impar.
console.log(msg);

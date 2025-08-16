//Calcular a média de uma array

let notas = [4, 1, 2, 7, 4, 3];
let soma = 0;
let i;

for (i = 0; i < notas.length; i++) {
  soma += notas[i];
}

let media = soma / notas.length;

console.log("Média: ", media);

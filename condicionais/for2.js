//Identificar o maior valor dentro de uma array.

let numeros = [5, 2, 5, 86, 43, 4, 766, 23, 9];
let maior = numeros[0]; //Para trabalhar com a possibilidade de ter números negativos dentro da array.
let i;

for (i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
}

console.log(maior);

//Verificar qual é a maior palavra dentro de uma array.

let palavras = [
  "Dinossauro",
  "Bicicleta",
  "Casa",
  "Colégio",
  "Paralelepípedo",
  "Blusa",
];
let maior = palavras[0];
let i;

for (i = 1; i < palavras.length; i++) {
  if (palavras[i].length > maior.length) {
    maior = palavras[i];
  }
}

console.log(maior);

//Verificar se A é MAIOR que B, e que B é DIVISÍVEL por 2.

let A = 654,
  B = 382;

if (A > B && B % 2 == 0) {
  console.log(
    `Sim! \n Variável A: ${A}. \n Variável B: ${B}.\n Sendo assim, A é maior que B. E, B é divisível por 2! :)`
  );
} else {
  console.log("Não. Uma das expressões não são verdadeiras! :(");
}

/* Exercício 1 – Contagem simples
Faça um programa que use um for para imprimir os números de 1 a 10 no console.*/

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/* Exercício 2 – Números pares
Usando um while, mostre no console todos os números pares de 0 a 20.*/

let x = 0;

while (x <= 20) {
  if (x % 2 === 0) {
    console.log(x);
  }
  x++;
}

/* Exercício 3 – Tabuada
Usando um for, mostre no console a tabuada do 7 (de 7 x 1 até 7 x 10).*/

console.log("Tabuada do 7");
for (let cont = 1; cont <= 10; cont++) {
  let resultado = 7 * cont;
  console.log(`7 * ${cont} = ${resultado}.`);
}

/* Exercício 4 – Contagem regressiva
Crie um programa que faça uma contagem regressiva de 10 até 0 no console usando um while.
No final, mostre a mensagem "Decolar!".*/

let contador = 10;

while (contador >= 0) {
  console.log(contador);
  if (contador === 0) {
    console.log("Decolar!");
  }
  contador--;
}

/* Exercício 7 – Números ímpares
Usando um for, mostre no console todos os números ímpares de 1 a 50.*/

for (let num = 1; num <= 50; num++) {
  if (num % 2 !== 0) {
    console.log(num);
  }
}

//Outra opção
for (num = 1; num <= 50; num += 2) {
  console.log(num);
}

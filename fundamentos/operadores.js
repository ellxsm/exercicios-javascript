//Exercícios de Operadores - JavaScript

/*Questão 1 – Operadores Aritméticos
Crie duas variáveis, numero1 e numero2, com valores numéricos.
Calcule e exiba no console.*/

let numero1 = 8,
  numero2 = 2;

// A - Soma
let soma = numero1 + numero2;

// B - Subtração
let sub = numero1 - numero2;

// C - Multiplicação
let multi = numero1 * numero2;

// D - Divisão
let div = numero1 / numero2;

console.log(
  `Resultados:\n Soma: ${soma}.\n Subtração: ${sub}.\n Multiplicação: ${multi}.\n Divisão: ${div}.`
);

/*Questão 2 – Operadores de Atribuição
Você tem uma variável saldo com valor inicial de 1000.
Adicione 500 usando um operador de atribuição.
Subtraia 200 usando outro operador de atribuição.
Multiplique o saldo por 2 usando outro operador.
Exiba o saldo final no console.*/

let saldo = 1000;
let deposito = 500;
let saque = 200;

saldo += deposito;
saldo -= saque;
saldo *= 2;

console.log(saldo);

/*Questão 3 – Operadores de Comparação
Crie duas variáveis, idade e idadeMinima, com valores numéricos.
Verifique se a idade é:
Maior que idadeMinima
Igual a idadeMinima
Diferente de idadeMinima
Exiba o resultado de cada comparação no console (true ou false).*/

let idade = 15;
let idadeMinima = 16;

if (idade > idadeMinima) {
  console.log("Pode ir ao show sozinho.");
} else if (idade === idadeMinima) {
  console.log("Pode ir ao show acompanhado dos pais.");
} else {
  console.log("Não poderá ir ao show");
}

/*Questão 4 – Operadores Lógicos
Crie três variáveis booleanas: temCarteira, temDinheiro e maiorDeIdade.
Use operadores lógicos para verificar se uma pessoa pode alugar um carro.
A pessoa só pode alugar se tiver carteira E dinheiro E for maior de idade.
Exiba o resultado no console.*/

let temCarteira = true;
let temDinheiro = true;
let maiorIdade = false;

if (maiorIdade && temDinheiro && temCarteira) {
  console.log("Pode alugar o carro!");
} else {
  console.log("Não é possível alugar!");
}
/*Questão 5 – Operador Ternário
Crie uma variável nota com um valor de 0 a 10.
Use o operador ternário para exibir:
"Aprovado" se a nota for maior ou igual a 7
"Reprovado" se for menor que 7*/

let nota = 5;

resultado = nota >= 6 ? "Aluno Aprovado! :)" : "Aluno Reprovado! :(";

console.log(resultado);

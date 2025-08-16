// Exercícios de Variáveis - JavaScript

/* 1 - Crie uma variável para armazenar seu nome e outra para armazenar sua idade. Exiba no console uma frase como:
"Meu nome é Ellis e tenho 34 anos."*/

const nome = "Ellis";
let idade = 34;

console.log(`Meu nome é ${nome} e eu tenho ${idade} anos.`);

/* 2 - Declare três variáveis com números diferentes e exiba no console a soma, a subtração,
a multiplicação e a divisão entre elas. */

let num1 = 58,
  num2 = 22,
  num3 = 17,
  soma = num1 + num2 + num3,
  sub = num1 - num2 - num3,
  multi = num1 * num2 * num3,
  div = num1 / num2 / num3;

console.log(
  `A soma é: ${soma}, a subtração é: ${sub}, a multiplicação é ${multi} e a divisão é ${div}.`
);

/* 3 - Crie uma variável booleana chamada temCarteira e exiba uma frase condicional:
 - Se for true, exibir "Você pode dirigir."
 - Se for false, exibir "Você não pode dirigir." */

let temCarteira = true;

if (temCarteira === true) {
  console.log("Você pode dirigir.");
} else {
  console.log("Você não pode dirigir.");
}

/* 4 - Troca de valores: Crie duas variáveis a = 10 e b = 20. 
Faça a troca dos valores entre elas sem atribuir diretamente (use uma variável auxiliar). */

let a = 10,
  b = 20,
  aux;

aux = a;
a = b;
b = aux;

console.log(`O valor de A é ${a} e o valor de B é ${b}.`);

/* 5 - Concatenação vs Template String: Crie uma variável cidade e outra estado. Exiba a frase de duas formas:
 - Concatenando (+)
 - Usando template string (`Minha cidade é ${cidade}, ${estado}`).*/

const cidade = "Mauá",
  estado = "São Paulo";

console.log("Moro em " + cidade + ", " + estado + ".");
console.log(`Moro em ${cidade}, ${estado}.`);

/* 6 - Tipos de variáveis: Crie variáveis de cada tipo (string, number, boolean, undefined, 
null, object) e use typeof para imprimir o tipo de cada uma no console.*/

let nomeCompleto = "Ellis Oliveira";
let anoNiver = 1991;
let maiorIdade = true;
let data = null;
let amigos = [];
let resposta;

console.log(
  `O tipo de nomeCompleto é ${typeof nomeCompleto}, de anoNiver ${typeof anoNiver}, de maiorIdade ${typeof maiorIdade}, de data é ${typeof data}, de amigos ${typeof amigos} e resposta ${typeof resposta}.`
);

/* 7 - Área do retângulo: Peça (simule com variáveis) a largura e altura de um retângulo e calcule a área.*/

let base = 95;
let altura = 120;
let area;

area = base * altura;

console.log(`A área do retângulo é: ${area} m².`);

/* 8 - Conversão de temperatura: Crie uma variável em Celsius e converta para Fahrenheit usando a fórmula:
F = (C * 9/5) + 32*/

let celsius = 33;
let fahrenheit;

fahrenheit = celsius * (9 / 5) + 32;

console.log("A conversão é: " + fahrenheit + "°F");

/* 9 - Salário com aumento: Crie uma variável com o salário atual e outra com o percentual 
de aumento. Calcule e exiba o novo salário.*/

let salarioAtual = 2500;
let percentualAumento = 15;
let aumento;
let novoSalario;

aumento = salarioAtual * (percentualAumento / 100);
novoSalario = salarioAtual + aumento;

console.log("Seu salário novo é de: R$" + novoSalario + ".");

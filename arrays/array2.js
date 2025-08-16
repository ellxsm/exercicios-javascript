//Crie uma array com 6 frutas: Maçã, Banana, Laranja, Uva, Abacaxi, Melancia.
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi", "Melancia"];

//Adicione a fruta Morango no final da array.
frutas.push("Morango");

//Remova a primeira fruta da array.
frutas.shift();

//Verifique se a fruta Laranja está presente na array.
console.log(frutas.includes("Laranja"));

//Substitua Banana por Pera.
frutas.splice(0, 1, "Pera");

//Crie uma nova array contendo apenas as frutas que têm mais de 5 letras.
let palavrasMaiores = frutas.filter((fruta) => fruta.length > 5);
console.log(palavrasMaiores);

//Ordene a array em ordem alfabética.
frutas.sort();

//Inverta a ordem da array.
frutas.reverse();

//Transforme a array em uma string, separando os elementos por vírgula.
let resultado = frutas.join(" | ");
console.log(resultado);

//Crie uma cópia da array sem o último elemento.
let copiaFrutas = frutas.slice(0, frutas.length - 1);
console.log(copiaFrutas);

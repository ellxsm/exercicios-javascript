/* 
1 - Criar uma array com 5 nomes (Guilherme, Samuel, Manoel, Davi, João);
2 - Adicionar o nome Mônica no começo da array;
3 - Remover o último elemento do array;
4 - Encontrar a posição do Samuel;
5 - Trocar Manoel por Emanuel;
*/

// 1 -
let nomes = ["Guilherme", "Samuel", "Manoel", "Davi", "João"];

// 2 -
nomes.unshift("Mônica");
console.log(nomes);

// 3 -

nomes.pop();
console.log(nomes);

// 4 -
console.log(nomes.indexOf("Samuel"));

// 5 -
nomes.splice(3, 1, "Emanuel");
console.log(nomes);

//Exercício 1 – Números pares

let numeros = [1, 6, 3, 7, 8, 94, 4, 66, 2, 11];
let numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares);

//Exercício 2 – Números maiores que 5
let numerosMaiores = numeros.filter((num) => num > 5);
console.log(numerosMaiores);

//Exercício 3 – Nomes com mais de 5 letras
let alunos = [
  "Joaquina",
  "Estevão",
  "Julio",
  "Marcos",
  "Ivo",
  "Margarida",
  "Ana",
];

let alunosNomesCinco = alunos.filter((aluno) => aluno.length > 5);
console.log(alunosNomesCinco);

//Exercício 4 – Pessoas adultas

let clientes = [
  { nome: "Matheus", idade: 15 },
  { nome: "Sidney", idade: 42 },
  { nome: "Rosário", idade: 71 },
  { nome: "Mayke", idade: 17 },
  { nome: "Sandy", idade: 19 },
  { nome: "Junior", idade: 18 },
];

let clientesMaiores = clientes.filter((cliente) => cliente.idade > 18);
console.log(clientesMaiores);

//Exercício 5 – Filtrar produtos em promoção

let produtos = [
  { nome: "Camisa", preco: 30, emPromocao: true },
  { nome: "Calça", preco: 80, emPromocao: false },
  { nome: "Tênis", preco: 120, emPromocao: true },
];

let produtosPromocao = produtos.filter((p) => p.emPromocao);
console.log(produtosPromocao);

//Exercício 6 – Filtrar strings que começam com letra específica
let times = [
  "Palmeiras",
  "Corinthians",
  "Gremio",
  "Cruzeiro",
  "Paysandu",
  "Atlético Mineiro",
  "Internacional",
  "Ponte Preta",
  "Fluminense",
  "Flamengo",
];

let timesFiltrados = times.filter((time) => time.charAt(0) === "P");
console.log(timesFiltrados);

let timesFiltrados1 = times.filter((time) => time.startsWith("Fla"));
console.log(timesFiltrados1);

//Exercício 7 – Combinação de filtros

let pessoas = [
  { nome: "João", idade: 25, cidade: "São Paulo" },
  { nome: "Maria", idade: 17, cidade: "Rio de Janeiro" },
  { nome: "Pedro", idade: 30, cidade: "São Paulo" },
  { nome: "Ana", idade: 22, cidade: "Belo Horizonte" },
];

let pessoasFiltradas = pessoas.filter(
  (p) => p.idade > 20 && p.cidade === "São Paulo"
);
console.log(pessoasFiltradas);

//Exercício 8 – Filtrar palavras com vogal inicial
let palavras = ["escola", "carro", "abacaxi", "igreja", "uva", "flor"];
let palavrasComVogal = palavras.filter((palavra) => /^[aeiou]/i.test(palavra));
console.log(palavrasComVogal);

//Exercício 9 – Filtrar objetos com preço acima da média
let itens = [
  { nome: "Notebook", preco: 3500 },
  { nome: "Mouse", preco: 150 },
  { nome: "Teclado", preco: 500 },
  { nome: "Monitor", preco: 1200 },
];

let somaPrecos = itens.reduce((acumulador, item) => acumulador + item.preco, 0);
let mediaPrecos = somaPrecos / itens.length;

console.log(itens.filter((item) => item.preco > mediaPrecos));

//Exercício 10 – Filtrar objetos com nome longo e idade específica
let passageiros = [
  { nome: "Fernando", idade: 30 },
  { nome: "Ana Beatriz", idade: 22 },
  { nome: "Beatriz", idade: 25 },
  { nome: "Carlos", idade: 28 },
];

let passageirosFiltrados = passageiros.filter(
  (p) => p.nome.length > 5 && p.idade > 24
);

console.log(passageirosFiltrados);

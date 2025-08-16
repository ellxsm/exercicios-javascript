//Crie uma array chamada alunos contendo objetos com nome e nota de 6 alunos.
let alunos = [
  { nome: "Ellis", nota: 8.5 },
  { nome: "Jimin", nota: 10 },
  { nome: "Eduardo", nota: 6.3 },
  { nome: "Alice", nota: 9 },
  { nome: "Simone", nota: 9.5 },
  { nome: "Gustavo", nota: 2 },
];

//Crie uma nova array com apenas os nomes dos alunos usando map().
let nomesAlunos = alunos.map((aluno) => aluno.nome);
console.log(nomesAlunos);

//Filtre os alunos que tiraram nota maior ou igual a 7 usando filter().
let notasMaiores = alunos.filter((aluno) => aluno.nota >= 7);
console.log(notasMaiores);

//Verifique se algum aluno chamado "Gustavo" está na lista usando some() ou includes().
let nomeGustavo = alunos.some((aluno) => aluno.nome === "Gustavo");
console.log(nomeGustavo);

//Crie uma string com os nomes de todos os alunos aprovados, separados por vírgula, usando join().
let alunosAprovados = alunos
  .filter((aluno) => aluno.nota >= 6)
  .map((aluno) => aluno.nome)
  .join(", ");
console.log(alunosAprovados);

//Remova o último aluno da lista original sem alterar o restante.
let copiaAlunos = alunos.slice(0, alunos.length - 1);
console.log(copiaAlunos);

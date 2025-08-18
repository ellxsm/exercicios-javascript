// 1ª Forma de criar um objeto (Objeto Literal)
const carro = { marca: "Fiat", modelo: "Punto", "ano-v": 2016 };
console.log(carro["ano-v"]);
console.log(carro.marca);

//2ª Forma de criar um objeto (new Object)
const time = new Object();
time.nome = "Palmeiras";
time.titulos = 30;

console.log(time);

//3ª Forma de criar um objeto
function criarPessoa(nome, sobrenome, estado, idade) {
  return {
    nome,
    sobrenome,
    estado,
    idade,
    //O get transforma nomeCompleto em uma propriedade calculada.
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criarPessoa("Arthur", "Moura", "SP", 39);
console.log(p1.nomeCompleto);

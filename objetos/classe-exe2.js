/*Prática 1
Imagine que você está desenvolvendo um sistema para uma empresa que possui diferentes tipos de funcionários, como gerentes e desenvolvedores. Seu objetivo é implementar o código em JavaScript que modele essa situação utilizando classes e herança.
Você precisa criar as classes Funcionario, Gerente e Desenvolvedor. A classe Funcionario deve ter os atributos nome, idade e cargo, além dos métodos seApresentar() e trabalhar(). A classe Gerente deve herdar da classe Funcionario e ter um atributo adicional departamento, além do método gerenciar(). Já a classe Desenvolvedor deve herdar da classe Funcionario e ter um atributo adicional linguagem, além do método programar().
Depois de implementar as classes, crie instâncias de um gerente e de um desenvolvedor, definindo valores para seus atributos. Em seguida, chame os métodos apropriados para cada um dos funcionários, exibindo as saídas corretas no console.*/

class Funcionario {
  constructor(nome, idade, cargo) {
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }
  seApresentar() {
    console.log(
      `Olá, me chama ${this.nome}, tenho ${this.idade} e meu cargo é de ${this.cargo}.`
    );
  }

  trabalhar() {
    console.log(`O ${this.nome} está trabalhando.`);
  }
}

class Gerente extends Funcionario {
  constructor(nome, idade, cargo, departamento) {
    super(nome, idade, cargo);
    this.departamento = departamento;
  }

  gerenciar() {
    console.log(
      `O gerente: ${this.nome}, está gerenciando o ${this.departamento}.`
    );
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, idade, cargo, linguagem) {
    super(nome, idade, cargo);
    this.linguagem = linguagem;
  }

  programar() {
    console.log(
      `O desenvolvedor: ${this.nome}, está programando em ${this.linguagem}.`
    );
  }
}

let novoGerente = new Gerente("Ramón Sosa", 29, "Gerente", "Desenvolvimento");
novoGerente.seApresentar();
novoGerente.gerenciar();

let novoDesenvolvedor = new Desenvolvedor(
  "Facundo Torres",
  23,
  "Desenvolvedor",
  "JavaScript"
);
novoDesenvolvedor.seApresentar();
novoDesenvolvedor.programar();

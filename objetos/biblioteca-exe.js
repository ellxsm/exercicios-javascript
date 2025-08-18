/*📌 Prática – Sistema de Biblioteca
Implemente um código em JavaScript que modele uma biblioteca com classes e herança:*/

class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }

  exibirInfo() {
    console.log(
      `📖 Livro: ${this.titulo}, Autor: ${this.autor}, Ano: ${this.anoPublicacao}`
    );
  }
}

class Revista extends Livro {
  constructor(titulo, autor, anoPublicacao, edicao) {
    super(titulo, autor, anoPublicacao);
    this.edicao = edicao;
  }

  exibirInfo() {
    console.log(
      `📰 Revista: ${this.titulo}, Edição: ${this.edicao}, Ano: ${this.anoPublicacao}`
    );
  }
}

class Biblioteca {
  constructor() {
    this.acervo = [];
  }

  adicionarItem(item) {
    this.acervo.push(item);
    console.log(`✅ "${item.titulo}" foi adicionado ao acervo.`);
  }

  listarItens() {
    this.acervo.sort((a, b) => b.anoPublicacao - a.anoPublicacao); //Ordenar do mais recente para mais velho
    console.log("\n📚 Itens no acervo:");
    this.acervo.forEach((item) => item.exibirInfo());
  }
}

// Criando instâncias
const livro1 = new Livro("O Hobbit", "J.R.R. Tolkien", 1937);
const revista1 = new Revista("Superinteressante", "Abril", 2023, "Edição 400");
const livro2 = new Livro("Harry Potter", "J.K. Rowling", 2008);

// Biblioteca
const minhaBiblioteca = new Biblioteca();
minhaBiblioteca.adicionarItem(livro1);
minhaBiblioteca.adicionarItem(revista1);
minhaBiblioteca.adicionarItem(livro2);

minhaBiblioteca.listarItens();

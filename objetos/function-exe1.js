//Exercício - Carrinho de Compra

const carrinhoDeCompra = [];

//Função - Adicionar itens ao carrinho
function adicionarItem(produto) {
  carrinhoDeCompra.push(produto);
  console.log("Seu produto foi adicionado! :)");
}

//Função - Remover um item do carrinho
function removerItem(produto) {
  const indice = carrinhoDeCompra.indexOf(produto);

  if (indice !== -1) {
    carrinhoDeCompra.splice(indice, 1);
    console.log("Seu item foi removido!");
  } else {
    console.log("Seu carrinho de compras está vazio!");
  }
}

//Função - Visualizar carrinho
function visualizarItens() {
  if (carrinhoDeCompra.length === 0) {
    console.log("Seu carrinho de compras está vazio!");
  } else {
    console.log("Seu carrinho:");
    for (let i = 0; i < carrinhoDeCompra.length; i++) {
      console.log(`${i + 1}: ${carrinhoDeCompra[i]}.`);
    }
  }
}

//Função - Remover todos os itens
function removerTodosItens() {
  carrinhoDeCompra.length = 0;
  console.log("Você apagou todos os itens do seu carrinho.");
}

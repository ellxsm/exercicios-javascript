/*Escreva um código em que, após o cliente solicitar a escolha da bebida, a opção ‘switch’ deve avaliar a opção selecionada e 
atribuir o valor correspondente à variável ‘valor’. Caso o cliente escolha uma opção inválida, uma mensagem informativa é exibida,
indicando que a escolha deve ser feita entre café, leite ou chá. Por fim, se uma opção válida for selecionada, exibimos uma mensagem
personalizada informando o nome da bebida escolhida e o valor a ser pago, formatado com duas casas decimais.*/

let bebidas = "Leite";
let preco;

switch (bebidas) {
  case "Café":
    preco = 3.99;
    console.log(`Você escolheu: Café \n Valor: R$ ${preco.toFixed(2)}!`);
    break;
  case "Refrigerante":
    preco = 6.0;
    console.log(
      `Você escolheu: Refrigerante \n Valor: R$ ${preco.toFixed(2)}!`
    );
    break;
  case "Chá":
    preco = 5.5;
    console.log(`Você escolheu: Chá \n Valor: R$ ${preco.toFixed(2)}!`);
    break;
  case "Leite":
    preco = 8.0;
    console.log(`Você escolheu: Leite \n Valor: R$ ${preco.toFixed(2)}!`);
    break;
  default:
    console.log("A bebida selecionada não está disponível!");
}

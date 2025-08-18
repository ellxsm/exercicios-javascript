/*Crie uma função que cria um objeto de uma pessoa e calcule o IMC (IMC = Peso / Altura²). Informe a classificação da pessoa com base nos dados abaixo:
- Menor do que 18,5 = Abaixo do peso;
- Entre 18,5 e 24,9 = Peso normal;
- Entre 25 e 29,9 = Sobrepeso;
- Entre 30 e 34,9 = Obesidade I;
- Entre 35 e 39,9 = Obesidade II;
- Maior do que 40 = Obesidade III;
*/

function criarPessoa(nome, sobrenome, p, a) {
  return {
    nome,
    sobrenome,
    peso: p,
    altura: a,

    //Descobrir o IMC
    descobrirIMC() {
      return (this.peso / this.altura ** 2).toFixed(2);
    },
    //Descobrir a Classificação
    situacao() {
      const result = p1.descobrirIMC();

      if (result < 18.5) {
        return "Abaixo do Peso";
      } else if (result >= 18.5 && result <= 24.9) {
        return "`Peso normal";
      } else if (result >= 25 && result <= 29.9) {
        return "Sobrepeso";
      } else if (result >= 30 && result <= 34.9) {
        return "Obesidade Grau I";
      } else if (result >= 35 && result <= 39.9) {
        return "Obesidade Grau II";
      } else {
        return "Obesidade Grau III";
      }
    },
  };
}

const p1 = criarPessoa("Ellis", "Oliveira", 85, 1.7);

console.log(
  `A paciente ${p1.nome} ${
    p1.sobrenome
  }, está com IMC = ${p1.descobrirIMC()}. Ou seja, está: ${p1.situacao()}.`
);

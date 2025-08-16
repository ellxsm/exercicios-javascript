//Verificar se variável é uma string.

const nome = "OiaosaAJ";

//typeof verifica que tipo de dado está na variável

if (typeof nome == "string") {
  console.log(nome.toLocaleUpperCase()); //toLocaleUpperCase transforma uma string em letras maiúsculas;
} else {
  console.log("Error!");
}

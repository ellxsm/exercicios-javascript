const pais = ["brasil", "méxico", "canadá", "alemanha", "inglaterra"];
const paisEmMaiuscula = pais.map(letraMaiuscula);

function letraMaiuscula(item) {
  return item.charAt(0).toUpperCase() + item.slice(1);
}

console.log(paisEmMaiuscula);

//------------------------------------------------------------------------//

const nomes = ["joNathAn", "BRUNO", "Carlinhos", "NamJooN", "jIN"];
const nomesCapitalize = nomes.map(capitalize);

function capitalize(item) {
  return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
}

console.log(nomesCapitalize);

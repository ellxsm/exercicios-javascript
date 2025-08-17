//Função Regular
function somar(x, y) {
  return x * y;
}

var resultado = somar(5, 30);
console.log(resultado);

//Função Anônima
var calcular = function (num1, num2) {
  return num1 - num2;
};

console.log(calcular(35, 25));

//Arrow Function
var div = (n1, n2) => {
  return n1 / n2;
};

console.log(div(10, 2));

// Function declaration
function bomDia() {
  console.log("Bom dia!");
}
bomDia();

// Function expression
const boaTarde = function () {
  console.log("Boa tarde!");
};
boaTarde(); // undefined pq não retorna nada

function somar(a, b /* parameters */) {
  return a + b;
}
const resultado = somar(5, 5 /* arguments */); // Aceita n argumentos
console.log(resultado);

const resultado2 = somar(5); // Na ausência de um argumento o parâmetro da função será undefined
console.log(resultado); // > NaN

function dividir(a, b = 2 /* Default parameters */) {
  return a / b;
}

const numeros = [5, 6, 8, 2, 4, 1];

function ordenarNumeros(array = []) {
  return array.sort((a, b) => a - b); // Gera efeito colateral
}
console.log(ordenarNumeros(numeros));
console.log(numeros);

const numeros2 = [7, 6, 5, 8, 2, 4, 1];

function ordenarNumerosSemEfeitoColateral(array = []) {
  return [...array].sort((a, b) => a - b);
}
console.log(ordenarNumerosSemEfeitoColateral(numeros2));
console.log(numeros2);

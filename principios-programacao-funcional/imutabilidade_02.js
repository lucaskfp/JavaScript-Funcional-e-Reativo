// recursividade
function somarNumeros(array = [], total = 0) {
  if (array.length === 0) {
    return total;
  }
  return somarNumeros(array.slice(1), total + array[0]);
}

const numeros = [1, 2, 3, 4, 5];

console.log(somarNumeros(numeros));
console.log(numeros);

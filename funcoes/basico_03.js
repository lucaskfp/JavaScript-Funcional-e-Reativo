// Arrow function

const felizNatal = () => console.log("Feliz natal!!");
felizNatal();

const saudacao = (nome) => `Fala ${nome}, blz!?`;
console.log(saudacao("Lucas"));

const somar = (numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};
console.log(somar([1, 2, 3, 4, 5]));

// rest parameter (parâmetros rest)
const multiplicar = (...numeros) => {
  let total = numeros[0];
  for (let n of numeros) {
    total *= n;
  }
  return total;
};
console.log(multiplicar(1, 2, 3, 4, 5));

// this - não funciona com arrow function
Array.prototype.ultimo = function () {
  console.log(this[this.length - 1]);
};
const numeros = [1, 2, 3];

numeros.ultimo();

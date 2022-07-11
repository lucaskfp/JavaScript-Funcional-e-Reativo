const numeros = [1, 2, 3, 4, 5];
const dobro = (n) => n * 2;
console.log(numeros.map(dobro));

const nomes = ["lucas", "kennedy"];
const primeiraLetra = (texto) => texto[0];
console.log(nomes.map(primeiraLetra));

const carrinho = [
  { nome: "Caneta", qtd: 10, preco: 7.99 },
  { nome: "Impressora", qtd: 1, preco: 649.5 },
  { nome: "Caderno", qtd: 4, preco: 27.1 },
  { nome: "Lápis", qtd: 3, preco: 5.82 },
];

const pegaNome = (item) => item.nome;
const calculaTotal = (item) => item.qtd * item.preco;

// console.log(carrinho.map(pegaNome));
// console.log(carrinho.map(calculaTotal));

Array.prototype.meuMap = function (fn) {
  const novoArray = [];
  let indice = 0;
  for (let el of this) {
    const resultado = fn(el, indice, this);
    novoArray.push(resultado);
    indice += 1;
  }
  return novoArray;
};

console.log(carrinho.meuMap(pegaNome));

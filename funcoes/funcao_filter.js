const carrinho = [
  { nome: "Caneta", qtd: 10, preco: 7.99 },
  { nome: "Impressora", qtd: 1, preco: 649.5 },
  { nome: "Caderno", qtd: 4, preco: 27.1 },
  { nome: "Lápis", qtd: 3, preco: 5.82 },
  { nome: "Tesoura", qtd: 0, preco: 19.2 },
];

const qtdMaiorQueZero = (item) => item.qtd > 0;

console.log(carrinho.filter(qtdMaiorQueZero));

Array.prototype.meuFilter = function (fn) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      novoArray.push(this[i]);
    }
  }
  return novoArray;
};

console.log(carrinho.meuFilter(qtdMaiorQueZero));

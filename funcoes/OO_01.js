//  Função construtora
function Produto(nome, preco, desconto = 0.15) {
  this.nome = nome;
  this.preco = preco;
  this.desconto = desconto;

  this.precoFinal = function () {
    return this.preco * (1 - this.desconto);
  };

  let privado = "privado";
}

const p1 = new Produto("Caneta", 2.5);
console.log(p1.nome);

console.log(p1.precoFinal());

console.log(p1.privado); // undefined

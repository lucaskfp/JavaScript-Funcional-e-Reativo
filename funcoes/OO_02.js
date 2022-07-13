class Produto {
  constructor(nome, preco, desconto) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }

  get precofinal() {
    return this.preco * (1 - this.desconto);
  }

  set nome(novoNome) {
    this._nome = novoNome.toUpperCase();
  }
}

const p1 = new Produto("Caneta", 2.0, 0.1);

console.log(p1);

console.log(p1.precofinal);

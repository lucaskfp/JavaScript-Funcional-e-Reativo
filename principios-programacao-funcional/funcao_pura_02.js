let qtdDeExecucoes = 0;

//  pura
function somar(a, b) {
  qtdDeExecucoes++; // efeitos colaterais observáveis
  return a + b;
}

console.log(somar(10, 20));
console.log(somar(10, 20));
console.log(somar(10, 20));

console.log(qtdDeExecucoes);

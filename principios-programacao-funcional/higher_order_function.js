// Funções que operam em outras funções,
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order functions

function executar(fn, ...parametros) {
  return function (textoInicial) {
    return `${textoInicial} ${fn(...parametros)}`;
  };
}

function somar(a, b, c) {
  return a + b + c;
}

const r1 = executar(somar, 1, 2, 3)("O resultado da soma é");

console.log(r1);

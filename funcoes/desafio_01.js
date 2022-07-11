//  somar(3)(4)(5)

function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const somarAB = somar(5)(5);
console.log(somarAB(3));

function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

const resultado = calcular(10)(5)(subtrair);
console.log(resultado);

const resultado2 = calcular(10)(5)(multiplicar);
console.log(resultado2);

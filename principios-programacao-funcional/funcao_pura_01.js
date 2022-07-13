// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

const PI = 3.14;

// impura - PI é um valor externo
function areaCirculo(raio) {
  return raio * raio * PI;
}

console.log(areaCirculo(10));

function areaCirculoPura(raio, pi) {
  return raio * raio * pi;
}

console.log(areaCirculoPura(10, 3.14));

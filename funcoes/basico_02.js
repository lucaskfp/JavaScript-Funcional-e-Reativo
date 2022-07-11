// 1) Passar uma função como parâmetro de outra função

function bomDia() {
  console.log("Bom dia!");
}

function boaTarde() {
  console.log("Boa tarde!");
}

function executarQualquerCoisa(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// 2) Retornar uma função a partir de outra função

function potencia(base) {
  return function (expoente) {
    return Math.pow(base, expoente);
  };
}

const potenciaDe2 = potencia(2);

console.log(potenciaDe2(8));
console.log(potencia(2)(8));

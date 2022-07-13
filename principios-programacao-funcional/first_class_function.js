// Diz-se que uma linguagem de programação possui
// funções de primeira classe quando funções nessa
// linguagem são tratadas como qualquer outras variável

const x = 3;
const y = function (num) {
  return `Esse é o número ${num}`;
};

console.log(y(10));

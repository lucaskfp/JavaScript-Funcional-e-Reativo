const numeros = [1, 2, 3, 4, 5];

Array.prototype.meuReduce = function (fn, inicial) {
  let acc = inicial;

  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[0];
      continue;
    }
    acc = fn(acc, this[i], i, this);
  }

  return acc;
};

const total = numeros.meuReduce((acc, el, i, arr) => {
  console.log(i + " ==> " + arr);

  return acc + el;
});

console.log(total);

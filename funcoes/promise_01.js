const promessa = new Promise((resolve) => {
  resolve(["lucas", "kennedy"]);
});

promessa.then((valor) => valor[0]).then((valor) => console.log(valor));

// shorthand
const promessa2 = Promise.resolve(["lucas", "kennedy"]);

promessa2.then((valor) => console.log(valor));

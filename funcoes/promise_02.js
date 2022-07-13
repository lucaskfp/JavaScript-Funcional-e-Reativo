//  callback hell

// setTimeout(() => {
//   console.log("Executando callback");

//   setTimeout(() => {
//     console.log("Executando callback");

//     setTimeout(() => {
//       console.log("Executando callback");
//     }, 2000);
//   }, 2000);
// }, 2000);

function esperarPor(tempo = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("executando promise...");
      resolve("ok");
    }, tempo);
  });
}

esperarPor()
  .then(() => esperarPor())
  .then(esperarPor);

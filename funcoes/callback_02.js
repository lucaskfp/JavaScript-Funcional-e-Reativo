const fs = require("fs");
const path = require("path");

const caminho = path.join(__dirname, "dados.txt");

fs.readFile(caminho, {}, (_, conteudo) => {
  console.log(conteudo.toString());
});

console.log("Inicio");
const conteudo = fs.readFileSync(caminho);
console.log(conteudo.toString());
console.log("Fim");

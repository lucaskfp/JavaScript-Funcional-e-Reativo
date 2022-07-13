const fn = require("./funcoes");
const path = require("path");

const caminho = path.join(__dirname, "dados", "legendas");

async function start() {
  const caminhosLegendasArr = await fn.lerDiretorio(caminho);
  const caminhosLegendasFiltrado = fn.elementosTerminadosCom(
    caminhosLegendasArr,
    "srt"
  );
  const arquivosSTR = await fn.lerArquivos(caminhosLegendasFiltrado);

  let conteudo = arquivosSTR.join("\n").split("\n");
  conteudo = fn.removerSeVazio(conteudo);
  conteudo = fn.removerSeIncluir(conteudo, "-->");
  conteudo = fn.removerSeApenasNumero(conteudo);
  console.log(conteudo);
}

start();

const fs = require("fs");
const { resolve } = require("path");
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
    } catch (error) {
      reject(error);
    }
  });
}

function elementosTerminadosCom(array = [], padrao = "") {
  return array.filter((el) => el.endsWith(padrao));
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo);
    } catch (error) {
      reject(error);
    }
  });
}

function lerArquivos(caminhos = []) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function removerSeVazio(array = []) {
  return array.filter((el) => el.trim());
}

function removerSeIncluir(array = [], padraoTextual = "") {
  return array.filter((el) => !el.includes(padraoTextual));
}

function removerSeApenasNumero(array = []) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num;
  });
}

module.exports = {
  lerDiretorio,
  lerArquivo,
  lerArquivos,
  elementosTerminadosCom,
  removerSeVazio,
  removerSeIncluir,
  removerSeApenasNumero,
};

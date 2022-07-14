// Closure é quando uma função "lembra"
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico

const x = 100;

const somarMaisTres = require("./closure_escopo");

console.log(somarMaisTres());

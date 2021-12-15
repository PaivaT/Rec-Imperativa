let consertos = require('./consertos');

//console.log(consertos);

let aparelhosProntos = consertos.filter(conserto => consertos.pronto === true);
console.log (`APARELHOS PRONTOS: ${aparelhosProntos}`);

let emReparo = consertos.filter(conserto => consertos.pronto === false);
console.log (`APARELHOS QUE AINDA NÃO ESTÃO PRONTOS: ${emReparo}`);
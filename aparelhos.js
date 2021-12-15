let consertos = require('./consertos');

let aparelhosProntos = consertos.filter(conserto => conserto.pronto === true);
console.log('APARELHOS PRONTOS:', aparelhosProntos);

let emReparo = consertos.filter(conserto => conserto.pronto === false);
console.log ('APARELHOS QUE AINDA NÃO ESTÃO PRONTOS:', emReparo);
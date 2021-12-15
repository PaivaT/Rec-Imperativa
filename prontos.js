let consertos = require('./consertos');

    consertos.forEach(conserto => {
    if(conserto.pronto === true) {
        valorTotal = 0;

    conserto.valor.forEach(valor =>{
        valorTotal += valor
        })

        console.log(`
        Aparelho: ${conserto.aparelho}
        itens consertados: ${conserto.itensConsertados}
        Valor total: ${valorTotal} Reais
    `)
    }
});
let consertos = [

    {
        aparelho: 'Samsung A10',
        itensConsertados: ['tela', 'bateria', 'teclado'],
        valores: [10, 100, 25],
        pronto: true
    },

    {
        aparelho: 'IPhone X',
        itensConsertados: ['tela', 'USB'],
        valores: [10, 50],
        pronto: false
    },

    {
        aparelho: 'Moto G Play',
        itensConsertados: ['tela'],
        valores: [100],
        pronto: false
    },

    {
        aparelho: 'Samsung S21',
        itensConsertados: ['bateria'],
        valores: [200],
        pronto: true
    }

]

/*let aparelhosProntos = consertos.filter(conserto => conserto.pronto === true);
console.log `APARELHOS PRONTOS: ${aparelhosProntos}`;

let emReparo = consertos.filter(conserto => conserto.pronto === false);
console.log `APARELHOS QUE AINDA NÃO ESTÃO PRONTOS: ${emReparo}`;*/
   
module.export = consertos;
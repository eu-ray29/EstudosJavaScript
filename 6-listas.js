console.log(`Trabalhando com listas `);
// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belém`
);

listaDeDestinos.push(`Curitiba`); // adicionando um item na lista
console.log('Destinos Possíveis:');
console.log(listaDeDestinos);
// console.log(salvador, saoPaulo, rioDeJaneiro);


listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);



console.log(listaDeDestinos[1], listaDeDestinos[0]);


//array literal - Um array literal é uma lista de zero ou mais expressões, onde cada uma delas represetam um elemente do array, inseridos entre colchetes ([]).

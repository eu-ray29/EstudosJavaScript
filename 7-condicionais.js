console.log(`Trabalhando com Condicionais \n\n`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belém`
);

const idadeComprador = 26;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log('Destinos Possíveis:');
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log('Maior de idade');
//     listaDeDestinos.splice(1, 1); //removendo item
// } else if (estaAcompanhada) {
//     console.log('Está acompanhado');
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     console.log('Menor de idade, venda proibidade');
// }

if (idadeComprador >= 18 ||  estaAcompanhada == true) { // || ou
    console.log('Boa viagem');
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    console.log('Menor de idade, venda proibidade');
}

console.log('Embarque: \n\n');
if (idadeComprador >= 18 && temPassagemComprada ) {
    console.log('Boa viagem');
}else {
    console.log('Infelizmente você não pode embarcar');
}


console.log(listaDeDestinos);


//Operadores logicos 
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);



//Declarações condicionais 
// Uma declaração condicional é um conjunto de comandos que são executados caso uma condição especifica seja verdadeira.
//if e else - if se verdadeiro else se não


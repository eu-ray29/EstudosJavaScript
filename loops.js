console.log(`\n Trabalhando com loops `);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Belém`
);

const idadeComprador = 15;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = 'Nepal';

console.log('\n Destinos Possíveis:');
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 ||  estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3) {
    
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }

    contador +=1;
}

console.log('Destino existe: ',destinoExiste);


if(podeComprar && destinoExiste) {
    console.log('Boa Viagem');
}else {
    console.log('Desculpe, tivemos um erro!')
}

for( let i = 0;i < 3 ; i++ ) {
    
    if(listaDeDestinos[i] == destino){
        destinoExiste = true; 
    }
}

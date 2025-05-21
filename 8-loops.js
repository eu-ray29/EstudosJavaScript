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

// For - um laço for é repetido até que a condição especificada seja falsa.

//do...While - a instrução do...while repetirá até que a condição especificada seja falsa.

//While - uma declaração while executa suas intreuções, desde que uma condição especificada seja avalida como verdadeira.


/* leitura
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Loops_and_iteration
*/

console.log('Trabalhando com atribuições de Variáveis');

const idade = 25;
//const nome = 'Raynara';
let nome = 'Raynara';
const sobrenome = 'Ferreira';

//console.log(nome + ' ' + sobrenome); tanto desta forma quando com a virgula ambos irá dar um espaço entro os textos
console.log(nome, sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`);

//nome = nome + sobrenome; //está variável não pode ser sobrescrita, pois é uma constanta. Assim não podedo ser mudada.


nome = nome + sobrenome; //irá sobrescrever o valor da variável nome
console.log(nome);
//não fazer 
//mes = 'Janeiro';
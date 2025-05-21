console.log('Trabalhando com atribuições de Variáveis');

//const idade = 25;
//const nome = 'Raynara';
let primeiroNome = 'Raynara';
const sobrenome = 'Ferreira';

//console.log(nome + ' ' + sobrenome); tanto desta forma quando com a virgula ambos irá dar um espaço entro os textos
console.log(primeiroNome, sobrenome);
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);

//nome = nome + sobrenome; //está variável não pode ser sobrescrita, pois é uma constanta. Assim não podedo ser mudada.


primeiroNome = primeiroNome + sobrenome; //irá sobrescrever o valor da variável nome
console.log(primeiroNome);

let idade; //declarando uma variável
//não fazer 
idade = 25; //atribuindo valor
idade = idade+1;
console.log(idade);
//mes = 'Janeiro';
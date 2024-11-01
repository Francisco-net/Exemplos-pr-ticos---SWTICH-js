const rl = require('readline-sync');



const opcoes = ['Onibus','Metro','Taxi'];
const valor = [5.60, 8.00, 15.25];
let user = rl.keyInSelect(opcoes,'Qual seria o transporte que voce deseja usar: ', {limit: Number, limitMessage: 'Por favor insira um valor valido'});

switch (user) {
    case -1:
        console.log('Viagem cancelada');
        break;
    case 0:
        console.log(`Sua escolha de compra foi: ${opcoes[user]}`);
        console.log(`O valor da sua passagem é de: R$${valor[0]}`);
        break;
    case 1:
        console.log(`Sua escolha de compra foi: ${opcoes[user]}`);
        console.log(`O valor da sua passagem é de: R$${valor[1]}`);
        break;
    case 2: 
        console.log(`Sua escolha de compra foi: ${opcoes[user]}`);
        console.log(`O valor da sua passagem é de: R$${valor[2]}`);
        break;
    default:
        break;
}





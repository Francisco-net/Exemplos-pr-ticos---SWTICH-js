const rl = require('readline-sync');

const opcoes = ['Arroz','Feijao','Macarrao'];
let user = rl.keyInSelect(opcoes,'Qual seria o produto que voce deseja comprar: ', {limit: Number,limitMessage: 'Por favor insira um valor valido'});

switch (user) {
    case -1:
        console.log('Compra cancelada');
        break;
    case user:
        console.log(`Sua escolha de compra foi: ${opcoes[user]}`);
        break;

    default:
        break;
}


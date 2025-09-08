// atribuimos o valor "comum" a variavel permissao.
//a estrutura do código analisará o valor e imprimirá de acordo com o que foi atribuído.
let permissao = 'comum';
//switch permite executar diferentes blocos de códigos com base no valor de uma variavel.
switch (permissao) {
    case 'comum' :
    console.log('usuário comum');
    //break é utilizado para interomper a execução do switch após um case ser executado
    break;

    case 'gerente' :
    console.log('usuário gerente');
    break;

    case 'diretor' :
    console.log('usuário diretor');
    break;

    //caso o código não reconhcer nenhum dos valores atribuidos acima, ele imprimirá outra mensagem.
    default:
    console.log('Usuário não reconhecido!');
}
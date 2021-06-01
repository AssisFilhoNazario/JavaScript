var x = parseInt(prompt('Digite um numero de 1 a 4'));

switch(x){
    case 1:
        alert('Voce escolheu numero  1');
        break;
    case 2:
        alert('Voce escolheu numero  2');
        break;
    case 3:
        alert('Voce escolheu numero  3');
        break;
    case 4:
        alert('Voce escolheu numero  4');
        break;
    default:
        alert('[ERRO], Digite um numero de 1 a 4');
        break;
}
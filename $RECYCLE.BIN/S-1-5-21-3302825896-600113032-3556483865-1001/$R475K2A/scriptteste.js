var nome = window.prompt('Qual o seu nome?');
var idade = Number(window.prompt('Qual a sua idade?'));


if(idade > 18){
    return `voce pode votar`
}else{
    return 'voce nao pode votar'
}


alert(`Seu nome é ${nome} e sua idade é ${idade} `);
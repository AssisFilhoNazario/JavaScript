const info = {
    nome: "Assis Filho",
    sobrenome:"Lacerda",
    idade: 99,
    pais: "Brasil",



}


console.log(info);

// Pegando um valor do objeto e colocando em uma variavel, assim pode acessar o nome diretamente
let {nome} = info;
console.log(nome);
let {sobrenome, idade} = info;
console.log(sobrenome, idade);

//Nao preciso mais fazer assim
console.log("-------------------------------");
console.log(info.nome);


//Pegando o pais e colando em outra variavel
let {pais:nacionalidade} = info;
console.log(nacionalidade);
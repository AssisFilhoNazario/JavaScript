let numeros = [1,2,3,4];

let outros = [...numeros, 5,6,7,8];

console.log(outros);



let info ={
    nome: 'Assis',
    sobrenome: 'Filho',
    idade: 99,

};


console.log(info)


let novaInfo = {
    ...info,
    cidade:'Morada Nova',
    estado: 'Ceara',
    pais: 'Brasil'
};

console.log(novaInfo);


function adicionarInfo(info){
    let novasInfo = {
        ...info,
        status:0,
        token:'okdfofkgokdfogdfg',
        data_cadastro:'.....'

    };

    return novasInfo;
}

console.log(adicionarInfo({nome:'Assis', sobrenome:'Filho'}));



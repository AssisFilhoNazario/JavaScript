function adicionar(nomes, ...novosNomes){

    let novoConjunto = [
        ...nomes,
        ...novosNomes,
    ];

    return novoConjunto;

}

let nomes = ["Assis", "Marla"];

let outros  = adicionar(nomes, "Antonio", "Marta", "AssisPai", "Eliete");

console.log(outros);
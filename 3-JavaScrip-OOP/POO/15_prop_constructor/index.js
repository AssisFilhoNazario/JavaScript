function criarAvore(especie,temFruto) {
    return{
        especie: especie,
        temFruto: temFruto,
    }
}

let laranjeira = new criarAvore('Laranjeira', true)

console.log(laranjeira)
console.log(laranjeira.constructor)

function Heroi(nome, classe) {
    this.nome = nome
    this.classe = classe
}

let jaspion = new Heroi('Jaspion', 'robô')
console.log(jaspion)
console.log(jaspion.constructor)


let obj = {
    tete:'teste',
}

console.log(obj.constructor)




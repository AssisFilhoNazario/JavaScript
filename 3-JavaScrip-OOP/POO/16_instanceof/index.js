//OBJETO
function criarAvore(especie,temFruto) {
    return{
        especie: especie,
        temFruto: temFruto,
    }
}

let laranjeira = new criarAvore('Laranjeira', true)
//OBJETO
function Heroi(nome, classe) {
    this.nome = nome
    this.classe = classe
}

let jaspion = new Heroi('Jaspion', 'robô')


let obj = {
    tete:'teste',
}

console.log(laranjeira instanceof criarAvore)
console.log(laranjeira instanceof Object)
console.log(jaspion instanceof Heroi)




let Humano = class {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    nomeDaPessoa(){
        return `O nome da pessoa é: ${this.nome}`
    }
}

console.log(typeof Humano)

let assis = new Humano('Assis', 28)

console.log(assis)

console.log(assis.nomeDaPessoa())

class Humano{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    falar(){
        console.log('Humano falou ')
    }
}

class Engenheiro extends Humano{
    constructor(nome, idade, especializacao){
        super(nome,idade)
        this.profisao = 'Engenheiro'
        this.especializacao = especializacao
    }
}


let assis = new Engenheiro('Assis', 25, 'civil')

console.log(assis)


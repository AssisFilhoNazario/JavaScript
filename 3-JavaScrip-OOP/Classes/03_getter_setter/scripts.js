class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    set Mudanome(novoNome){
        this.nome = novoNome
    }
    get recebeNome(){
        return `O nome da Pessoa é: ${this.nome}`
    }

}

//Criando o OBJETO
let assis = new Humano('Assis', 28)


//Usando o metodo set para mudar o nome ou passa nome 
assis.Mudanome = 'Assis Filho'
console.log(assis.nome)
console.log('--------------------------')

//pegando o nome 
console.log(assis.recebeNome)






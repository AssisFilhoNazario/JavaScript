function Pessoa (nome, idade, Temcnh){
    this.nome = nome
    this.idade = idade
    this.Temcnh = Temcnh;

    this.MostraNome = function(){
        console.log(`Seja bem vindo ${this.nome}`)
    }


}


let pessoa = new Pessoa ('Assis', 28, true)
console.log(pessoa)
pessoa.MostraNome()


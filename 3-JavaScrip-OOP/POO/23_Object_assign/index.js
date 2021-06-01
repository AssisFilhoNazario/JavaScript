let pessoa = {
    nome: 'Assis',
    getNome(){
        console.log(`Esse é o nome do obj ${this.nome}`)
    }
   
}

let pessoa2 = {
   

}

Object.assign(pessoa2, pessoa)

console.log(pessoa2)
pessoa2.getNome()
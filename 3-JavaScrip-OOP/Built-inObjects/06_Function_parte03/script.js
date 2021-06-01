let a = {
    nome:'Mateus',
    dizerNome(){
        console.log(`O nome deste objeto é ${this.nome}`)
    }
}

let b = {
    nome:'Assis'
}

a.dizerNome()

a.dizerNome.call(b)

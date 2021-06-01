function Ninja (nome){
    this.nome = nome
    this.atirarShuriken = function(){
        console.log(`Atirou`)
    }
}

let ninja1 = new Ninja ('Naruto')
ninja1.atirarShuriken()


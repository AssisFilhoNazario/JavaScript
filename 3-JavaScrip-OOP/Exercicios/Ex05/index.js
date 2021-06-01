function Ninja (nome, qtd){
    this.nome = nome
    this.estoqueShuriken = qtd

    this.atirarShuriken = function(inimigo){
        if(this.estoqueShuriken > 0){
            console.log('O NINJA ATIROU A SHURIKEN')
            this.estoqueShuriken -=1
            inimigo.vivo = false
        }else{
            console.log(`O ${this.nome} não possui mais shurikens para jogar!`)
        }
        
    }
    
}


function Inimigo (nome){
    this.nome = nome 
    this.vivo = true
}


let ninja1 = new Ninja ('Naruto',3)
let orachimaru = new Inimigo ('orachimaru')
console.log(ninja1)
console.log (orachimaru)

ninja1.atirarShuriken(orachimaru)
console.log (orachimaru)








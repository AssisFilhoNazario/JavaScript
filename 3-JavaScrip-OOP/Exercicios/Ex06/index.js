// 1 recebe o obejto em si (naruto) e o dois a classe (ninja)
function compareObjs(obj1, obj2){
    if(obj1 instanceof obj2){
        console.log("O objeto " + obj1.name +" é uma instancia de "+ obj2.nome)
    }else{
        console.log("O objeto " + obj1.name +" nao é uma instancia de "+ obj2.nome)
    }
}



//objs
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



compareObjs(orachimaru, Ninja)













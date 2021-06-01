function Ninja (nome, shuriken){
    this.nome = nome
    this.shuriken = shuriken

    this.atirarShuriken = function(){
        if(this.shuriken == 0){
            console.log('O numero de tiro nao foi informado')
        }else{
            for(i = 0; i<this.shuriken; i++){
                console.log(`O ${this.nome} atirou ${i} vezes`)
            }
              
        }
        
    }
    
}

let ninja1 = new Ninja ('Naruto',0)
ninja1.atirarShuriken()


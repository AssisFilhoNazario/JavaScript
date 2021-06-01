let ninja = {
    classe: 'Profissional',
    arma: 'shuriken',

    atiraArma: function(){
        console.log(`Atirou com a ${this.arma}`)
    },
    
    atiraDuasVezes: function(){
        for(let i= 2; i>0; i--){
            this.atiraArma()
        }
    }
}


let ninjaTwo = {
    classe:'Profissional',
    arma: 'Kunai',

    atirarArma: function(){
        console.log(`Atirou com a ${this.arma}`)
    }
}


ninja.atiraArma()
ninjaTwo.atirarArma()

ninja.atiraDuasVezes()


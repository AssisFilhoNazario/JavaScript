function Ninja(nome, arma){
    this.nome = nome
    this.arma = arma
    this.atirarArma = function (){
        console.log(`Atirou com a ${this.arma}`)
    }
}

let ninjaOne = new Ninja('Naturo', 'Shuriken');
console.log(ninjaOne.nome)
ninjaOne.atirarArma()

let ninja2 = new Ninja('Sasuke', 'Kunai')
console.log(ninja2.nome)
ninjaOne.atirarArma()




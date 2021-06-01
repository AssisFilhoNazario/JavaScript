function Veiculo (){
    this.carenagem = 'aco'
    this.ligar = function(){
        console.log('O veiculo ligou')
    }
}

function Trem (tipo){
    this.tipo = tipo
    this.vagos = 50
}

function Carro (){
    this.pneus = 4
}

//Herdando
Trem.prototype = new Veiculo()
Carro.prototype = new Veiculo()

//criando o obj
let trembala = new Trem('Trem bala')
let carroBala = new Carro();

console.log(trembala.tipo)
trembala.ligar()

carroBala.ligar()








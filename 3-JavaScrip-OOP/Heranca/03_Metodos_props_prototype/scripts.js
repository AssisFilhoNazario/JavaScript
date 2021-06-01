function Veiculo (){

}
Veiculo.prototype.carenagem = 'aco'
Veiculo.prototype.ligar = function(){
        console.log('O veiculo ligou')
}

function Trem (tipo){
    this.tipo = tipo
}
Trem.prototype.vagoes = 50

function Carro (){}

Carro.prototype.pneus = 4

//Herdando
Trem.prototype = new Veiculo()
Carro.prototype = new Veiculo()

//criando o obj
let trembala = new Trem('Trem bala')
let trem = new Trem('Trem')
let carroBala = new Carro();

trem.ligar()
trembala.ligar()
carroBala.ligar()












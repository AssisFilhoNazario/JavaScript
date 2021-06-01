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
//Copaindo so o prototype, em vez de instanciar uma classe
Trem.prototype = Veiculo.prototype;

//Construtor Temporario
let F = function(){}
F.prototype = Veiculo.prototype;
Carro.prototype = new F();


//criando o obj
let trembala = new Trem('Trem bala')
let trem = new Trem('Trem')
let carroBala = new Carro();

Carro.prototype.ligar= function(){
    console.log('O CARRO LIGOU')
}

trem.ligar()
trembala.ligar()
carroBala.ligar()














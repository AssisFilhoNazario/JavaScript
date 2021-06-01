function extend(Filho,Pai){
    let F = function(){}
    F.prototype = Pai.prototype;
    Filho.prototype = new F();
}


function Veiculo (){}

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

//Construtor Temporario por funcao
extend(Trem, Veiculo)
extend(Carro, Veiculo)

//criando o obj
let trembala = new Trem('Trem bala')
let trem = new Trem('Trem')
let carroBala = new Carro();

Carro.prototype.ligar= function(){
    console.log('O CARRO LIGOU')
}
Trem.prototype.ligar= function(){
    console.log('piuuiiii')
}


trem.ligar()
trembala.ligar()
carroBala.ligar()
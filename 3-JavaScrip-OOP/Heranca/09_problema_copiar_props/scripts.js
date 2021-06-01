function extend(Filho,Pai){
    let paiProto = Pai.prototype;
    let filhoProto = Filho.prototype;
    for(let i in paiProto){
        filhoProto[i] = paiProto[i];
    }
    // filho tem acesso tem ao obj pai
    filhoProto.uber = paiProto;
}


function Veiculo (){}

Veiculo.prototype.carenagem = 'aco'
Veiculo.prototype.itens = ['teto sola','blidagem', 'motor turbo']
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

//adiciona temporário por funcao
Trem.prototype.itens.push('janela fixas')

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

console.log(trem)
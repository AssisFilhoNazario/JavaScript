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

console.log(trembala instanceof Trem)
console.log(carroBala instanceof Carro)
console.log('----------------------------')
console.log(trembala instanceof Veiculo)
console.log(carroBala instanceof Veiculo)
console.log('----------------------------')
console.log(trembala instanceof Object)
console.log(carroBala instanceof Object)











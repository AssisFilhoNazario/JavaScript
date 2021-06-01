let equipamentosDoCaro ={
    preco: 15,
    cor:'vermelho',
    aro: 20
}

function Carro (marca){
    this.marca = marca;
}

Carro.prototype = equipamentosDoCaro


let fusca = new Carro ('vw')

console.log(equipamentosDoCaro.isPrototypeOf(fusca))









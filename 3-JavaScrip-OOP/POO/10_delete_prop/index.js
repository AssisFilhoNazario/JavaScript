let carro = {
    tipo: 'SUV',
    ligar:function(){
        console.log('ligou')
    }
}

console.log(carro.tipo)
carro.ligar()

delete carro.tipo
delete carro.ligar


console.log(carro.tipo)
carro.ligar()


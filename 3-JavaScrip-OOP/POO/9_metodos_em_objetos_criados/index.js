let carro = {
    tipo: 'SUV'
}

carro.portas = 4
console.log(carro.portas)
console.log(carro)

if (carro.tipo == 'SUV') {
    carro.tetoSolar = true
}
console.log(carro)

carro.acelerar = function (){
    console.log('Vrummmmmmmm')

}

console.log(carro)
carro.acelerar()

function Carro (marca, preco){
    this.marca = marca;
    this.preco = preco;
    this.calota = true
}

Carro.prototype.cor = 'Preto'
Carro.prototype.calota = false

let fusca = new Carro ('vw', 10000)


console.log(fusca.hasOwnProperty('marca'))
console.log(fusca.constructor.prototype.hasOwnProperty('marca'))

Carro.prototype.marca = 'teste'

console.log(fusca.constructor.prototype.hasOwnProperty('marca'))





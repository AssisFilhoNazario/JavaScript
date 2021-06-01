function Carro (marca, preco){
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype.cor = 'Preto'

let fusca = new Carro ('vw', 10000)

console.log(fusca.cor)
console.log(fusca)

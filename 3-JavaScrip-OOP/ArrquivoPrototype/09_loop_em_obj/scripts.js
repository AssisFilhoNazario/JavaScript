function Carro (marca, preco, cor, aro){
    this.marca = marca;
    this.preco = preco;
    this.cor = cor;
    this.aro = aro;
}

Carro.prototype.cor = 'Preto'
Carro.prototype.calota = false

let fusca = new Carro ('vw', 10000, 'vermelho', 20)

for(prop in fusca){
    console.log(prop + ' => '+ fusca[prop])
}









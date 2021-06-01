function Carro (marca, preco){
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype.cor = 'Preto'
Carro.prototype.calota = false

let fusca = new Carro ('vw', 10000)


if(fusca.hasOwnProperty('calota')){
    console.log('A propriedade calota é do Objeto')
}else if(fusca.constructor.prototype.hasOwnProperty('calota')){
    console.log('A propriedade calota é do Prototype')
}else{
    console.log('A propriedade calota não exite')

}







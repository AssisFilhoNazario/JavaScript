function Carro (marca, preco){
    this.marca = marca;
    this.preco = preco;
}

Carro.prototype = {
    rodas:4,
    ligar (){
    console.log('ligou')
    } 
}


let bmw = new Carro ('BMW', 10000)

console.log(bmw)
console.log(bmw.rodas)
bmw.ligar()

let ferrari = new Carro ('Ferrari', 20000)

Carro.prototype.tetoSolar= true;

Carro.prototype.abrirTetoSolar = function(){
    console.log('O teto abriu')
}


console.log(bmw.tetoSolar)
ferrari.abrirTetoSolar()

let pessoa = {
    nome:'Assis',
    idade: 29,

    falar: function (){
        console.log('Oi, neu nome é Assis')
    },
    aniversario(){
        this.idade = this.idade+1
       // idade +=1
    },
    dizerIdade(){
        console.log(`A minha idade é ${this.idade}`)
    },
    podeDirigir: function(){
        if(this.idade < 18){
            console.log('Não pode dirigir')
        }else{
            console.log('Pode dirigir')
        }
    }
}


//pessoa.dizerIdade()
//pessoa.aniversario()
//console.log(pessoa.idade)
//pessoa.aniversario()
//console.log(pessoa.idade)
//pessoa.dizerIdade()
pessoa.podeDirigir()


let calculadora = {
    numeros: 0,

    somar: function (a,b) {
        this.numeros = a + b
    },
    subtrair: function (a) {
        this.numeros  = this.numeros - a
    }

}

//calculadora.somar(2,6)
//console.log(calculadora.numeros)

//calculadora.subtrair(3)
//console.log(calculadora.numeros)



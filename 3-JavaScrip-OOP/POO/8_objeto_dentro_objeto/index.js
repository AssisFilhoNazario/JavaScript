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
    },
    caracteristica:{
        cnh: true,
        carteira: ['dinheiro','documentos', 'moedas'],

    }
}

console.log(pessoa.caracteristica.carteira[2])




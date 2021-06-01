function criarCarro(modelo, portas, aro, tetoSolar){
    return{
        modeloDoCarro: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,

        ligarCarro: function(){
            console.log('Carro ligou')
        },

        temTetoSolar: function(){
            if (this.temTetoSolar ==true) {
                console.log('Tem teto solar')
            } else {
                console.log('Não tem teto sola')
            }
        }
    }

}

let ferrari = new criarCarro('Ferrari', 4, 18, true)

console.log(ferrari.modeloDoCarro)
ferrari.ligarCarro()
ferrari.temTetoSolar()




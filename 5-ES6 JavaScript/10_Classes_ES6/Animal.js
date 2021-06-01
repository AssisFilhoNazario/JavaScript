class Animal {

    constructor(tipo, patas){
        this.tipo = tipo;
        this.patas = patas;
    }


    falar(som ='som qualquer'){
        return som;
    }

    get dados(){
        return `Tipo: ${this.tipo} Patas: ${this.patas}`;
    }

}

export class Gato extends Animal {
    constructor(patas, cor){
        super("Gato", patas)
        
        this.cor = cor;

    }

    falar(som = 'Miauuu2'){
        return som;
    }
}
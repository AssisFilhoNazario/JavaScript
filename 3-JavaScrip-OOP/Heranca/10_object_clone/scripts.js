function extend(Filho,Pai){
    let paiProto = Pai.prototype;
    let filhoProto = Filho.prototype;
    for(let i in paiProto){
        filhoProto[i] = paiProto[i];
    }
    // filho tem acesso tem ao obj pai
    filhoProto.uber = paiProto;
}

function objectClone(o, stuff){
    let n;
    function F(){};
    F.prototype =0;
    n = new F();
    n.uber = o;
    for(let  i in stuff){
        n[i] = stuff[i];
    }
    return n;
}

function Veiculo (){
    this.carenagem = 'aco';
    this.itens = ['teto sola','blidagem', 'motor turbo'];
    this.ligar = function(){
        console.log('O veiculo ligou');
    }
}

function Trem (tipo){
    this.tipo = tipo
    this.vagoes = 50
}

function Carro (){
    this.pneus = 4
}

let v = new Veiculo;

let trem = objectClone(v, {
    tipo: 'trem',
    vagoes: 50,
})

trem.itens.push('Janlea');

console.log(trem);
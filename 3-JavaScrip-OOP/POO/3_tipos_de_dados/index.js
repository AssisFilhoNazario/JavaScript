let maquina= {
    material:'Aço inox',
    equipamento: ['motor', 'freio', 'esteira', 'cilindro'],
    vaiMontada: false,
    numeroDeMotores:1,
}

console.log(maquina)
console.log(maquina.material)
console.log(maquina.equipamento[1])

for(let i =0;  i < maquina.equipamento.length; i++ ){
    console.log(maquina.equipamento[i])
    
}

if(maquina.vaiMontada == false){
    console.log('O cliente precisa montar a maquina')
}

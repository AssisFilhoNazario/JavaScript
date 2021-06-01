function Ninja (nome, arma){
    this.nome
    this.arma
}
const naruto = new Ninja('Naruto','Shuriken')
const rockelee = new Ninja('Rocklee','punhos')
const cloneDoNaruto = new Ninja('Naruto','Shuriken')
const cloneDoNarutoVerdadeiro = naruto

console.log(naruto === rockelee)

console.log(naruto === cloneDoNaruto)

console.log(naruto === cloneDoNarutoVerdadeiro)




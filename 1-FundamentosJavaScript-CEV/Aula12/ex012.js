var horaAtual = new Date()
var hora = horaAtual.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora <12) {
    console.log('Bom dia!!!')
} else if(hora >=12 && hora <=17 ) {
    console.log('Boa Tarde!!!')
}else if (hora >=18 ) {
    console.log('Boa Noite!!!')
}
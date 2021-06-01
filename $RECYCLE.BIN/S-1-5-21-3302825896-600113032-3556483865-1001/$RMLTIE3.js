const nomes = ["Assis", "Paulo", "Antonio"];

// Pegando o nome Paulo e colando na variavel segundoNome
let {1:segundoNome} = nomes;
console.log(segundoNome);
console.log('------------------------');

// esse e melhor
let nome1 = ['Assis', 'Filho', 'Nazario'];
let[nome , meio, sobrenome] = nome1;
console.log(`${nome} ${meio} ${sobrenome}`);


//exemplo com funcoes

const mat = {
    somar: function(x , y){
        return  x + y;
    },

    multiplicar: function(x , y){
        return x * y;
    }

}
console.log(mat.somar(5,3));
//descontruir 
let {somar, multiplicar} = mat;
console.log(somar(1,2));


let lista = ['Arroz', 'Feijão', 'Macarrão'];

//prorucando o  iten na lista, se achar ele diz qual posição esta
console.log(lista.indexOf('Feijão'));

//prorucando o  iten na lista, se nao achar ele traz um numero negativo
console.log(lista.indexOf('pimenta'));

//Juntar todos os itens em String separados por (,/ enfim..)
console.log(lista.join(', '));

//Remover o ultimo elemento da lista
lista.pop();
console.log(lista);

//remover o primeiro elemento da lista
lista.shift();
console.log(lista);

//adicionar um elemento na lista
lista.push('Carne');
console.log(lista);
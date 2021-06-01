function adicionarIgrediente(){
    let txtIgrediente = document.getElementById('igrediente').value;

    //pegando o conteudo do elemento atual
    let listaDiv = document.getElementById('lista').innerHTML;
    //adicionando mais elemento a ele 
    listaDiv = listaDiv + "<li>" +txtIgrediente+"</li>";
    // e subistituiindo ele (atualizado)
    document.getElementById('lista').innerHTML = listaDiv;

    



    
}
function altera(nome){
    let sobreNome = window.prompt('Digite o nome');
    let nomeDiv = document.getElementById('area');

    nomeDiv.innerHTML = nome + sobreNome;



}
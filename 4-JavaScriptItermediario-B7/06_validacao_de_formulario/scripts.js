function checkValidacao(){
    let valor = document.getElementById('numero').value;

    if(valor.length > 2){
        alert('Digite apenas dois algarismo seu teimoso!!!')
        return false;
    }else{
        return true;
    }

}
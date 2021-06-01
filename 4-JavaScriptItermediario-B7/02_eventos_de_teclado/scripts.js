
function apertouTecla02(event){
    if(event.shiftKey == true){
        console.log('APERTOU ALGUMA TECLA COM O SHIFT')
    }else{
       console.log('APERTOU ALGUMA TECLA '+ event.keyCode);
    }

}
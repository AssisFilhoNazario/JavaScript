class Calculator{

    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }
    clearValues(){
        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0';

    }


    checkLastDigit(input, upperValue, reg){
        if((
            !reg.test(input) &&
            !reg.test(upperValue.substr(upperValue.length - 1))
        )) {
            return true;
        }else {
           return false;
        }
    }
    //metodo soma
    sum(n1,n2){
        return parseFloat(n1) + parseFloat(n2)
    }
    //metodo subtracao
    subtraction(n1,n2){
        return parseFloat(n1) - parseFloat(n2)
    }
    //metodo multiplicação
    multiplication(n1,n2){
        return parseFloat(n1) * parseFloat(n2)
    }  
    //metodo divsao
    division(n1,n2){
        return parseFloat(n1) / parseFloat(n2)
    }  
    //atualiza valores
    refreshValues(total){
        this.upperValue.textContent = total;
        this.resultValue.textContent = total;
    }


    //resolve a operacao
    resolution(){
        //Explode uma string em um array
        let upperValueArray = (this.upperValue.textContent).split(" ")
        //resultado da operação
        let result = 0;

        for(let i = 0; i <= upperValueArray.length; i++){
            let operation = 0;
            let actualItem = upperValueArray[i];
            //faz a multiplicação
            if(actualItem == 'x'){
                result = calc.multiplication(upperValueArray[i-1]) , (upperValueArray[i+1])
                operation =  1;
            //faz a divisão
            }else if (actualItem == '/'){
                result = calc.division(upperValueArray[i-1]) , (upperValueArray[i+1])
                operation =  1;
            //checa se o array ainda tem multipicão e divisao a serem feitas 
            }else if (!upperValueArray.includes('x') && !upperValueArray.includes('/')){
                //soma e subtracao
                if(actualItem == '+'){
                    result = calc.sum(upperValueArray[i-1]) , (upperValueArray[i+1])
                    operation =  1;
                }else if(actualItem == '-'){
                    result = calc.subtraction(upperValueArray[i-1]) , (upperValueArray[i+1])
                    operation =  1;
                }
            }
            
            //atualiza valores do array para proxima interação
            if(operation){
                //indice anterior no resultado da operacao 
                upperValueArray[i - 1] = result;
                //remove os itens ja utilizado para a operação 
                upperValueArray.splice(i,2);
                //atualizar o valor do indice
                i=0;
            }
        }
        
        if (result) {
            calc.reset = 1;
        }
       // atualizar totais
       calc.refreshValues(result); 
        
    }

    btnPress(){
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;
        //verifia se tem so numeros
        var reg = new RegExp('^\\d+$');
        //se precisar resetar, limpa o display
       if (calc.reset && reg.test(input)) {
            upperValue = '0';
        }
        //limpa a prop de reste
        calc.reset = 0;
        //ativa o metodo de limpar 
        if (input == 'AC') {
            calc.clearValues()
        
        }else if(input == '='){

            calc.resolution()

        } else {
            // checa se precisa add ou nao
            if (calc.checkLastDigit(input, upperValue, reg)) {
                return false;
            }
            //adiciona espaços aos operadores
            if(!reg.test(input)){
                input = ` ${input} `
            }
            if(upperValue == '0'){
                calc.upperValue.textContent = input
            }else{
                calc.upperValue.textContent += input
            }    
        }

    }

}

//strat obj

let calc = new Calculator;

console.log(calc);

//start btns

let buttons = document.querySelectorAll('.btn');

console.log(buttons);

//map all buttons
for (let  i=0; buttons.length >i; i++) {
    buttons[i].addEventListener('click', calc.btnPress); 
}




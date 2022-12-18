let numberOne = Number(prompt("Digite o primeiro número: "));
let numberTwo = Number(prompt("Digite o Segundo número: "));

sum = numberOne + numberTwo;
sub = numberOne - numberTwo;
div = numberOne / numberTwo;
restDiv = numberOne % numberTwo;
multi = numberOne * numberTwo;

alert(`
  A soma de ${numberOne} + ${numberTwo} = ${sum})
  A subtração de ${numberOne} - ${numberTwo} = ${sub}
  A Divisão de ${numberOne} / ${numberTwo} = ${div} e o resto da divisão é ${restDiv}
  A multiplicação de ${numberOne} * ${numberTwo} = ${multi}
  `) 


  //Condição abaixo irá verificar o resultado da SOMA é par ou impar 
if(sum % 2 == 0){
    alert(`A soma do ${numberOne} e ${numberTwo} é igual a um número é PAR`)
  }
else{
    alert(`A soma do ${numberOne} e ${numberTwo} é igual a um número é IMPAR`)
}

// Abaixo 
if(numberOne == numberTwo){
  alert("Números inseridos é Igual")
}
else{
  alert("Números inseridos é diferentes")
}


  

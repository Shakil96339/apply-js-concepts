function getFactorial(number) {
    var factorial= 1;
    var i=  1;
    while (i <= number) {
        factorial= factorial*i;
        i++;
        
    }
    return factorial;
}

var myFactorial = getFactorial(5);
console.log(myFactorial);



function factorial(number) {
    var fact = 1;
    for( var i=1; i<=number; i++){
        fact = fact * i;
    }
    return fact;
}
var myNumber = 5;
var answer = factorial(myNumber);
console.log('ei nao answer',answer);



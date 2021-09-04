function factorials(number) {
   var factorial = 1;
   for(var i= 1; i<= number; i++){
    factorial = factorial*i;
}
return factorial;
   }
  

var myFactorial = factorials(6);
console.log('this is my factorial',myFactorial);




function factorial(number) {
    var fact =1;
    for(var i=1; i<= number;i++){
        fact = fact *i;
    }
    return fact
}

var myFactorial =factorial(4)
console.log(myFactorial);
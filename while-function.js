
function factorial(number) {
    var fact =1;
     var i = 1;
    while (i<=number) {
       
        i++;
        fact = fact * i;
    }
    return fact;
}

var  myNumber = 5;
var answer = factorial(myNumber);
console.log('ans hobe',  answer);
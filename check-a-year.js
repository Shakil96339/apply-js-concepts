
function isLeapYear(years) {
    if( years % 4==0 ){
        return true;
    }
    return false;
}


var year = 2020;
var answer = isLeapYear(year);
console.log(answer);

var newYear =2021;
var answer =isLeapYear(newYear);
console.log('mama',answer);
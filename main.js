/*
let d = new Date();
let month = d.getMonth() + 1;

function monthNumberToSeasonName(monthNumber) {
    if (monthNumber < 3 || monthNumber === 12) {
        console.log('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        console.log('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        console.log('Лето');
    } else {
        console.log('Осень');
    }
}

monthNumberToSeasonName(month);
 */

//Из двух чисел с разной четностью вывести на экран нечетное число.

let a = 24;
let b = 15;

if (a % 2 > 0) {
    console.log(a);
}
if (b % 2 > 0){
    console.log(b);
}

//Определить количество дней в году, который вводит пользователь.

let year = prompt("Enter your birth year");

if(year % 4 > 0){
    alert(365)
}
else if (year % 400 > 0){
    alert(365);
}
else {
    alert(366);
}


//Вводятся три разных числа. Найти, какое из них является средним (больше одного, но меньше другого).
let nums = [36, 7, 678];

console.log(nums.sort((a, b) => b - a)[1]);







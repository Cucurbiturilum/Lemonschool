// // /*
// // let d = new Date();
// // let month = d.getMonth() + 1;
// //
// // function monthNumberToSeasonName(monthNumber) {
// //     if (monthNumber < 3 || monthNumber === 12) {
// //         console.log('Зима');
// //     } else if (monthNumber >= 3 && monthNumber <= 5) {
// //         console.log('Весна');
// //     } else if (monthNumber >= 6 && monthNumber <= 8) {
// //         console.log('Лето');
// //     } else {
// //         console.log('Осень');
// //     }
// // }
// //
// // monthNumberToSeasonName(month);
// //  */
// //
// // //Из двух чисел с разной четностью вывести на экран нечетное число.
// //
// // let a = 24;
// // let b = 15;
// //
// // if (a % 2 > 0) {
// //     console.log(a);
// // }
// // if (b % 2 > 0){
// //     console.log(b);
// // }
// //
// // //Определить количество дней в году, который вводит пользователь.
// //
// // let year = prompt("Enter your birth year");
// //
// // if(year % 4 > 0){
// //     alert(365)
// // }
// // else if (year % 400 > 0){
// //     alert(365);
// // }
// // else {
// //     alert(366);
// // }
// //
// //
// // //Вводятся три разных числа. Найти, какое из них является средним (больше одного, но меньше другого).
// // let nums = [36, 7, 678];
// //
// // console.log(nums.sort((a, b) => b - a)[1]);
// //
// //
// //
// //
// //
// //
// // let a = 3;
// // let sum = 0;
// //  for(let i = 0; i <+ a; i++){
// //      sum = sum + i;
// //  }
// //  console.log(sum);
//
//
// // let month = 4;
// //
// // switch (month) {
// //     case 1:
// //         break;
// //     case 2:
// //         break;
// //     case 3:
// //         break;
// //     case 4:
// //         console.log('April');
// //         break;
// //     case 5:
// //         break;
// //     case 6:
// //         break;
// //     case 7:
// //         break;
// //     case 9:
// //         break;
// //     case 10:
// //         break;
// //     case 11:
// //         break;
// //     case 12:
// //         break;
// // }
//
// // let num = 100;
// //
// // for (let i = 0; i < +num; i++) {
// //     if (i % 15 === 0) {
// //         console.log('FizzBuss');
// //     }
// //     else if (i % 5 === 0) {
// //         console.log('Buss');
// //     }
// //     else if (i % 3 === 0){
// //         console.log("Fizz")
// //     }
// // }
//
// let nub = 5;
//
// for (let i = 1; i < +nub; i++) {
//     let str = '';
//    for(let k = 1; k <= i; k++){
//       str += ';)'
//    }
//     console.log(str);
// }
//
//
//

// function getUserName(name1, name2, name3) {
//     return 'Hi ' + name1;
// }
//
// console.log(getUserName('Jon', 'Ivan', 'Olha'));
//
// function isAdult(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return false;
//     }
// }
//
// if (isAdult()) {
//     console.log('Good');
// } else {
//     console.log('Nooo');
// }
//
// function math(num1, num2, num3 = 45) {
//     return num1 - num2 - num3;
// }
//
// console.log(math(60, 30));
//
// function sort(num1, num2) {
//     for (let i = num1; i <= +num2; i++) {
//         console.log(i);
//     }
// }
//
// console.log(sort(1, 10));
//
// function checkType(parameter) {
//     console.log(typeof parameter);
// }
//
// checkType('dhdhdhd');

// let func = function () {
//     alert('Hello');
// }
// func();


// function sum(a, b) {
//     return a + b;
// }
//
// function getNumbers(num1, num2, somthing) {
//   let ourResult = somthing (num1, num2);
//   return ourResult + 100;
// }
//
// console.log(getNumbers(2, 5, sum));
//
//
//
// function getSum(num1, num2) {
//     function sum(a, b) {
//         return a + b;
//     }
//     return num2 + num1 + sum(3, 5);
// }
//
// console.log(getSum(2, 5));
//
// for (let i=1; i<=3; i++){
//     let day = prompt("Enter a number");
//
//     switch (+day) {
//         case 1:
//             console.log('Monday');
//             break;
//         case 2:
//             console.log("Tuesday");
//             break;
//         case 3:
//             console.log('Wednesday');
//             break;
//         case 4:
//             console.log("Thursday");
//             break;
//         case 5:
//             console.log('Friday');
//             break;
//         case 6:
//             console.log('Saturday');
//             break;
//         case 7:
//             console.log('Sunday');
//             break;
//     }
// }


// let user = {
//     name:"Mark",
//     surname: "Donya",
//     adress: "rrrrrrr",
//     age:"16",
//     getName: function () {
//         return this.name;
//     }
// };
//
// console.log(user.name, user.surname);
// console.log(user.getName());
// //
// // console.log(Math.cos(90));
// //
// // let date = new Date();
// //
// // console.log(date.getDate());
//
// let math =  {
//     a: 3,
//     b: 44,
//     pi: 3.14,
// };
// console.log(Math.sqrt(math.a));
// console.log(Math.round(math.a / math.b));
//
//
// function getNumber(num1, num2) {
//     return num1 + num2;
// }
// console.log(getNumber(2, 4));
//
// if (localStorage.getItem('volume') < 80) {
// //     console.log('You like music');
// // }
// //
// let user = {
//     name: 'Ivan',
//     surname: 'Bondariev',
//     age: '80',
// };
//
// console.log(JSON.stringify(user));
//
// //
// // document.cookie = "user = Ivan";
// //
// // console.log(document.cookie);


function loadMore() {
    $.ajax({
        url: "data.json",
    }).done(function (data) {
        for (let i = 0; i < data.length; i++) {
            $('#cakesTmpl').tmpl(data[i]).appendTo('.deck');
        }
    });
}

async function loadMoreFetch(){
  let response = await fetch("data.json");
   if(response.ok){
       let data = await response.json();
       for (let i = 0; i < data.length; i++) {
           $('#cakesTmpl').tmpl(data[i]).appendTo('.deck');
       }
   } else {
       alert("Ошибка HTTP: " + response.status);
   }
}

$(document).ready(function () {
    loadMoreFetch();
    $('#load-more').click(function () {
        loadMoreFetch();
    })
});






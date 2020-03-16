// 1. Клонирование массива
// Напишите функцию copyArr(arr), которая копирует массив не изменяя иригинал.

const animals = ['cat', 'dog', 'pig', 'duck', 'elephant'];

function copyArr() {
    return animals.slice();
}

console.log(copyArr());

// 2. Преобразование массива в строку
// Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
// Элементы массива будут разделены запятой. Получите результат двумя разными методами.

console.log(animals.join(','));

// 3. Заполните массив 10-ю иксами с помощью цикла.

const num = [];
for (let i = 0; i <= 9; i++) {
    num.push('x');
}
console.log(num);

// 4. Заполните массив числами от 1 до 10 с помощью цикла

const decade = [];

for (let i = 1; i <= 10; i++) {
    decade.push(i);
}
console.log(decade);

// 5.Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части.

const randomNum = [];

for (let i = 0; i <= 9; i++) {
    let a = Math.random();

    randomNum.push(a.toFixed(2));
}

console.log(randomNum);

// 6. Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла. 
const randomDecade = [];

for (let i = 0; i <= 9; i++) {
    let a = Math.random() * 10;

    randomDecade.push(Math.round(a));
}

console.log(randomDecade);

// 7.Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти. 

const salary = [1, 22, 45, 4, 5, 66, 78, 9, 23, 14, 3, 5, 66];
const modifiedSalary = [];

for (let i = 0; i < salary.length; i++) {
    let a = salary[i];
    if (a > 0 && a < 10) {
        modifiedSalary.push(a);
    }
}
console.log(modifiedSalary);

// 8.  Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.
//     Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите.

const date = [1, 3, 5, 6, 8, 9, 2, 4, 6, 7, 3, 5];

for (let i = 0; i < date.length; i++) {
    let a = date[i];
    if (a === 5) {
        console.log('Есть');
        break;
    }
}


// 9.  Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

const values = [1, 3, 5, 10];
let sum = 0;

for (let i = 0; i < values.length; i++) {
    let a = values[i];
    sum += a;
}
console.log(sum);

let result = values.reduce((sum, current) => sum + current, 0);

console.log(result);

// 10. Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива. 

sum = 0;

for (let i = 0; i < values.length; i++) {
    let a = values[i] ** 2;
    sum += a;
}
console.log(sum);

let results = values.reduce((sum, current) => sum + (current ** 2), 0);

console.log(results);

// 11.  Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество)

let valuesSum = values.reduce((sum, current) => sum + current, 0);
let b = valuesSum / values.length;

console.log(b);

// 12. Пользователь вводит многозначное число через promt. Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента
// и вставляет двоеточие (:) между двумя нечетными числами. Например, если вводится число 55639217, то на выход должно быть 5:563:921:7.


// function colonOdd() {
//     let count = prompt('Enter a number');
//     let k = count.split('');
//     let r = [];
//     for (let i = 0; i < k.length; i++) {
//         r.push(k[i]);
//         if (k[i] % 2 > 0 && k[i + 1] % 2 > 0) {
//             r.push(':');
//         }
//     }
//     return r.join('');
// }
//
// console.log(colonOdd());

// 13. Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива 
// arr (игнорируйте чувствительность к регистру).

const d = [1, 2, 3, 4, 5, 6, 6, 7, 9, 9, 12, 22, 22];
const h = [];

function removeDuplicates(d) {
    for (let i = 0; i < d.length; i++) {
        if (h.indexOf(d[i]) === -1) {
            h.push(d[i]);
        }
    }
    return h;
}

console.log(removeDuplicates(d));

// 14. Напишите функцию getFirst(array, n), которая возвращает фрагмент массива, содержащий первые 'n' элементов массива.

function getFirst(d, n) {
    return d.slice(0, n);
}

console.log(getFirst(d, 3));

// 15.Сумма элементов двух массивов. Напишите код, который создаёт массив элементов представляющих собой сумму соответствующих элементов заданных массивов.

const l = [1, 2, 3, 4, 5, 3];
const n = [3, 4, 5, 6, 7, 7];
const s = [];

for (let i = 0; i < l.length; i++) {
    s[i] = l[i] + n[i];
}

console.log(s);

// 16. Объединить два массива без дублирования элементов
// Напишите функцию union, которая возвращает массив состоящий только из уникальных элементов из каждого массива.
// 17.Напишите функцию union, которая возвращает массив, содержащий все элементы arr1, которые не находятся в arr2 и наоборот.
const w1 = [];

function union1(l, n) {
    for (let i = 0; i < l.length; i++) {
        if (w1.indexOf(l[i]) === -1) {
            w1.push(l[i]);
        }
    }
    for (let i = 0; i < n.length; i++) {
        if (w1.indexOf(n[i]) === -1) {
            w1.push(n[i]);
        }
    }
    return w1;
}

console.log(union1(l, n));

// 18.Напишите функцию compareNumbers(arr), которая возвращает массив, элементы которого отсортированы по убыванию их значений.

const students = [1, 5, 6, 7, 2, 4, 9, 34, 56, 7, 3];

function compareNumbers(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
}

students.sort(compareNumbers);

console.log(students);

// 19. Напишите функцию sumOfSquares(arr), которая возвращает сумму квадратов значений массива.

sum = 0;

for (let i = 0; i < values.length; i++) {
    let a = values[i] ** 2;
    sum += a;
}
console.log(sum);

// 20. Напишите код, который определяет сумму и произведение значений массива.
let r = [1, 2, 3, 4];

let result1 = r.reduce((sum, current) => sum * current, 1);

console.log(result1);

// 21.Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений: false, null, undefined, 0, –0, NaN и "" (пустя строка).
let arr = [58, '', 'abcd', true, null, false, 0, NaN];

function filterFalse(value) {
    return Boolean(value);
}

let filtered = arr.filter(filterFalse);

console.log(filtered);

// 22.Напишите функцию generateNumbers(start, len), которая генерирует массив заданной длины len,
// заполненный целыми числами, где каждое число больше предыдущего на единицу.
let numbers = [];

function generateNumbers(start, len) {
    for (let i = 0; i < len; i++) {
        numbers.push(start + i);
    }
    return numbers;
}

console.log(generateNumbers(3, 13));

// 23. Переместить элемент массива из одной позиции в другую.
// Напишите функцию moveElement(arr,from,to), которая позволяет переместить элемент массива из позиции from в позицию to.

let k = [2, 5, 6, 7, 8, 9];

function moveElement(k, from, to) {
    let v = k[to];
    k[to] = k[from];
    k[from] = v;
    return k;
}

console.log(moveElement(k, 1, 4));

// 24.Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers),
// которая возвращает новый массив из такого же числа элементов,в котором на каждой позиции будет находиться сумма элементов массива numbers 
// до этой позиции включительно.

let numbers1 = [2, 3, 5, 7, 11, 13, 17, 19];
let numbers2 = [];

numbers1.reduce((sum, current) => {
    let newSum = sum + current;
    numbers2.push(newSum);
    return newSum;
}, 0);

console.log(numbers2);

// 25.Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.

let array = ['a', 'b', 'c'];

array.push(1, 2, 3);
console.log(array);

// 26. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
let fffff = [1, 2, 3];

console.log(fffff.reverse());

// 27.Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.

let g = [1, 2, 3];
g.unshift(4, 5, 6);

console.log(g);

// 28. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
let name = ['js', 'css', 'jq'];

console.log(name[name.length - 1]);

//29. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].

let y = [1, 2, 3, 4, 5];

console.log(y.slice(y.length - 2, y.length));

// 30. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
y.splice(1, 2);
console.log(y);

// 31.Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
let q = [1, 2, 3, 4, 5];
z = q.splice(1, 3);

console.log(z);

// 32.Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][0]);

// 33.Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'.

let obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
};
console.log(obj.js[0]);

// 34. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на
// четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.

let po = [2, 5, 3, 9];

let result3 = po[0] * po[1] + po[2] * po[3];
console.log(result3);
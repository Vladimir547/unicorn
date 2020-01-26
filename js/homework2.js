/*
     Что выведет следующий код?
     let fruits = ["Яблоки", "Груша", "Апельсин"];
     // добавляем новое значение в "копию"
     let shoppingCart = fruits;
     shoppingCart.push("Банан");
     // что в fruits?
     alert( fruits.length ); // ?

     ОТВЕТ выведет длинну массива 4 т.к это оба один и тот же объект
 */
/*
    Давайте произведём 5 операций с массивом.
    Создайте массив styles с элементами «Джаз» и «Блюз».
    Добавьте «Рок-н-ролл» в конец.
    Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
    Удалите первый элемент массива и покажите его.
    Вставьте «Рэп» и «Регги» в начало массива.
    Массив по ходу выполнения операций:
    Джаз, Блюз
    Джаз, Блюз, Рок-н-ролл
    Джаз, Классика, Рок-н-ролл
    Классика, Рок-н-ролл
    Рэп, Регги, Классика, Рок-н-ролл
*/
let styles = ['джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles.splice(styles.length / 2, 1, 'Классика');
styles.unshift('Рэп', 'Регги')
console.log(styles);
/*
    Каков результат? Почему?
    let arr = ["a", "b"];
    arr.push(function() {
    alert( this );
    })
    arr[2](); // ?

    Ответ выведет массив 3 элеметнов котором будет данная функция,
    т.к мы дабавили эту функцию в массив, там прописан alert(this), this это текущий объект, в данном случае это наш массив
*/
/*  
   Напишите функцию sumInput(), которая:
   Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
   Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
   Подсчитывает и возвращает сумму элементов массива.
   P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/
function sumInput() {
    let array = [];
    var result = 0;
    for (let i = 0; i <= array.length; i++) {
        array.push(prompt("ВВЕДИТЕ ЦИФРЫ ДЛЯ ПОДСЧЁТА СУММЫ"));
        if (array[i] === null || array[i] === '' || !Number(array[i])) {
            break;
        }
        result += Number(array[i]);
        console.log(result);
    }
}
//sumInput();
/*
    На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

    Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

    Функция getMaxSubSum(arr) должна возвращать эту сумму.

    Например:

    getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
    getMaxSubSum([2, -1, 2, 3, -9]) = 6
    getMaxSubSum([-1, 2, 3, -9, 11]) = 11
    getMaxSubSum([-2, -1, 1, 2]) = 3
    getMaxSubSum([100, -9, 2, -3, 5]) = 100
    getMaxSubSum([1, 2, 3]) = 6 (берём все)
    Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

    getMaxSubSum([-1, -2, -3]) = 0
    Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

*/
function getMaxSubSum(arr) {
    let maxi = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        maxi = Math.max(maxi, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxi;
}
//console.log(getMaxSubSum([-1, 2, 3, -9]));
/*
    Чему будут равны переменные a, b, c и d в примере ниже?
    let a = 1, b = 1;
    let c = ++a; // ?
    let d = b++; // ?

    ОТВЕТ a=2; b=2; c =2; d =1; 
*/
/*
    Чему будут равны переменные a и x в примере ниже?
    let a = 2;
    let x = 1 + (a *= 2);

    ОТВЕТ a= 4; x = 5;
*/
/*
    Каким будет результат этих выражений?
    5 > 4
    "ананас" > "яблоко"
    "2" > "12"
    undefined == null
    undefined === null
    null == "\n0\n"
    null === +"\n0\n"
*/
/*
    Каким будет результат этих выражений?
    5 > 4
    "ананас" > "яблоко"
    "2" > "12"
    undefined == null
    undefined === null
    null == "\n0\n"
    null === +"\n0\n"

    ОТВЕТ 1. true, 2. false, 3. true, 4. false, 5. false 6. false 
*/
/*
    Создайте страницу, которая спрашивает имя у пользователя и выводит его.
*/
function yourName() {
    let name = prompt('Введите своё имя')
    alert(name);
}
//yourName();
/*
    Выведется ли alert?
    if ("0") {
        alert( 'Привет' );
    }

    ОТВЕТ да выведется
*/
/*
    Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
    Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»
*/
function EcmaScript() {
    let script = prompt("Какое «официальное» название JavaScript?");
    if (script === "ECMAScript") {
        alert("ВЕРНО");
    } else {
        alert('Неверно');
    }
}
//EcmaScript()
/*
    Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
    1, если значение больше нуля,
    -1, если значение меньше нуля,
    0, если значение равно нулю.
    Предполагается, что пользователь вводит только числа.
*/
function asses() {
    let asses = prompt('введите число');
    if (asses == 0) {
        alert(0);
    } else if (asses < 0) {
        alert(-1);
    } else if (asses > 0) {
        alert(1);
    } else {
        alert('это не число');
    }
}
//asses();
/*
    Перепишите if с использованием условного оператора '?':
    let result;
    if (a + b < 4) {
    result = 'Мало';
    } else {
    result = 'Много';
    }
*/

//ОТВЕТ
//let result = a + b < 4 ? 'Мало' : 'Много';
//console.log(result);

/*
    Перепишите if..else с использованием нескольких операторов '?'.
    Для читаемости рекомендуется разбить код на несколько строк.
    let message;
    if (login == 'Сотрудник') {
    message = 'Привет';
    } else if (login == 'Директор') {
    message = 'Здравствуйте';
    } else if (login == '') {
    message = 'Нет логина';
    } else {
    message = '';
    }
*/
let login = 'fg';
let message = login === 'Сотрудник' ? 'Привет' : (login == 'Директор' ? 'Здравствуйте' : (login == '' ? 'Нет логина' : ''));
//console.log(message);

/*
    Что выведет код ниже?
    alert( null || 2 || undefined );
    
    ОТВЕТ 2;
*/

/*  
    Что выведет код ниже?
    alert( alert(1) || 2 || alert(3) );

    ОТВЕТ 2
*/

/*
    Что выведет код ниже?
    alert( 1 && null && 2 );

    ОТВЕТ null
*/

/*
    Что выведет код ниже?
    alert( alert(1) && alert(2) );

    ОТВЕТ 1 and undefined
*/

/*
    Что выведет код ниже?
    alert( null || 2 && 3 || 4 );

    ОТВЕТ 3
*/

/*
    Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
    «Включительно» означает, что значение переменной age может быть равно 14 или 90.
*/
//let age =10;
/*if(age<=90 && age>=14){
   //
}*/

/*
   Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
    Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
*/

//let age =33;
/*if(age>=90 || age<=14){
   console.log('good');
}*/
/*let age =99;
if(!(age<90) || !(age>14)){
   console.log('good');
}*/
/*
                let age =33;
if(age>=90 || age<=14){
   console.log('good');
}

*/

/*
    Какие из перечисленных ниже alert выполнятся?
    Какие конкретно значения будут результатами выражений в условиях if(...)?
    if (-1 || 0) alert( 'first' );
    if (-1 && 0) alert( 'second' );
    if (null || -1 && 1) alert( 'third' ); 

    ОТВЕТ выполнятся 1 и 3.  в первом условии -1;  второе условие 0; в третьем 1
*/

/*
    Напишите код, который будет спрашивать логин с помощью prompt.
    Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc– показать «Отменено», в противном случае отобразить «Я вас не знаю».
    Пароль проверять так:
    Если введён пароль «Я главный», то выводить «Здравствуйте!»,
    Иначе – «Неверный пароль»,
    При отмене – «Отменено».
*/
function signIn() {
    let name = prompt("Введите логин");
    let password;
    if (name === 'Админ') {
        let password = prompt('введите пароль');
        if (password === 'Я главный') {
            alert('Здравствуйте');
        } else if (!password) {
            alert('Отменено');
        } else {
            alert('Неверный пароль');
        }
    } else if (!name) {
        alert('Отменено');
    }
    else {
        alert('Я вас не знаю');
        console.log(name);
    }
}
//signIn();
/*
    Напишите скрипт, который считает количество секунд в часе.
*/
function secondInHour() {
    let secondInMinute = 60;
    let minuteInHour = 60;
    let hour = 1;
    let result = hour * minuteInHour * secondInMinute
    console.log(result);
}
//secondInHour();                                                                                            
/*
     Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=. Количество строк кода при этом не должно измениться.
     var num = 47;
     num = num + 7;
     num = num - 18;
     num = num * 10;
     num = num / 15;
     alert(num);
 */
var num = 47;
num += 7;
num -= 18;
num *= 10;
num /= 15;
//alert(num);
/*
    Переделайте этот код так, чтобы в нем использовались операции ++ и --. Количество строк кода при этом не должно измениться.
    var num = 10;
    num = num + 1;
    num = num + 1;
    num = num - 1;
    alert(num);
*/
var num = 10;
num++;
num++;
num--;
//alert(num);

/*
    Напишите скрипт, который находит площадь прямоугольника высота 23см. (в числовую переменную height), шириной 10см (в числовую переменную width), значение площади должно хранится в числовой переменной s.
*/
function area() {
    let height = 23;
    let width = 10;
    let s = height * width;
    console.log(s);
}
//area();

/*
  Напиши скрипт, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC), результат поместите в переменную v.
*/

function volume() {
    let heightC = 10;
    let dC = 4;
    const PI = 3.14;
    let radius = dC / 2;
    let s = PI * Math.pow(radius, 2);
    let VolumeC = s * heightC;
    console.log(VolumeC);
}
//volume();


/*
   У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4). Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ). 
*/
function treangle() {
    let n = 3;
    let m = 4;
    let k = Math.pow(n, 2) + Math.pow(m, 2);
    console.log(Math.sqrt(k));
}
//treangle();
/*
Найди двенадцатый элемент (let nFib = 12, el12;) последовательности Леонардо Пизанского (нужно использовать функцию Math.pow(число, степень)). Не забудьте округлить полученное число до целого — Math.round(число).
*/
function fib() {
    let nfib = 12;
    let firstNum = 1;
    let secondNum = 1;
    for (i = 3; i <= nfib; i++) {
        let newNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = newNum;
    }
    console.log(secondNum);
}
//fib();
/*
Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
Оба цикла выводят alert с одинаковыми значениями или нет?
Префиксный вариант ++i:
let i = 0;

while (++i < 5) alert( i );

Постфиксный вариант i++
let i = 0;

while (i++ < 5) alert( i );

ОТВЕТ в первом случае i= 4, во втором i = 5.
*/

/*
  Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
    Оба цикла выведут alert с одинаковыми значениями или нет?
    Постфиксная форма:
    for (let i = 0; i < 5; i++) alert( i );
    Префиксная форма:
    for (let i = 0; i < 5; ++i) alert( i );  

    ОТВЕТ оба выведут от 0 до 4 включительно
*/

/*
    При помощи цикла for выведите чётные числа от 2 до 10.
*/

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        //alert(i);
    }
}

/*
    Перепишите код, заменив цикл for на while, без изменения поведения цикла.
    for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
    }
*/
/*let i =0;
while(i<3){
    alert( `number ${i}!` );
    i++;
}*/


/*
    Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

    Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

    Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

*/

function hundred() {
    let int;
    do {
        int = prompt('введите число больше 100', 0);
    } while (int < 100 && int)
}
//hundred();
/*
    Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.

    Другими словами, n > 1 – простое, если при его делении на любое число кроме 1 и n есть остаток.

    Например, 5 это простое число, оно не может быть разделено без остатка на 2, 3 и 4.

    Напишите код, который выводит все простые числа из интервала от 2 до n.

    Для n = 10 результат должен быть 2,3,5,7.

    P.S. Код также должен легко модифицироваться для любых других интервалов.

*/

function simpleNum() {
    let n = 100;
    next:
    for (let i = 2; i <= n; i++) {
        for (let a = 2; a < i; a++) {
            if (i % a == 0) {
                continue next;
            }
        }
        console.log(i);
    }
}
//simpleNum();

/*
Напишите if..else, соответствующий следующему switch:
    switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;
    default:
        alert( 'We hope that this page looks ok!' );
    }

*/

function browsers() {
    let browser = 'asfd';
    if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
        alert('Okay we support these browsers too');
    } else if (browser === 'Edge') {
        alert("You've got the Edge!");
    } else {
        alert('We hope that this page looks ok!');
    }
}
//browsers();


/*
Перепишите код с использованием одной конструкции switch:

    const number = +prompt('Введите число между 0 и 3', '');
    if (number === 0) {
    alert('Вы ввели число 0');
    }
    if (number === 1) {
    alert('Вы ввели число 1');
    }
    if (number === 2 || number === 3) {
    alert('Вы ввели число 2, а может и 3');
    }
*/
function getNumber() {
    const number = +prompt('Введите число между 0 и 3', '');
    switch (number) {
        case 0:
            alert('Вы ввели число 0');
            break;
        case 1:
            alert('Вы ввели число 1');
            break;
        case 2:
        case 3:
            alert('Вы ввели число 2, а может и 3');
            break;
        default:
            alert('не то число');
    }
}
//getNumber();

/*
    Выведите столбец чисел от 1 до 50.
*/
function columnNumber() {
    for (let i = 1; i <= 50; i++) {
        console.log(i);
    }
}
//columnNumber();

/*
    Определите сколько раз выполнится цикл while? Примечание: это можно сделать прочитав скрипт или запустив его консоли браузера.

    var i = 2;
    while( i < 9 ){
    console.log( i++ );
    }
    
    ОТВЕТ выполнится 7 разБ, от 2х до 8
*/

/*
    Напишите скрипт, который используя оператор while выведет все числа от 45 до 67.
    Напишите скрипт, который используя оператор while выведет все числа от 45 до 670, кратные 10.
*/
function shareTen() {
    let num = 45;
    while (num <= 670) {
        num++;
        if (num % 10 !== 0) {
            continue;
        }
        console.log(num);
    }
}
//shareTen();
/*
    
Переменная n хранит целое число от 0 до 9. Используя оператор switch, написать скрипт, который в зависимости от числа будет выводить слово (Например, если n равно 3, то будет выводиться слово «три»)

var n = 5;
switch( n ){
//Напишите тут св
*/

var n = 5;
switch (n) {
    case 1:
        console.log('one');
        break;
    case 2:
        console.log('two');
        break;
    case 3:
        console.log('three');
        break;
    case 4:
        console.log('four');
        break;
    case 5:
        console.log('Five');
        break;
    // и т.д
}

/*
    Используя document.write() и любую из циклических конструкций выведите  десять одинаковых изображений (надо выводить <img src="..." alt="..." />)
*/
function img() {
    let img = "\<img src\='img/logo.png' alt\='logo'\>";
    for (let i = 1; i <= 10; i++) {
        document.write(img);
    }
}
//img();

/*
    В переменных size и unit хранятся размер и единицы измерения информации 120 и «Кб» 
    соответственно. Зная что могут быть заданные Кб, Мб, Гб (кило-, мега- и гигабайты)
     и 1килобайт равен 1024 байта, найти количество байт в size.
*/
function sizeKb() {
    let size = 120;
    let unit = 'Кб';
    let bite = size * 1024;
    console.log(bite);
}
//sizeKb();

/*
    Выведите столбец чисел от 1 до 100.
*/
function listNumber() {
    let num = 100;
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }

}
//listNumber();

/*
Выведите столбец чисел от 11 до 33.
*/
function listNumber2() {
    for (let i = 11; i <= 33; i++) {
        console.log(i);
    }
}
//listNumber2();

/*
    Выведите столбец четных чисел в промежутке от 0 до 100.
*/
function listNumber3() {
    for (let i = 0; i <= 100; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
//listNumber3();


//С помощью цикла найдите сумму чисел от 1 до 100.
function listSumNumber() {
    let num = 100;
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    console.log(sum);
}
//listSumNumber();
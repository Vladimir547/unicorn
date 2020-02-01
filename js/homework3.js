/*
               function makeCounter() {
               let count = 0;
               return function() {
                   return count++;
               };
               }
               let counter = makeCounter();
               let counter2 = makeCounter();
               alert( counter() ); // 0
               alert( counter() ); // 1
               alert( counter2() ); // 0
               alert( counter2() ); // 1

           */

/*
    Дана функция ggg. Она требует первым параметром число,
     вторым функцию, которая возводит в квадрат, а третьим параметром
      функцию, которая возводит в куб. Эти функции
     есть как Function Declaration - kvadrat, kub. П
    функция ggg вернет сумму квадрата и куба числа.
 
*/
'use strict';
function squere(number) {
    let result = Math.pow(number, 2);
    return result;
}
function kube(number) {
    let result = Math.pow(number, 3);
    return result;
}
function ggg(number, squere, kube) {
    return 'This is square: ' + squere(number) + ', This is kube: ' + kube(number);
}
//console.log(ggg(3, squere, kube));
/*
    Сделайте функцию each, которая первым параметром принимает массив, 
    а вторым - функцию, которая применится к каждому элементу массива.
     Функция each должна вернуть измененный массив.

*/
let arr = [1, 2, 3, 4, 5];
//arr.forEach(item => console.log(item + 1));
/*
    Сделайте функцию each, которая первым параметром принимает массив,
     а вторым - массив функций, которые по очереди применятся к каждому 
     элементу массива: к первому элементу массива - первая функция, ко второму
    - вторая и так далее пока функции в массиве не закончатся, после этого
     возьмется первая функция, вторая и так далее по кругу

     я не понял сути задания
*/
/*
    Сделайте функцию, каждый вызов который будет генерировать случайные числа
    от 1 до 100, но так, чтобы они не повторялись, пока не будут перебраны все
    числа из этого промежутка. Решите задачу через замыкания - в замыкании
    должен хранится массив чисел, которые уже были сгенерированы функцией.

*/

function generateRondom(max, min) {
    let set = new Set();
    let result = [];
    return function () {
        function getRandom() {
            let random = min + Math.random() * (max + 1 - min);
            return Math.floor(random);
        }
        let getRand = getRandom();
        while (set.has(getRand)) {
            getRand = getRandom();
        }
        set.add(getRand);
        console.log(set);
    };

}
let max = 100;
let min = 1;
let random = generateRondom(max, min);
/*for(let i = min; i < max; i++){
    random();
}*/

/*
     Сделайте функцию, которая считает и выводит количество своих вызовов.
    func(); //выведет 1
    func(); //выведет 2
    func(); //выведет 3
    func(); //выведет 4
*/
function callCount() {
    let time = 0;
    return function () {
        time++;
        console.log(time);
    }
}
let call = callCount();
           /*call();
call();
call();
call();*/
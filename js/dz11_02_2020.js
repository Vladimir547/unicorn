/*
Задача 1
Написать класс Cat, который наследуется от класcа Animal. Класс Animal имеет метод getName (name можно передать в конструктор). Класс Cat имеет метод meow (возвращает строку “Cat {catname} is sayig meow”.
Пример использования:
var cat = new Cat(‘garfield’);
cat.getName() === ‘garfield’; // true
cat.meow() === ‘Cat garfield is saying meow’; // true
Реализовать через привязку контекста и прототип

*/
'use strict';
function Animal(name) {
    this.name = name;
    this.getName = function getName() {
        return this.name;
    }
};
function Cat(name) {
    Animal.call(this, name);
    this.meow = function meow() {
        console.log(`Cat ${this.name} is saying meow`);
    }
}
//let animal = new Animal('bars', 'orange');
Cat.prototype = Object.create(Animal.prototype);
let cat = new Cat('garfield');
cat.getName();
console.log(cat.name);
cat.meow();

/*
Задача 2
Реализуйте класс Student (Студент), который будет наследовать от класса User. Этот класс должен иметь 
следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year 
(год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью 
которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(),
который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять 
год поступления в вуз. Текущий год получите самостоятельно. Реализовать также приватное поле gender с возможностью
менять его (геттер и сеттер). Реализовать метод healCorn2019(), чтоб при вызове у любого объекта User или Student 
в консоли писало сообщение “Короновирус никогда не победит JS”(prototype).Реализовать через привязку контекста и прототип
*/
function User(name, surname, yearEntering) {
    this.name = name;
    this.surname = surname;
    this.year = yearEntering;
    this.getFullName = function () {
        return `${name} ${surname}`;
    }
    this.setGender = function (gender) {
        this.gender = gender;
    }
    this.getGender = function () {
        return this.gender;
    }
}
User.prototype.healCorn2019 = function healCorn2019() {
    console.log('Короновирус никогда не победит JS');
};
function Student(name, surname, yearEntering) {
    User.apply(this,[name, surname, yearEntering]);
    this.getCourse = function () {
        let now = new Date().getFullYear();
        if (now - this.year <= 5) {
            return now - this.year;
        } else {
            return `${this.name} ${this.surname} finished university`;
        }
    }
}
Student.prototype = Object.create(User.prototype);
let student = new Student('Vova', 'Ilyushin', 2014);
student.setGender('Male');
console.log(student.getGender());
student.setGender('female');
console.log(student.getGender());
console.log(student.getFullName());
console.log(student.healCorn2019());
console.log(student.getCourse());

/*В коде ниже класс Rabbit наследует Animal.
К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
class Animal {
  constructor(name) {
    this.name = name;
  }
}
class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}
let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
alert(rabbit.name);


потому что нет ключевого слова супер
*/

/* 
У нас есть класс Clock. Сейчас он выводит время каждую секунду
class Clock {
  constructor({ template }) {
    this.template = template;
  }
  render() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;
    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;
    let output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

Создайте новый класс ExtendedClock, который будет наследоваться от Clock и 
добавьте параметр precision – количество миллисекунд между «тиками». Установите значение в 1000 (1 секунда) по умолчанию.
Сохраните ваш код в файл extended-clock.js
Не изменяйте класс clock.js. Расширьте его.

*/
class Clock {
    constructor({ template }) {
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) {
            hours = '0' + hours;
        }
        let min = date.getMinutes();
        if (min < 10) {
            min = '0' + min;
        }
        let sec = date.getSeconds();
        if (sec < 10) {
            sec = '0' + sec;
        }
        let output = this.template.replace('h', hours).replace('m', min).replace('s', sec);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
class ExtendedClock extends Clock {
    constructor(args) {
        super(args);
        let { precision = 1000 } = args;
        this.precision = precision;
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
}
let clo = new ExtendedClock({ template: 'h:m:s', precision: 10 });
//clo.start();

/*
    Написать класс Cat, который наследуется от класcа Animal. Класс Animal имеет метод getName (name можно передать в конструктор). Класс Cat имеет метод meow (возвращает строку “Cat {catname} is sayig meow”.
    Пример использования:
    var cat = new Cat(‘garfield’);
    cat.getName() === ‘garfield’; // true
    cat.meow() === ‘Cat garfield is saying meow’; // true
*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    meow() {
        return `Cat ${this.name} is sayig meow`;
    }
}
let cat = new Cat('garfield');
//console.log(cat.meow());

/*
  Создайте функцию-конструктор Calculator, который создаёт объекты с тремя методами:
  read() запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта.
  sum() возвращает сумму введённых свойств.
  mul() возвращает произведение введённых свойств.

  Например:
  let calculator = new Calculator();
  calculator.read();
  alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

*/
class Calculator {
    read() {
        this.a = prompt('enter number');
        this.b = prompt('enter number');
        return this.a, this.b;
    }
    sum() {
        return Number(this.a) + Number(this.b);
    }
    mul() {
        return this.a * this.b;
    }
}
let calc = new Calculator();
/*calc.read();
alert("Sum=" + calc.sum());
alert("Mul=" + calc.mul());*/

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};


/*
Context 1

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname()); // вернёт Aurelio De Rosa, т.к вызывается функция на прямую из объекта в данном случе this это объек prop

var test = obj.prop.getFullname; // нечего не вернёт

console.log(test()); // вернёт John Doe , т.к нет use strcit из-за этого this будет глобальным объектом window




Context 2

var bar = "xo xo";

var foo = {
    bar: "lorem ipsum"
};

function test () {
    return this.bar;
}

console.log(test()); 
// => будет хо-хо т.к в данном случае контекст это window
console.log(test.call(foo));
// => будет lorem ipsum, т.к вызываем объект фуу и контекст берем от туда
console.log(test.apply(foo));
// => будет lorem ipsum, та же причина что и выше




Context 3

function Car() {
    this.b = "Hello, arrow function";
    this.func = () => (console.log(this.b))
}

function Truck() {
    this.b = "Real big truck";
    this.func = () => (console.log(this.b))
}

let car = new Car();
let truck = new Truck();

var magicCar = {
    b: "Wow, realy? OMG"
}

let magicTruck = {
    b: “It’s just Volvo, man!”;
}

magicCar.func = car.func;
magicTruck.func  = truck.func;

magicCar.func(); // у стрелочных функций нет своего this, и они берут его снаружи, поэтому будет "Hello, arrow function", не сразу дошло)))
magicTruck.func(); // у стрелочных функций нет своего this, и они берут его снаружи, поэтому будет "Real big truck"




Context 4

var globus = 'i\'m cube';

function logger() {
  console.log(this.globus);
}

let testWorld = {
  globus: 'this is test world'
};

testWorld.logger = logger;
testWorld.logger(); // 'this is test world' т.к вызываем this внутри объекта testWorld
logger.call(this) //'i\'m cube' , т.к вызываем с помощью this window

*/

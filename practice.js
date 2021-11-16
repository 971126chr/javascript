//변수 (variable) 공부

const a = 5;
const b = 2;
let myName = "HR";
    
console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);
    
myName = "Hye Ryeong";
    
console.log("Your new name is " + myName);
    
//data type 중 boolean 공부

const hello = true;
console.log(hello);

const bye = null;
let something;
console.log(something, bye);

//array 데이터 구조 공부

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun";

const daysOfWeek = [mon , tue , wed , thu , fri , sat];

console.log(daysOfWeek);

//array에 요소 추가하기

daysOfWeek.push(sun);

console.log(daysOfWeek);

//object 연습

const player = {
	name: "Hye Ryeong",
    points: 971126,
    happy: "so so",
};
console.log(player);
console.log(player.name);

//object update하기

player.happy = "no";
console.log(player);

//function 공부

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("Hye Ryeong", 25);
sayHello("sumin", 28);

function plus(a, b) {
    console.log(a + b);
}

plus(25, 28);

const player = {
    name: "HR",
    sayHello: function(otherPersonsName){
        console.log("Hello! " + otherPersonsName + " nice to meet you");
    },
};

console.log(player.name);
player.sayHello("sum");

// a + b, a - b, a / b, a**b 나타내보기 예제

//내가 한 것
function example(a ,b) {
    console.log(a + b);
    console.log(a - b);
    console.log(a ** b);
}

example (3, 7);

//노마드코더에서 object 사용하여 만들라고 한 것!
const calculator = {
    add: function(a, b) {
        console.log(a + b);
    },
    minus: function(a, b) {
        console.log(a - b);
    },
    squared: function(a, b) {
        console.log(a ** b);
    },
}

calculator.add(3,7);
calculator.minus(3,7);
calculator.squared(3,7);

//return 공부

const age= 25;
function calculateAmAge(ageOfForeigner) {
    return ageOfForeigner - 2; 
}

const AmAge = calculateAmAge(age);

console.log(AmAge);

//return 적용해보기

const calculator = {
    plus: function(a, b) {
        return a + b;
    },
    minus: function(a, b) {
        return a - b;
    },
    multiple: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    },
    power: function(a, b) {
        return a ** b;
    }
};

/* return 사용 시에는 이렇게가 아니다.
calculator.add(3,7);
calculator.minus(3,7);
calculator.multiple(3,7);
*/

const plusResult = calculator.plus(3, 7);
const minusResult = calculator.minus(plusResult, 10);
const multipleResult = calculator.multiple(10, minusResult);
const divideResult = calculator.divide(multipleResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);

//조건문 공부

const age = parseInt( prompt("How old are you?") );

console.log(age);
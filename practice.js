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
const calculater = {
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

calculater.add(3,7);
calculater.minus(3,7);
calculater.squared(3,7);
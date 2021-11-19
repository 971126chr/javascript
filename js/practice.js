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

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

//조건문 if와 else 공부

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}

//조건문 else if 공부

const age = parseInt(prompt("How old are you?"));

if(isNaN(age)) {
    console.log("Please write a number");
} else if(age < 18) {
    console.log("You are too young.");
} else {
    console.log("You can drink");
}

//조건문 and연산자와 or연산자 공부

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink");
} else if(age > 50 && age <= 80) {
    console.log("You should exercise");
} else if(age > 80) {
    console.log("You can do whatever you want.");
}

// =와 !==와 ===의 차이 공부

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink");
} else if(age > 50 && age <= 80) {
    console.log("You should exercise");
} else if(age === 100) {
    console.log("WOW you are wise");
} else if(age > 80) {
    console.log("You can do whatever you want.");
}

//JS와 HTML 연결된 상태 공부하기

//getElementById
const title = document.getElementById("title");

title.innerText = "Got you!";

console.log(title.className);

//getElementsByClassName
const hellos = document.getElementsByClassName("hello");

console.log(hellos);

//querySelector 공부
const title = document.querySelector(".hello h1");

console.log(title);

title.style.color = "blue";

//event 공부

//click event
const title = document.querySelector(".hello h1");

function handleTitleClick() {
    title.style.color = "blue";
}

//mouseEnter event
function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}

//mouseLeave event
function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

//resisze event
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

//copy event
function handleWindowCopy() {
    alert("copier!");
}

//offline event
function handleWindowOffline() {
    alert("SOS no WIFI");
}

//online event
function handleWindowOnline() {
    alert("ALL GOOD!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//click event와 if-else 사용
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "red";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);

//click event를 이용한 css 접근법

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    const clickedClass = "active";
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);

//classList 공부

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    const clickedClass = "active";
    if (h1.classList.contains(clickedClass)) {
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}

h1.addEventListener("click", handleTitleClick);

//classList toggle 공부
const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);
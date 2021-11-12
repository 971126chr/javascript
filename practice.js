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
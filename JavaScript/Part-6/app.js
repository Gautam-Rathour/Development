// ===========================================================================
// ===========================================================================

// function hello() {
//     console.log("Hello World")
// }

// hello();
// hello();
// hello();

// =======================================================

// function isAdult() {
//     let age = 17;

//     if(age >= 18) {
//         console.log("You are an adult");
//     } else {
//         console.log("You are not an adult");
//     }
// }
// isAdult();

// ===========================================================

// function printPoem() {
//     console.log("Twinkle Twinkle, little star");
//     console.log("How I wander what you are");
// }
// printPoem();

// ===========================================================

// function rollDice() {
//     let max = 6;
//     let random = Math.floor(Math.random() * max) + 1;
//     console.log(random);
// }
// rollDice();

// ===========================================================

// function printName(name) {
//     console.log(name);
// }
// printName("John");

// function printName(name, age) {
//     console.log(name + " your age is : - " + age);
// }
// printName("John", 34);

// ===========================================================

// function sum(a , b) {
//     console.log(a + b);
// }
// sum (34, 63);

// ===========================================================

// function avg(a, b, c) {
//     let sum = a + b + c;
//     let average = sum / 3;
//     console.log(average);
// }
// avg(34, 63, 90); // 

// ===========================================================

// function printTable (n) {
//     for(let i=1; i<=10; i++) {
//         console.log(n + " * " + i + " = " + n*i)
//     }
// }
// printTable(73); // 5 * 1 = 5

// ===========================================================

// function sum(a , b) {
//     return a + b;
// }
// console.log(sum(34, 7));

// function isAdult(age) {
//     if(age >= 18) {
//         return "Adult";
//     } else {
//         return "Not Adult";
//     }
// }

// console.log(isAdult(45));

// ===========================================================

// // Practice Qs : --
// function getSum(n) {
//     let sum = 0;
//     for(let i=1; i<=n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(getSum(100));

// ===========================================================

// let str = ["hi", "hello", "bye", "!"];
// function concat(str) {
//     let result = "";

//     for(let i=0; i<str.length; i++) {
//         result += str[i];
//     }
//     return result;
// }
// console.log(concat(str));

// ===========================================================

// let sum = 34; //Global Scope

// function calSum(a, b) {
//     // let sum = a + b; //Funnction Scope
//     console.log(sum);
// }

// calSum(1, 3);
// console.log(sum);

// ===========================================================

// scope :: --
// {
//     var a = 35;
// }
// console.log(a);


// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//         console.log(y);
//     }

//     innerFunc();
// }
// outerFunc();

// ===========================================================

// // let sum = function(a,b) {
// //     return a + b;
// // }
// // console.log(sum(5, 3));


// let hello = function() {
//     console.log("Hello");
// }
// hello = function() {
//     console.log("namaste");
// }
// console.log(hello());

// ===========================================================

// function multipalGreet(func, count) {   // higher order function
//     for(let i=1; i<=count; i++) {
//         func();
//     }
// }
// let greet = function () {
//     console.log("Hello");
// }
// multipalGreet(greet, 5); // Hello Hello Hello Hello Hello

// ===========================================================
// ===========================================================

// let odd = function(n) {
//     console.log(!(n%2 == 0));
// }
// let even = function(n) {
//     console.log((n%2 == 0));
// }

// // =======================================

// function oddOrEvenFactory(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }
//     } else if(request == "even"){
//         return function(n) {
//             console.log((n%2 == 0));
//         }
//     } else {
//         console.log("Invalid request");
//     }
// }

// let request = "odd"; //even
// // console.log(oddOrEvenFactory(even(9)));

// ===========================================================
// ===========================================================

// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     sub: function(a, b) {
//         return a - b;
//     },
//     mul: function(a, b) {
//         return a * b;
//     },
//     div: function(a, b) {
//         return a / b;
//     }
// }


// const calculator = {
//     add(a, b) {
//         return a + b;
//     },
//     sub(a, b) {
//         return a - b;
//     },
//     mul(a, b) {
//         return a * b;
//     },
//     div(a, b) {
//         return a / b;
//     }
// }
// console.log(calculator.add(8, 4));
// console.log(calculator.sub(8, 4));
// console.log(calculator.mul(8, 4));
// console.log(calculator.div(8, 4));

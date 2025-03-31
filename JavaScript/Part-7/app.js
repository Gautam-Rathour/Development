// ===========================================================
// ===========================================================

// const student = {
//     name: "shradha",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }
// console.log(student.getAvg());

// function getAvg() {
//     console.log(this);
// }

// ===========================================================
// ===========================================================

// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch {
//     console.log("caught an error... a is not defined.");
// }

// console.log("hello");
// console.log("hello");
// console.log("hello");

// ===========================================================

// // sum : --
// const sum = (a, b) => {
//     console.log(a + b);
// }

// sum(4, 6);
// sum(5, 3);

// // cube : --
// const cube = (n) => {
//     console.log(n * n * n);
// }
// cube(5);

// // pow : --
// const pow = (a, b) => {
//     console.log(a ** b);
// }
// pow(5, 3);

// // mul : --
// const mul = (a, b) => (a * b);
// console.log(mul(3, 3));

// ===========================================================
// ===========================================================

// console.log("hi there!");

// setTimeout( () => {
//     console.log("Saurabh ke ghar..!");
// }, 3000);

// console.log("welcome to");
// console.log("welcome to");
// console.log("welcome to");


// let id = setInterval( () => {
//     console.log("Saurabh ke ghar aa jao n!");
// }, 2000);


// let id2 = setInterval( () => {
//     console.log("Mere ghar aa jao n!");
// }, 3000);

// clearInterval(id);
// clearInterval(id2);

// ===========================================================
// ===========================================================

// const student = {
//     Name : "aman",
//     marks: 95,
//     prop: this, //global scope
//     getName: function() {
//         return this.Name;
//     },
//     getMarks: () => {
//         console.log(this); //parent's scope -> window
//         return this.marks;
//     },
//     getInfo1: function() {
//         setTimeout( () => {
//             console.log("this");  //student
//         }, 2000);
//     },
//     getInfo2: function () {
//         setTimeour(function () {
//             console.log("this"); // window
//         }, 2000);
//     },
// };

// // const a = 5; // global scope
// // console.log(student.getName());
// // console.log(student.getMarks());

// console.log(student.getInfo1());
// console.log(student.getInfo2());

// ===========================================================
// ===========================================================

// // Practice Qs : --
// square = ( n => {
//     console.log(n * n);
// })
// // square = (n) => (n * n);
// console.log(square(40));

// // Practice Qs : --
const id1 = setInterval( () => {
    console.log("Hello");
}, 2000);

setTimeout( () => {
    clearInterval(id1);
}, 10000)

// ===========================================================
// ===========================================================
// // Practice Qs : --







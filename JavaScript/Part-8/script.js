// let arr = [1,2, 3, 4, 5];

// arr.forEach(function(el) {
//     console.log(el);
// });
//  console.log("Space...");
// // ==========================================================

// arr.forEach((el) => {
//     console.log(el);
// })
// console.log("Space...");
// // ==========================================================

// let  print = function(el) {
//     console.log(el);
// }
// arr.forEach(print);

// console.log("Space...");

// =====================================================================================
// =====================================================================================

// // Object : ---

// let arr = [{
//     name: "John",
//     marks: 95,
// }, {
//     name: "mohit",
//     marks: 85,
// },{
//     name: "Bob",
//     marks: 75,
// }]

// console.log(arr[1].name);
// console.log(arr[1].marks);



// =====================================================================================
// =====================================================================================

// // Map : ---

// let num = [1, 2, 3, 4, 5];

// let double = num.map((el) => {
//     return  el * el;
// });
// console.log(double);


// // Map : ---
// let students = [{
//     name: "John",
//     marks: 95,
// }, {
//     name: "mohit",
//     marks: 85,
// },{
//     name: "Bob",
//     marks: 75,
// }]

// let gpa = students.map((el) => {
//     return el.marks / 10;
// });
// console.log(gpa);
// // console.log(arr[1].name);
// // console.log(arr[1].marks);

// =====================================================================================
// =====================================================================================

// // // Filter : ---
// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

// let even = nums.filter((el) => {
//     let ans = el % 2 == 0;
//     return ans;
// })

// console.log(even);

// =====================================================================================
// =====================================================================================

// // // Every : ---
// let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];
// let isEven = nums.every((el) => {
//     return el % 2 == 0;
// })

// console.log(isEven);

// ==========================================================

// // Reduce : ---
// let nums = [2, 4, 1, 5, 6, 2];
// let sum = nums.reduce((res, el) => res + el);
// console.log(sum);

// =====================================================================================
// =====================================================================================

// let arr = [1, 4, 2, 5, 6, 7, 2, 9, 2];

// let max = -1;
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max);


// let max = arr.reduce((max, el) => {
//     if(max > el) {
//         return max;
//     } else {
//         return el;
//     }
// })
// console.log(max);

// ==========================================================

// // Practice Qs : ----
// // Check all number's are multipal of 10 or not.
// let num = [10, 20, 30, 40];

// let result = num.every((el) => el % 10 == 0);
// console.log(result);

// // Practice Qs : ----
// let arr = [3, 4, 2, 5, 6, 7, 2, 9, 2];

// let min = arr[0];
// for(let i=0; i<arr.length; i++) {
//     if(arr[i] < min) {
//         min = arr[i]
//     }
// }
// console.log(min);
// // The help of reduce method : -
// let min = arr.reduce((res, el) => {
//     if(res > el) {
//         return el;
//     } else {
//         return res;
//     }
// })
// console.log(min);

// =====================================================================================
// =====================================================================================

// // Default Parameters : ----

// function sum(a, b = 4) {
//     return a + b;
// }
// console.log(sum(3));

// ==========================================================

// // Spread  : ----  (...)

// let arr = [1, 2, 3, 4, 5];
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));

// console.log(arr);
// console.log(...arr); //Spread the things.

// let newArr = [...arr];
// console.log(newArr);

// let name = "MohitDhaba";
// console.log(...name);

// ==========================================================
// // Spread  : ---  (...)

// const data = {
//     email: "mohit123@gmail.com",
//     password: "abcd",
// };

// const dataCopy = {...data, id: 123, country: "India"};
// console.log(dataCopy);

// let arr = [1,2, 3, 4, 5]; //val
// let obj1 = {...arr}; //obj -> key:val
// console.log(obj1);

// let obj2 = {..."hello"};
// console.log(obj2);


// =====================================================================================
// =====================================================================================

// // Rest  : ---
// function sum(...args) {
//     for(let i=0; i<args.length; i++) {
//         console.log("you gave us:" , args[i]);
//     }
// }

// // const ans = sum(1,2,3);
// // const ans = sum(1,2,3,4);
// const ans = sum(1,2,3,4,5);
// console.log(ans);


// function min() {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(5);
// }
// console.log(min());

// console.log(min(1,2,3,4));

// =====================================================================================
// =====================================================================================

// Destructuring : ---

// let names = ["tony", 'bruce', "peter", "steve", "moni"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

// let [winner, runnerup, ...others] = names;

// console.log(winner);
// console.log(runnerup);
// console.log(secondRunnerup);

// console.log(others);

// ==========================================================

const student = {
    name: "tony",
    age: 25,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
    city: "pune",
};

// let username = student.username; //    \/
// let password = student.password; //    /\

let {username: user , password, city="Delhi"} = student;

console.log(user);
console.log(password);
console.log(city);

















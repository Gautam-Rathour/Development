
// ==============================================================================================


// h1 = document.querySelector("h1");

// function changeColor(color, delay) { 
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if(num > 3) {
//                 reject("Promise rejected");
//             }
//             h1.style.color = color;
//             console.log(`color changed to ${color}!`);
//             resolve("color changed!");
//         }, delay)
//     });
// }

// async function demo() {
//     try {
//         await changeColor("red", 1000);
//         await changeColor("orange", 1000);
//         await changeColor("green", 1000);
//         await changeColor("yellowgreen", 1000);
//     } catch (err) {
//         console.log("error caught");
//         console.log(err);
//     }
    

//     let a = 5;
//     console.log(a);
//     console.log("New number : ", a + 3);
// }

// ==============================================================================================


// changeColor("red", 2000)
// .then(() => {
//     console.log("red color was completed");
//     return changeColor("orange", 2000);
// })
// .then(() => {
//     console.log("orange color was completed");
//     return changeColor("green", 2000);
// })
// .then(() => {
//     console.log("green color was completed");
//     return changeColor("blue", 2000);
// })
// .then(() => {
//     console.log("blue color was completed");
// });

// ==============================================================================================
// ==============================================================================================


// async function greet () {
//     throw "weak connection";
//     return "hello!";
// }

// greet()
// .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
// }).catch((err) => {
//     console.log("promise was rejected err : " , err);
// });

// let demo = async () => {
//     return 5;
// };

// ==============================================================================================
// ==============================================================================================

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     getNum();
//     getNum();
// }

// ==============================================================================================
// ==============================================================================================


// let student = {
//     name: "shradha",
//     marks: 95,
//     age: 45
// }

// let json = JSON.stringify(student);
// console.log(json);

// ==============================================================================================
// ==============================================================================================



// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data1) => {
//     console.log("Data1 = " , data1.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("Data2 = " , data2.fact);
//     return fetch(url);
// })
// .catch((err) => {
//     console.log("Error -  " , err);
// });

// console.log("I am happy");

// ==============================================================================================
// ==============================================================================================

let url = "https://catfact.ninja/fact";

async function getFacts() {
        try {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data.fact);

            let res2 = await fetch(url);
            let data2 = await res2.json();
            console.log(data2.fact);
        } catch (err) {
        console.log("Error - ", err);
    }
    console.log("bye.");
}




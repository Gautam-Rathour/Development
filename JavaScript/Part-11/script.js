// function hello() {
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function demo() {
//     console.log("calling hello fnx");
// }

// console.log("calling demo fnx");
// demo();
// console.log("done, bye!");

// ==============================================================================================
// ==============================================================================================


// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans =  two() + one();
//     console.log(ans);
// }

// three();

// ==============================================================================================

// let a = 34;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a + b);


// setTimeout(() => {
//     console.log("hello Mohit1.")
// }, 2000);

// setTimeout(() => {
//     console.log("hello Mohit2.")
// }, 2000);

// console.log("hello....")

// ==============================================================================================
// ==============================================================================================

// h1 = document.querySelector("h1");

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "blue";
// }, 3000);

// ==============================================================================================


// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) { 
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange)nextColorChange();
//     }, delay)
// }

// // Callbacks nesting  : ---  (callback hell)
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("blue", 1000, () => {
//             changeColor("green", 1000);
//         });
//     });
// });


// ==============================================================================================
// ==============================================================================================

// // Nesting : - ( Callback Hell ) --

// function savetoDb (data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// savetoDb(
//     "Mohit dhabha", 
//     () => {
//     console.log("your data was saved.");
//         savetoDb(
//             "Mohit papu hai",
//             () => {
//                 console.log("success2: data2 saved");
//                 savetoDb(
//                     "Mohit Noha",
//                     () => {
//                         console.log("success3: data3 saved");
//                     }, 
//                     () => {
//                         console.log("failure3: weak connection")
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2: weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("week connection. data not saved");
//     }
// );


// ==============================================================================================
// ==============================================================================================

// Promises :  -----


function savetoDb (data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
                resolve("success : data was saved");
            } else {
                reject("failure : weak connection");
            }
    });
}


savetoDb("Mohit babu")
.then((result) => {
    console.log("data1 saved.");
    console.log("Result of promise :- ", result);
    return savetoDb("helloworld");
})
.then((result) => {
    console.log("data2 saved");
    console.log("Result of promise :- ", result);
    return savetoDb("Saurabh.");
})
.then((result) => {
    console.log("data3 saved");
    console.log("Result of promise :- ", result)
})
.catch((error) => {
    console.log("promise was rejected.");
    console.log("Error of promise :- ", error);
})












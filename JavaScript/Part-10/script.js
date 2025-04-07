// let btns = document.querySelectorAll("button");
// console.dir(btns);

// // btn.onclick = function() {
// //     console.log("Button clicked!");
// // }

// for(btn of btns) {
//     // btn.onclick = sayHello;
//     // btn.onclick = sayName;
    
//     // btn.addEventListener("click", sayHello);
//     // btn.addEventListener("click", sayName);

//     btn.addEventListener("dblclick", function() {
//         console.log("you bouble clicked me");
//     })

//     // btn.onmouseenter = function () {
//     //     console.log("you entered a button");
//     // }
//     // console.dir(btn);
// }

// function sayHello() {
//     alert("Hello!");
// }

// function sayName () {
//     alert("My name is Mohit.");
// }
// // btn.onclick = sayHello;


// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// ==============================================================================================

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerHTML = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = getRandomColor();
// })

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// ==============================================================================================
// ==============================================================================================


// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");



// function changeColor() {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "pink";
// }

// btn.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor);

// ==============================================================================================
// ==============================================================================================


// let inp = document.querySelector("input");
// // inp.addEventListener("keydown", function() {
// //     console.log("key was pressed");
// // });


// // inp.addEventListener("keyup", function() {
// //     console.log("key = " + event.key);
// //     console.log("code = ", event.code);
// //     console.log("key was pressed");
// // });


// inp.addEventListener("keyup", function(event) {
//     console.log("code = " + event.code); //ArrowUp, ArrowDown, ArrawLeft, ArrowRight
//     if(event.code == "keyU") {
//         console.log("character moves forward");
//     } else if(event.code == "keyD") {
//         console.log("character moves backward");
//     } else if(event.code == "keyL") {
//         console.log("character moves left");
//     } else if(event.code == "keyR") {
//         console.log("character moves right");
//     }






    // console.log("code = ", event.code);
    // console.log("key was pressed");
// });

// ==============================================================================================
// ==============================================================================================

// let form = document.querySelector("form");

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
// //     // alert("form submitted");

// //     let user = document.querySelector("#user");
// //     let pass = document.querySelector("#pass");
// //     console.log(`UserName = ${user.value}`);
// //     console.log(`Password = ${pass.value}`);

// //     alert(`Hi ${user.value} your password is set to ${pass.value} `);
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function() {
//     console.log("input changed");
//     console.log("final value = ", this.value);
// })


// user.addEventListener("input", function() {
//     console.log("input event");
//     console.log("final value = ", this.value);
// })

// ==============================================================================================
// ==============================================================================================

let inp = document.querySelector("#text");
let p = document.querySelector("p");

inp.addEventListener("input", function() {
    console.log(inp.value);
    p.innerText = inp.value;
})

















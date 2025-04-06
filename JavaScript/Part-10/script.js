let btns = document.querySelectorAll("button");
console.dir(btns);

// btn.onclick = function() {
//     console.log("Button clicked!");
// }

for(btn of btns) {
    btn.onclick = sayHello;
}

function sayHello() {
    alert("Hello!");
}
// btn.onclick = sayHello;
























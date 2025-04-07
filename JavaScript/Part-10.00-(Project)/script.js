// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");


// div.addEventListener("click", function() {
//     console.log("div was clicked");
// })

// ul.addEventListener("click", function(event) {
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for(li of lis) {
//     li.addEventListener("click", function(event) {
//         event.stopPropagation();
//         console.log("li was clicked");
//     })
// }


// ================================================================================================
// ================================================================================================
let ul = document.querySelector("ul");

function addTodo() {
    let input = document.querySelector("input");
    let values = input.value;

    
    let li = document.createElement("li");
    li.innerHTML = values;

    let button = document.createElement("button");
    button.innerHTML = "Delete";
    button.classList.add("delete");
    
    
    li.appendChild(button);
    ul.appendChild(li);
    input.value = "";
}

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        console.log("delete");
    } else {
        console.log("don't delete");
    }
});

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }





























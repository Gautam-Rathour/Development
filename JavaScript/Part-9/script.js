

// let imgObj = document.getElementById(mainImg);
// console.log(imgObj.src);



// let imgObj = document.getElementsByClassName("oldImg")[0];
// undefined
// imgObj.src
// 'http://127.0.0.1:5501/Learn_Development/JavaScript/Part-9/image/creation_1.png'
// imgObj.src = "image/spiderman_img.png";


// let smallImages  = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++) {
//     smallImages[i].src = "image/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }

// ==============================================================================================
// ==============================================================================================


// console.dir(document.querySelectorAll("p"));

// // console.dir(document.querySelector("#description"));

// // console.dir(document.querySelector(".oldImg"));

// console.dir(document.querySelectorAll("div a"));


// ==============================================================================================
// ==============================================================================================

// let para = document.querySelector('p');

// console.log(para);
// console.dir(para);

// let img = document.querySelector("img");
// img.setAttribute("id", "superman");
// // img.src = "image/creation_3.jpeg";
// img.setAttribute("src", "image/creation_3.jpeg");


// ============================================================================

// let img = document.querySelector('img');
// console.dir(img);
// console.log(img.style);

// let heading = document.querySelector('h1');
// console.log(heading.style);
// heading.style.color = "purple";

// let links = document.querySelectorAll(".box a");

// for(link of links) {
//     link.style.color = "green";
// }

// for(let i=0; i<links.length; i++) {
//     links[i].style.color = "red"
// }


// let box = document.querySelector(".box");
// console.log(box.style);

// ============================================================================

// let img = document.querySelector("img");
// console.log(img.classList);
// img.classList.add("superman");
// img.classList.add("modikafan");
// img.classList.remove("superman");
// console.log(img.classList);


// // toggle : ---
// let heading = document.querySelector("h1");
// console.log(heading.classList);
// heading.classList.toggle("green");
// heading.classList.toggle("green");


// let box = document.querySelector(".box");
// console.log(box.classList.toggle("yellowBg"));

// ============================================================================


// Navigation  :  ----
// let nav = document.querySelector("nav");
// let h4 = document.querySelector("h4");
// console.log(h4.parentElement);


// let box = document.querySelector(".box");
// console.log(box.children);

// let img = document.querySelector("img");
// console.log(img.previousElementSibling.style.color = "green");

// let create = document.createElement("div");
// create.innerHTML = "Hello Everyone.";
// // console.log(document.body.appendChild(create));

// let body1 = document.querySelector("body").prepend(create);
// let body2 = document.querySelector("body").append(create);

// let btn = document.createElement("button");
// btn.innerHTML = "NEW BUTTON!";
// let p = document.querySelector("p");

// // p.insertAdjacentElement("beforebegin", btn);
// // p.insertAdjacentElement("afterbegin", btn);
// // p.insertAdjacentElement("beforeend", btn);
// p.insertAdjacentElement("afterend", btn);


// let body = document.querySelector('body');
// body.removeChild(btn);

// body.remove;


// ==============================================================================================
// ==============================================================================================
// ==============================================================================================
// ==============================================================================================


// Practice Qs : ---

// let create = document.createElement("p");
// create.innerHTML = "Hey I'm red!";
// create.style.color = "red";

// document.body.appendChild(create);

// Practice Qs : ---

// let create = document.createElement("h3");
// create.innerHTML = "I'm a blue h3!";
// create.style.color = "blue";
// document.body.appendChild(create);


// // Practice Qs : ---
// let div = document.createElement("div");
// let h1 = document.createElement("h1");
// h1.innerHTML = "I'm in a div"
// let p = document.createElement("p");
// p.innerHTML = "ME TOO!";

// div.style.border = "5px solid black";
// div.style.backgroundColor = "pink";

// div.appendChild(h1).appendChild(p);
// document.body.appendChild(div);






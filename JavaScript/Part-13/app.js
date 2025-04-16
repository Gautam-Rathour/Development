


// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);


//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (err) {
//         console.log("Error : - " , err);
//     }

//     console.log("bye");
// }

// ==============================================================================================
// ==============================================================================================


// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//     // console.log("button was clicked");
//     let data = await getFacts();
//     console.log(data);
//     let p = document.querySelector("#fact").innerHTML = data;
// })
// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(err) {
//         console.log("Error : - " , err);
//         return "No fact found";
//     }
// }

// ==============================================================================================
// ==============================================================================================

// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#fact");
//     img.setAttribute("src", link);
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (err) {
//         console.log("Error : - " , err);
//         return "/";
//     }
// }

// ==============================================================================================
// ==============================================================================================

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {headers: {Accept : "application/json"}}
//         let res = await axios.get(url, config);
//         console.log(res.data);
//     } catch (err) {
//         console.log("Error : - " , err);
//     }
// }


// ==============================================================================================
// ==============================================================================================


const url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    console.log(country);
    let colArr = await getColleges(country);
    show(colArr);
})

function show(colArr) {
    let list = document.querySelector("#list");
    for(col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (err) {
        cosole.log("Error : - " ,  err);
        return [];
    }
}


// ==============================================================================================
// ==============================================================================================



































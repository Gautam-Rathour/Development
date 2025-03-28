// ===========================================================================
// ===========================================================================

//  const student = {
//     name: "mohit",
//     age: 20,
//     marks: 90
//  }
// console.log(student);


// const item = {
//     price: 100.33,
//     discount: 50,
//     colors : ["red", "pink"]
// };
// console.log(item);

// ===================================
// ===================================

// const post = {
//     username : "@mohitbaba",
//     content: "this is my #firstPost",
//     likes: 150,
//     reposts: 5,
//     tags: ["@mohalaClinic", "@delta"],
//     city: "Delhi"
// }
// console.log(post);
// console.log(post.likes);
// console.log(post["username"]);
// console.log(post["city"]);
// post.city = "mumbai";
// console.log(post.city);
// console.log(post);
// delete post.city;
// console.log(post); // still mumbai

// ===================================
// ===================================

// const obj = {
//     1 : "a",
//     2 : "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// }
// console.log(obj);

// ===================================
// ===================================

// const classInfo = {
//     aman: {
//         grade: "A+",
//         city: "Delhi"
//     },
//     mohit: {
//         grade: "A",
//         city: "Pune"
//     },
//     sonu: {
//         grade: "C+",
//         city: "Mumbai"
//     }
// };
// console.log(classInfo.mohit.city);

// ===================================
// ===================================

// const classInfo = [
//     {
//         Name :"aman",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {   Name : "mohit",
//         grade: "A",
//         city: "Pune"
//     },
//     {   Name : "sonu",
//         grade: "C+",
//         city: "Mumbai"
//     }
// ];
// console.log(classInfo[2].Name);

// ===================================
// ===================================

// // Random Number  :: ---

// let step1 = Math.random();
// let step2 = Math.floor(step1 * 5);
// console.log(step2 + 1);

// ===================================

// let max = 100;
// let num = Math.floor(Math.random() * max) + 1;
// console.log(num); // 0 to 100

// ===================================
// ===================================

let max = prompt("Enter the max Number : -");
let random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the Upcoming number!");

while (true) {
    if(guess == "quit") {
        console.log("User quit");
        break;
    }
    if(guess == random) {
        console.log("You were right! congrats! random number was", random);
        break;
    } else {
        guess = prompt("Your guess was wrong, Please try again");
    }
}


















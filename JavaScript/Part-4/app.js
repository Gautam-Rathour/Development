// // ===========================================================================
// // ===========================================================================

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");

// for(let i=1; i<=15; i=i+2) {
//     console.log(i);
// }

// console.log("backwards");
// for(let i=15; i>=1; i=i-2) {
//     console.log(i);
// }
 
// // Even Numbers : ---
// for(let i=2; i<=1000; i=i+2) {
//     console.log(i);
// }

// console.log("backwards");
// for(let i=16; i>=2; i=i-2) {
//     console.log(i);
// }

// // Pint the multipal table of 5  : ---
// for(let i=5; i<=50; i=i+5) {
//     console.log(i);
// }



// // Nested for Loop  :  ---
// for(let i=1; i<=5; i++) {
//     console.log("outer loop " , i);
//     for(let j=1; j<=5; j++) {
//         console.log(j);
//     }
// }

// // Nested for Loop  :  ---
// let i = 1; 
// while(i<=5) {
//     console.log("outer loop " , i);
//     i++;
// }

// let i = 5; 
// while(i>=1) {
//     console.log("outer loop " , i);
//     i--;
// }

// // ===========================================================================
// // ===========================================================================

// let i = 1;
// while(i<=5) {
//     if(i == 3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }
// console.log("We use break at 3")

// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for(let i=0; i<fruits.length; i++) {
//     console.log(i , fruits[i])
// }

// let heroes = [
//     ["ironman", "spiderman", "thor"],
//     ["superman", "wonder woman", "flash"]
// ]

// for(let i=0; i<heroes.length; i++) {
//     for(let j=0; j<heroes[i].length; j++) {
//         console.log(heroes[i][j]);
//     }
// }

// // ===========================================================================

// // for of loop  :: ----
// let fruits = ["mango", "apple", "banana", "litchi", "orange"];
// for(i of fruits) {
//     console.log(i);
// }

// for(char of "RajuBhai") {
//     console.log(char);
// }

// nested for of loop  :: ----
let heroes = [["superman", "batman", "wonder woman"], ["spiderman", "ironman", "thor"]];

for(list of heroes) {
    for(name of list) {
        console.log(name);
    }
}

// // ===========================================================================





// let msg = "   Hello     ";
// console.log(msg);
// let trimed = msg.trim();
// console.log(trimed);

// ===========================================================================
// ===========================================================================
// // toUpperCase, toLowerCase  : ---

// let Name = "Gautam Babu";
// let msg = "error";
// console.log(msg.toUpperCase());
// console.log(Name.toLowerCase());

// ===========================================================================
// Find index of : ---

// let msg = "ILoveCoding";
// let ans1 = msg.indexOf("Love");
// let ans2 = msg.indexOf("o");
// let ans3 = msg.indexOf("z");
// console.log(ans1);
// console.log(ans2);
// console.log(ans3);

// ===========================================================================
// ===========================================================================
// // Method Changing  : ---

// let msg = "              hello    ";
// // console.log("befor change : " , msg);
// // let newMsg = msg.trim();
// // console.log("after trim : ", newMsg);
// // newMsg = newMsg.toUpperCase();
// // console.log("after Uppercase : ", newMsg);
// newMsg = msg.trim().toUpperCase();
// console.log(newMsg)

// ===========================================================================
// // Slice  : -

// let str = "ILoveCoding";
// // let ans = str.slice(5, str.length);
// let ans = str.slice(-11);
// console.log(ans);

// ===========================================================================
// // Replace  :  --

// let msg = "ILoveCoding";
// let ans = msg.replace("Love", "do");
// console.log(ans);

// ===========================================================================
// // Repeat  :  --

// let str = "Mango";
// let ans = str.repeat(3);
// console.log(ans); // output :  "MangoMangoMango"  // 3

// ===========================================================================
// // Practice Qs  :  --

// let msg = "help!";
// let ans = msg.trim().toUpperCase();
// console.log(ans); // output :  "HELP!"  // 5

// let Name = "ApnaCollege";
// let ans = Name.slice(4, 9);
// console.log(ans);
// let ans = Name.indexOf("na");
// console.log(ans);
// let ans = Name.replace("Apna", "Our");
// console.log(ans);
// let ans = Name.slice(4);
// console.log(ans);
// let ans = Name.replace("l", "t").replace("l", "t");
// console.log(ans);

// ===========================================================================
// ===========================================================================
// Array  :  --

// let Students = ["aman", "shradha", "rajat"];
// console.log(Students);

// let nums = [2, 4, 6, 8];
// console.log(nums);
// console.log(nums[3]);
// console.log(nums.length);
// console.log(typeof(nums));

// let info = ["shradha", 23, 89.9];
// console.log(info);
// console.log(info[0].length);

// let empArr = [];
// console.log(empArr);

// // ===========================================================================
// // Array are Mutable   :  --

// let fruits = ["mango", "apple", "orange"];
// fruits[0] = "barana";
// console.log(fruits);
// fruits[10] = "gowava";
// console.log(fruits);
// console.log(fruits.length);


// let cars = ["audi", "bmw", "xuv", "maruti"];
// cars.push("toyota");
// console.log(cars);
// cars.unshift("honda");
// console.log(cars);
// cars.pop();
// console.log(cars);
// cars.shift();
// console.log(cars);

// Practice Qs : --
// let month = ["january", "july", "march", "august"];
// month.shift();
// month.shift();
// month.unshift("june");
// month.unshift("july");
// console.log(month);

// // ===========================================================================
// // Array Methods : ---

// let primary = ["red", "yellow", "blue"];
// let index = primary.indexOf("blue");
// console.log(index);
// // include --
// let include = primary.includes("red");
// console.log(include);

// // Concat Methods : --- (Array)

// let primary = ["green", "black", "white"];
// let secondary = ["red", "yellow", "blue"];
// let allColor = primary.concat(secondary);
// console.log(allColor);

// // Reverse : --
// let primary = ["green", "black", "white"];
// let reverse = primary.reverse();
// console.log(reverse);

// // slice in a Array  : ---
// let color = ["green", "black", "white", "red", "yellow"];
// let arrSlice = color.slice(2, 4);
// console.log(arrSlice);
// console.log(color.slice(-2));

// let color = ["green", "black", "white", "red", "yellow", "pink", "orange"];

// // console.log(color.splice(3, 6));
// // console.log(color);
// // console.log(color.splice(0,0));
// // console.log(color.splice(1, 0, "purple"));
// // console.log(color);

// console.log(color.splice(1,2, "redyellow"));
// console.log(color)

// // ===========================================================================
// // Array Methods : --- (Sort) --

// let color = ["green", "black", "white", "red", "yellow", "pink", "orange"];
// console.log(color.sort());

// Practice Qs : -
let month = ["january", "july", "march", "august"];
month.splice(0,1);
month.splice(1,0,"june");
console.log(month);





















































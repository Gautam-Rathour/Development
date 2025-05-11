const mongoose = require("mongoose");


main()
    .then(() => {
        console.log("Connected successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

}


const userSchema = new mongoose.Schema ({ 
    name: String,
    email: String,
    age: Number

});

const userModel = mongoose.model("User", userSchema);
// const userModel = mongoose.model("Employee", userSchema);

userModel.findByIdAndDelete("682083af8ba7cf0402eb2f0b")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });


// userModel.findOneAndUpdate({name: "Bruce"}, {age: 100}, {new : true})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// userModel.updateMany({age : {$gt : 47}}, {age : 33})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });


// userModel.findById("6820a4f9ddc21211af0a84c4")
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

    
// userModel.insertMany ([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name: "Peter", email: "peter@gmail.com", age: 30},
//     {name: "Bruce", email: "bruce@gmail.com", age: 47},
// ]).then((res) => {
//     console.log(res);
// });












// const user1 = new userModel({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48,
// });

// const user2 = new userModel({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 42,
// });

// const user3 = new userModel({
//     name: "mohit",
//     email: "mohit@yahoo.in",
//     age: 12,
// });

// user1.save();
// user2.save();

// user3
//     .save()
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     })



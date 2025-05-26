const mongoose = require("mongoose");


main()
    .then(() => {
        console.log("Connected successful");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for Amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate ("6820be6eea56ba6684717b21", {price: -1100},{runValidators: true})
.then(res => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message);
});


// let book1 = new Book({
//     title: "Harry Potter",
//     author: "J.K. Rowling",
//     price: 20.99,
// })

let book2 = new Book({
    title: "Marvel Comics V2",
    price: 600,
    category: "comics",
    genre: ["comics", "superheroes", "fiction"]
})

// book1.save();

book2.save()
.then((res) =>{
    console.log(res);
})
.catch((err) => {
    console.log(err);
})





















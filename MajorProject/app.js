const express = require("express");
const app = express();
const mongoose = require("mongoose");


const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

async function main() {
    await mongoose.connect(MONGO_URL);
}

main()
    .then(() => {
        console.log("Connected to DB")
    })
    .catch((err) => {
        console.log(err);
    });


app.get("/", (req, res) => {
    res.send("Hi, I am Root!");
    console.log("Root is working");
})















const port = 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
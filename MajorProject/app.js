const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");



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
})

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 1400,
        location: "Calangute, Goa",
        country: "India"
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing")
});













const port = 8080;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})

const express = require("express");

const app = express();







app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home")
})



const port = 8080;

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});














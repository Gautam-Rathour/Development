const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");


const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    } 
    throw new ExpressError(401, "ACCESS DENIED!");
};
app.get("/api", checkToken, (req, res) => {
    res.send("Data");
});


// app.get("/", (req, res) => {
//     res.send("Hi, I am root.");
// });


app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/admin", (req, res) => {
    throw new ExpressError(403, "Access to admin is Forbidden");
});


// Error handling middleware
app.use ((err, req, res, next) => {
    let { status = 500, message = "Some Error Occurred" } = err;
    res.status(status).send(message);
})




const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
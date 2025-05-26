const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");



// Middleware => response send
// app.use((req, res, next) => {
//     console.log("Hi, I am 1st middleware");
//     next();
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd middleware");
//     next();
// });


// // logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now());
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// })



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


// // Middleware for specific route 
// app.use("/random", (req, res, next) => {
//     console.log("I am only for random");
//     next();
// });

// app.get("/random", (req, res) => {
//      res.send("This is a random page");
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




// app.use((req, res) => {
//     res.send("Page not found");
// });




const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
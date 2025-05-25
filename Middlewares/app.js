const express = require("express");
const app = express();

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


app.use("/random", (req, res, next) => {
    console.log("I am only for random page");
    next();
});

app.get("/", (req, res) => {
    res.send("Hi, I am root.");
})

app.get("/random", (req, res) => {
     res.send("This is a random page");
})


app.use((req, res) => {
    res.send("Page not found");
})

const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
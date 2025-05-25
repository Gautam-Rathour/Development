const express = require("express");
const app = express();

// Middleware => response send


app.get("/", (req, res) => {
    res.send("hello mr.");
})







const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
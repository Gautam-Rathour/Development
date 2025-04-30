const express = require("express");
const app = express();


app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`standerd GET response with ${user}`);
})

app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send(`standerd POST response.  with ${user}`);
})



const port = 8080;

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})






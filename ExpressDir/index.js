 const express = require("express");
 const app = express();


// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>apple</li> <li>orange</li> <li>mango</li></ul>"
//     res.send(code);
// });


app.get("/", (req, res) => {
    res.send("hello, i am root");
});

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1> welcome to the page of @${username}</h1>`
    res.send(htmlStr);
});

// app.get("/search", (req, res) => {
//     console.log(req.query);
//     res.send("no results");
// });

app.get("/search", (req, res) => {
        let { q } = req.query;
        if(!q) {
            res.send("<h1>nothing searched</h1>")
        }
        res.send(`<h1>search results for query: ${q}</h1>`);
    });

// app.get("/apple", (req, res) => {
//     res.send(`welcome to the page of @${username}.`);
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// // app.get("*", (req, res) => {
// //     res.send("This path does not exist");
// // });

// app.post("/", (req, res) => {
//     res.send("you sent a post request to root");
// });


//  app.listen(3000);
let port = 3000;

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
})
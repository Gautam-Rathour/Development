
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));


main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}


// Index Route
app.get('/chats', async (req, res) => {
  try {
    const chats = await Chat.find({});
    console.log(chats); // okay to log to console
    res.render("index.ejs", { chats });    // only one response sent
  } catch (err) {
    res.status(500).send('Something went wrong');
  }
});

// New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
})

// Create Route
app.post("/chats", (req, res) => {
   let { from, to, msg } = req.body;
   let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date()
   });

   newChat
    .save()
    .then(res => {
      console.log("chat was saved");
    }).catch(err => {
      console.log(err);
    });
    res.redirect("/chats");
});

//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
  let {id} = req.params;
  let chat = await Chat.findById(id);
  res.render("edit.ejs",  );
})


app.get("/", (req, res) => {
    res.send("Root is Working");
});



// let chat1 = new Chat({
//     from: "neha",
//     to: "priya",
//     msg: "send me your exam sheets",
//     created_at: new Date(),
// });


// chat1.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });





app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});
//================================================================================================
//================================================================================================

//================================================================================================
//================================================================================================






























































































const mongoose = require("mongoose");
const Chat = require("./models/chat");

main()
    .then(() => {
        console.log("Connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
    },
    {
    from: "amit",
    to: "ramesh",
    msg: "bring me some fruits",
    created_at: new Date(),
    },
    {
    from: "anita",
    to: "ramesh",
    msg: "send me your exam sheets",
    created_at: new Date(),
    },
    {
    from: "tony",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
    },
];


Chat.insertMany(allChats);













const mongoose = require('mongoose');
const { Schema } = mongoose;


const URL = 'mongodb://127.0.0.1:27017/relationDemo';

mongoose.connect(URL)
    .then( function() {
        console.log("Connected to MongoDB!");
    })
    .catch( function(err) {
        console.long("Connection failed: " + err);
    });

    const userSchema = new Schema({
        username: String,
        email: String
    });

    const postSchema = new Schema({
        content: String,
        likes: Number,
        user: {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    });

    const User = mongoose.model("User", userSchema);
    const Post = mongoose.model("Post", postSchema);


// const addData = async() => {
//     // let user1 = new User ({
//     //     username: "john_doe",
//     //     email: "john234@gmail.com"
//     // });

//     // let post1 = new Post({
//     //     content: "Hello World!",
//     //     likes: 29
//     // });
//     let post2 = new Post({
//         content: "Hello Bhaiya ji ",
//         likes: 23
//     });

//     // post1.user = user1;
//     post2.user = user1;

//     // await user1.save();
//     await post2.save();
// }
// addData();


const getData = async() => {
    let result = await Post.findOne({}).populate("user", "username");
    console.log(result[0]);
}

getData();



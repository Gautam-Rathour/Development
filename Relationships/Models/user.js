
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
    addresses: [
        {
            _id: false,
            locations: String,
            city: String,
        },
    ],
});

const User = mongoose.model("User", userSchema);

const addUsers = async() => {
    let user1 = new User ({
        username: "sherlockholmes",
        addresses: [
            {
            locations: "221b Baker Street",
            city: "London"
            },
        ],
    });

    user1.addresses.push({locations: "P32 WallStreet", city: "London"});
    let result = await user1.save();
    console.log(result);
}

addUsers();








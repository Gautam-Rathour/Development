const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default:
            "https://assets.telegraphindia.com/telegraph/2022/Sep/1662271595_0124.jpg",
        set: (v) => 
            v === ""
             ? "https://assets.telegraphindia.com/telegraph/2022/Sep/1662271595_0124.jpg" 
             : v,
    },
    price: Number,
    location: String,
    country: String,
});


const Listing = mongoose.model("Listing", listingSchema);


module.exports = Listing;









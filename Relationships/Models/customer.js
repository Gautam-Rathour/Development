
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


const orderSchema = new Schema({
    item: String,
    price: Number,
});

const customerSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: "Order"
        },
    ],
});

// customerSchema.pre("findOneAndDelete", async () => {
//     console.log("PRE Middleware");
// });

customerSchema.post("findOneAndDelete", async (customer) => {
    if(customer.orders.length > 0) {
        let res = await Order.deleteMany({ _id: { $in: customer.orders } });
        console.log(res);
    }
});


const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

// const addCustomers = async() => {
//     // let cust1 = new Customer({
//     //     name: "John Doe",
//     // });

//     // let order1 = await Order.findOne({ item: "Chips"});
//     // let order2 = await Order.findOne({ item: "Chocolate"});

//     // cust1.orders.push(order1);
//     // cust1.orders.push(order2);

//     // let result = await cust1.save();
//     // console.log(result);

//     let result = await Customer.find({}).populate("orders");
//     console.log(result[0]);
// };

// addCustomers();



// //Functions
// const findCustomer = async () => {
//     let result = await Customer.find({}).populate("orders");
//     console.log(result[0]);
// };


const addCust = async () => {
    let newCust = new Customer({
        name: "karan Arjun"
    });

    let newOrder = new Order({
        item: "Burger",
        price: 300
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("Added new customer");
};



const delCust = async () => {
    let data = await Customer.findByIdAndDelete('683bc6b7e901d05fec7542ae');
    console.log(data);
}

// const delOrder = async () => {
//     let data = await Order.findOneAndDelete({ item: 'Burger' });
//     console.log(data);
// };


// addCust();
delCust();
// delOrder();







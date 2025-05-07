
// CJS
const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'cohort_app',
    password: "qowQez-0novti-zivgyr"
  });

  let getRandomUser = () => {
    return [
      faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
      faker.internet.password(),
    ];
  };

  // Inserting New Data
  let q = "INSERT INTO user (id, username, email, password) VALUES ?";
//   let users = [
//                 ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//                 ["123c", "123_newuserc", "abc@gmail.comc", "abcc"]
//             ];
  
let data = [];
for(let i=1; i<=100; i++) {
    data.push(getRandomUser());  // 100 faker users
}


  try {
    connection.query(q, [data], (err, result) => {
        if(err) throw err;
        console.log(result);
        console.log(result.length);
        console.log(result[0]);
        console.log(result[1]);
      });
  } catch (err) {
    console.log(err);
  }
  
  connection.end();





// console.log(getRandomUser());























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

  try {
    connection.query("SHOW TABLES", (err, result) => {
        if(err) throw err;
        console.log("This is the table : - " , result);
      });
  } catch (err) {
    console.log(err);
  }
  
  connection.end();


  
let getRandomUser = () => {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(), // before version 9.1.0, use userName()
    email: faker.internet.email(),
    password: faker.internet.password()
  };
}

// console.log(getRandomUser());






















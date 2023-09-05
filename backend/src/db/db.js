import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  host: "localhost",
  user: process.env.USER,
  password: process.env.PASSWORD,
  multipleStatements: true,
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connection to DB!");
    connection.query("USE db", (error) => {
      if (error) {
        initializeDB();
      } else {
        // addUser("Test", "password");
      }
    });
  }
});

function addUser(username, password) {
  const sql = `INSERT INTO users (username, password, role) VALUES (?, ?, "USER")`;

  connection.query(sql, [username, password], (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("The user was added!");
    }
  });
}

function initializeDB() {
  const sql = `CREATE DATABASE db;
  USE db;
  CREATE TABLE users (
       userid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
       username varchar(20) NOT NULL UNIQUE,
       password varchar(20) NOT NULL,
       role enum("USER", "ADMIN") NOT NULL
       );
    CREATE TABLE bookings (
        bookingid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        date DATE NOT NULL,
        startTime int NOT NULL, 
        hours int NOT NULL,
        trainer varchar(20) NOT NULL,
        trainType varchar(20) NOT NULL,
        userid INT , 
        FOREIGN KEY (userid) REFERENCES users(userid)
        );
    CREATE TABLE userbookings (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        bookingid int, 
        FOREIGN KEY(bookingid) REFERENCES bookings(bookingid),
        userid int, 
        FOREIGN KEY(userid) REFERENCES users(userid)
   );`;

  connection.query(sql, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("DB was created!");
    }
  });
}

export default connection;

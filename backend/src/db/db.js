import mysql2 from "mysql2";

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  multipleStatements: true,
  timezone: "+00:00",
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connection to DB!");
    initializeDB();
  }
});

function initializeDB() {
  const sql = `
  drop database db;
  CREATE DATABASE db;
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
        trainType varchar(20) NOT NULL
        );
    CREATE TABLE userbookings (
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
        bookingid int, 
        FOREIGN KEY(bookingid) REFERENCES bookings(bookingid),
        userid int, 
        FOREIGN KEY(userid) REFERENCES users(userid)
   ); 
   INSERT INTO users (username, password, role) VALUE("oskar", "password", "ADMIN");
   INSERT INTO users (username, password, role) VALUE("filip", "password", "ADMIN");
   INSERT INTO users (username, password, role) VALUE("isac", "password", "ADMIN");
   INSERT INTO users (username, password, role) VALUE("gertrude", "password", "USER");
   INSERT INTO bookings (date, startTime, hours,trainer,trainType) VALUES ("2023-09-09", 09,2, "Oskar","yoga");
   INSERT INTO bookings (date, startTime, hours,trainer,trainType) VALUES ("2023-09-07", 09,2, "Isac","kondition");
   INSERT INTO bookings (date, startTime, hours,trainer,trainType) VALUES ("2023-09-12", 09,3, "Filip","Pre-Army workout");
   INSERT INTO userbookings (bookingid, userid) VALUES (1, 2);
   `;

  connection.query(sql, (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("DB was created!");
    }
  });
}

export default connection;

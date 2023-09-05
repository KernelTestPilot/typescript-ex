import connection from "../db/db.js";

async function addBooking(date, trainer, trainType, hours, startTime) {
  const sql = `INSERT INTO bookings 
  (date, hours, trainer, trainType, startTime) VALUES 
  (?, ?, ?, ?, ?)`;

  const result = await connection
    .promise()
    .query(sql, [date, hours, trainer, trainType, startTime]);

  return result;
}

async function subscribeToBooking(userId, bookingid) {
  const sql = `INSERT INTO userbookings (bookingid, userid) VALUES (?, ?);`;

  const result = await connection.promise().query(sql, [bookingid, userId]);

  return result;
}

async function getAllBookings() {
  const sql = `SELECT * FROM bookings;`;

  return connection.promise().query(sql);
}

export default { addBooking, getAllBookings, subscribeToBooking };

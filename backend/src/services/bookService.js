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
async function unSubscribeToBooking(userid, bookingId) {
  const sql = `DELETE FROM userbookings WHERE userid = ? AND bookingid = ?`;

  const result = await connection.promise().query(sql, [userid, bookingId]);

  return result;
}

async function getAllBookings() {
  const sql = `SELECT * FROM bookings;`;

  return connection.promise().query(sql);
}

async function getSubscriptions(username) {
  const sql = `SELECT bookings.* FROM bookings 
  INNER JOIN userbookings 
  INNER JOIN users 
  WHERE userbookings.bookingid = bookings.bookingid AND 
  userbookings.userid = users.userid AND 
  users.username = ?`;

  const result = await connection.promise().query(sql, [username]);

  return result;
}

export default {
  addBooking,
  getAllBookings,
  subscribeToBooking,
  getSubscriptions,
  unSubscribeToBooking,
};

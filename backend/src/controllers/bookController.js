import authService from "../services/authService.js";
import bookService from "../services/bookService.js";
import connection from "../db/db.js";

async function subscribeToBooking(req, res) {
  const { username, bookingId } = req.body;

  const userResult = await authService.getUser(username);

  const result = await bookService.subscribeToBooking(
    userResult[0][0].userid,
    bookingId
  );

  res.status(201).send({ message: "You subscribed!" });
}

async function unSubscribeToBooking(req, res) {
  const { username, bookingId } = req.body;

  const userInfo = await authService.getUser(username);

  const result = await bookService.unSubscribeToBooking(
    userInfo[0][0].userid,
    bookingId
  );

  res.status(200).send({ message: "You unsubscribed!" });
}

async function addBooking(req, res) {
  const { date, trainer, trainType, hours, startTime } = req.body;

  const result = await bookService.addBooking(
    date,
    trainer,
    trainType,
    hours,
    startTime
  );

  res.status(201).send({ message: "The booking was added!" });
}

async function getAllBookings(req, res) {
  const result = await bookService.getAllBookings();

  res.status(200).send(result[0]);
}

async function getSubscribedUsers(req, res) {
  const { bookingID } = req.query;

  let sql = `SELECT users.username, users.role, users.userid, userbookings.bookingid FROM users INNER JOIN userbookings ON users.userId = userbookings.userId`;

  if (bookingID !== undefined) {
    sql += ` AND userbookings.bookingid = ?`;
  }

  const result = await connection.promise().query(sql, [bookingID]);

  res.status(200).send(result[0]);
}
async function getUsers(req, res) {
  const sql = `SELECT username, role, userid, email, phone FROM users`;
  const result = await connection.promise().query(sql);
  res.status(200).send(result[0]);
}

async function getSubscriptions(req, res) {
  const { username } = req.query;

  const result = await bookService.getSubscriptions(username);

  res.status(200).send(result[0]);
}

async function unSubUser(req, res) {
  const { userID, bookingID } = req.body;

  const sql = `DELETE FROM userbookings WHERE userid = ? AND bookingid = ?;`;

  const result = await connection.promise().query(sql, [userID, bookingID]);

  res.send({ message: "whopdido det funkade!" });
}

export default {
  subscribeToBooking,
  addBooking,
  getAllBookings,
  getSubscribedUsers,
  getUsers,
  getSubscriptions,
  unSubscribeToBooking,
  unSubUser,
};

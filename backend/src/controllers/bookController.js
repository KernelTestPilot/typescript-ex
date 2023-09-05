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
  const sql = `SELECT users.username, users.role, users.userid, userbookings.bookingid FROM users INNER JOIN userbookings ON users.userId = userbookings.userId`;

  const result = await connection.promise().query(sql);
  console.log(result);
  res.status(200).send(result[0]);
}
async function getUsers(req, res) {
  const sql = `SELECT username, role, userid FROM users`;
  const result = await connection.promise().query(sql);
  res.status(200).send(result[0]);
}
export default {
  subscribeToBooking,
  addBooking,
  getAllBookings,
  getSubscribedUsers,
  getUsers,
};

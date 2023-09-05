import connection from "../db/db.js";

async function getUser(username) {
  const sql = `SELECT userid, username, password, role FROM users WHERE username = ?;`;

  const result = await connection.promise().query(sql, [username]);

  return result;
}

export default { getUser };

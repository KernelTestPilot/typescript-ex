import authService from "../services/authService.js";

async function login(req, res) {
  const { username, password } = req.body;

  const userResult = await authService.getUser(username);

  const userArr = userResult[0];

  if (userArr.length === 0)
    return res.status(400).send({ message: "Incorrect username or password!" });

  if (userArr[0].password === password) {
    res.status(200).send({
      message: "You logged in!",
      token: {
        username: userArr[0].username,
        role: userArr[0].role,
      },
    });
  } else {
    res.status(400).send({ message: "Incorrect username or password!" });
  }
}

export default { login };

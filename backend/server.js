import "dotenv/config";
import Express from "express";
import Cors from "cors";
import router from "./src/router/routes.js";

const app = Express();

app.use(Cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.use(router);

app.listen(3001);

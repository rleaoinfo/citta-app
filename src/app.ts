import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import connect from "../config/connect";
import routes from "./routes";

dotenv.config();

const mongo_url: string = process.env.MONGO_URL || "";
console.log(process.env.MONGO_URL);
const app = express();
const PORT = 3000;
app.get("/", (req, res) => res.send("Server is ON"));

connect(mongo_url);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("", routes);

app.use((err: any, req: any, res: any, next: Function) => {
  const { message = "Internal Server Error" } = err;
  const response = { status: 500, message };

  res.status(response.status).json(response);
});

app.listen(PORT, () => {
  console.log(`Server Running on https://localhost:${PORT}`);
});

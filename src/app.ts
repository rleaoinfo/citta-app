import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
import connect from "../config/connect";

dotenv.config();

const mongo_url : string = process.env.MONGO_URL || "";
console.log(process.env.MONGO_URL);
const app = express();
const PORT = 3000;
app.get('/', (req, res) => res.send('Server is ON'));

connect(mongo_url);

app.listen(PORT, () => {
  console.log(`Server Running on https://localhost:${PORT}`);
});


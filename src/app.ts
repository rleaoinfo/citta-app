import express from 'express';
import * as dotenv from 'dotenv';
import bodyParser from "body-parser";
import connect from "../config/connect";
import * as city_controller from "./controller/city_controller"

dotenv.config();

const mongo_url : string = process.env.MONGO_URL || "";
console.log(process.env.MONGO_URL);
const app = express();
const PORT = 3000;
app.get('/', (req, res) => res.send('Server is ON'));

connect(mongo_url);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/city/allcities", city_controller.allCities)
app.post("/city/addcity" , city_controller.addCity);

app.listen(PORT, () => {
  console.log(`Server Running on https://localhost:${PORT}`);
});


import express from "express";
import * as CityController from "../controller/CityController";

const router = express.Router();

router.get("/city/allcities", CityController.AllCities);
router.post("/city/searchcity", CityController.SearchCity);
router.post("/city/addcity", CityController.AddCity);
router.post("/city/updatecity", CityController.UpdateCity);
router.post("/city/removecity", CityController.RemoveCity);

export default router;

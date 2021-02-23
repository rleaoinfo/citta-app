import express from "express";
import * as CityController from "../controller/CityController";

const router = express.Router();

router.get("/city/allcities", CityController.index);
router.post("/city/searchcity", CityController.view);
router.post("/city/addcity", CityController.store);
router.put("/city/updatecity/:id", CityController.update);
router.delete("/city/removecity/:id", CityController.destroy);

export default router;

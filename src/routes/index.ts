import express from "express";
import * as CityController from "../controller/CityController";

const router = express.Router();

router.get("/city/allcities", CityController.index);
router.get("/city/searchcityid/:id", CityController.viewId);
router.get("/city/searchcityname/:name", CityController.viewName);
router.post("/city/addcity", CityController.store);
router.put("/city/updatecity/:id", CityController.update);
router.delete("/city/removecity/:id", CityController.destroy);

export default router;

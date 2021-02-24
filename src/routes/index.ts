import express from "express";
import * as CityController from "../controller/CityController";

const router = express.Router();

router.get("/cities", CityController.index);
router.get("/cities/:idorname", CityController.view);
router.post("/cities", CityController.store);
router.put("/cities/:id", CityController.update);
router.delete("/cities/:id", CityController.destroy);

export default router;

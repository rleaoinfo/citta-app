import express from "express";
import * as CityController from "../controller/CityController";

const router = express.Router();

router.get("/cities/id/:id", CityController.viewid);
router.get("/cities/name/:name", CityController.viewname);
router.get("/cities", CityController.index);
router.post("/cities", CityController.store);
router.put("/cities/:id", CityController.update);
router.delete("/cities/:id", CityController.destroy);

export default router;

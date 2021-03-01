import express from "express";
import * as validation from "../middleware/validate-entry";
import * as CityController from "../controller/CityController";

const router = express.Router();

router.get("/cities/id/:id", CityController.viewid);
router.get("/cities/name/:name", CityController.viewname);
router.get("/cities", CityController.index);
router.post("/cities",validation.ValidateCreate,CityController.store);
router.put("/cities/:id",validation.ValidateUpdate, CityController.update);
router.delete("/cities/:id", CityController.destroy);

export default router;

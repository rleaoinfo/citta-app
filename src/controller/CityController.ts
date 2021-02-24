import { query, Request, Response } from "express";
import * as errors from "../errors/index";
import City from "../model/City";
//ver1
function diacriticSensitiveRegex(string = "") {
  return string
    .replace(/a/g, "[a,á,à,ä]")
    .replace(/e/g, "[e,é,ë]")
    .replace(/i/g, "[i,í,ï]")
    .replace(/o/g, "[o,ó,ö,ò]")
    .replace(/u/g, "[u,ü,ú,ù]");
}
//verz
const clearText = (text: string) => {
  return text
    .replace(new RegExp("[aãàáäâ]", "gi"), "[aãàáäâ]")
    .replace(new RegExp("[eèéëê]", "gi"), "[eèéëê]")
    .replace(new RegExp("[iìíïî]", "gi"), "[iìíïî]")
    .replace(new RegExp("[oõòóöô]", "gi"), "[oõòóöô]")
    .replace(new RegExp("[uùúüû]", "gi"), "[uùúüû]")
    .replace(new RegExp("[nñ]", "gi"), "[nñ]")
    .replace(new RegExp("[cç]", "gi"), "[cç]");
};
export const index = async (req: Request, res: Response) => {
  if (req.query.type != null) {
    res.status(400);
    res.send({
      value: false,
      description: "Detected query variables on index requisition",
    });
  }
  try {
    const returnCities = await City.find({ active: true });
    res.send(returnCities);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

export const viewname = async (req: Request, res: Response) => {
    try {
      const returnCity = await City.find({
        name: {
          $regex: clearText(
            "^" + req.params.name || "s" + req.params.name
          ),
          $options: "i",
        },
        active: true,
      });
      res.send(returnCity);
    } catch (err) {
      res.status(500);
      res.send(err);
    }
};

export const viewid = async (req: Request, res: Response) => {
  try {
    const returnCity = await City.findOne({
      _id: req.params.id,
      active: true,
    });
    res.send(returnCity);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

export const store = async (req: Request, res: Response) => {
  const passName = errors.ErrorName(req.body.name);
  const passUf = errors.ErrorUf(req.body.uf);
  const passArea = errors.ErrorArea(req.body.area);
  const passPopulation = errors.ErrorPopulation(req.body.population);
  if (
    passName.value === true &&
    passUf.value === true &&
    passArea.value === true &&
    passPopulation.value === true
  ) {
    const city = new City(req.body);
    try {
      const cityValidate = await city.save();
      res.status(201);
      res.send(cityValidate);
    } catch (err) {
      res.status(500);
      res.send(err);
    }
  } else {
    res.status(400);
    res.send({ passName, passUf, passArea, passPopulation });
  }
};

export const update = async (req: Request, res: Response) => {
  const passKeys = errors.ErrorObj(req.body);
  const passName = errors.ErrorName(req.body.name);
  const passUf = errors.ErrorUf(req.body.uf);
  const passArea = errors.ErrorArea(req.body.area);
  const passPopulation = errors.ErrorPopulation(req.body.population);
  const passActive = errors.ErrorActive(req.body.active);
  if (
    (passName.value === true ||
      passUf.value === true ||
      passArea.value === true ||
      passPopulation.value === true ||
      passActive.value === true) &&
    passKeys.value === true
  )
    try {
      const cityValidate = await City.findByIdAndUpdate(
        req.params.id,
        req.body,
        { useFindAndModify: false }
      );
      res.send(cityValidate);
    } catch (err) {
      res.status(500);
      res.send(err);
    }
  else {
    res.status(400);
    res.send({
      passKeys,
      passName,
      passUf,
      passArea,
      passPopulation,
      passActive,
    });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const city = await City.deleteOne({ _id: req.params.id });
    res.send(city);
  } catch (err) {
    res.status(500);
    res.send(err);
  }
};

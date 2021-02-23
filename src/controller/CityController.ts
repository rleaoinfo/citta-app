import { Request, Response } from "express";
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
  try {
    const returnCities = await City.find({ active: true });
    res.send(returnCities);
  } catch (err) {
    res.send(err);
  }
};

export const viewName = async (req: Request, res: Response) => {
  try {
    const returnCity = await City.find({
      name: {
        $regex: clearText("^" + req.params.name || "s" + req.params.name),
        $options: "i",
      },
      active: true,
    });
    res.send(returnCity);
  } catch (err) {
    res.send(err);
  }
};

export const viewId = async (req: Request, res: Response) => {
  try {
    const returnCity = await City.find({
      _id: req.params.id,
      active: true,
    });
    res.send(returnCity);
  } catch (err) {
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
      res.send(cityValidate);
    } catch (err) {
      res.send(err);
    }
  } else {
    res.send({ passName, passUf, passArea, passPopulation });
  }
};

export const update = async (req: Request, res: Response) => {
  const passName = errors.ErrorName(req.body.name);
  const passUf = errors.ErrorUf(req.body.uf);
  const passArea = errors.ErrorArea(req.body.area);
  const passPopulation = errors.ErrorPopulation(req.body.population);
  const passActive = errors.ErrorActive(req.body.active);
  if (
    passName.value === true &&
    passUf.value === true &&
    passArea.value === true &&
    passPopulation.value === true &&
    passActive.value === true
  ) {
    const updatedCity = {
      name: req.body.name,
      uf: req.body.uf,
      area: req.body.area,
      population: req.body.population,
      active: req.body.active,
      updatedAt: new Date(),
    };
    try {
      const cityValidate = await City.findByIdAndUpdate(
        { _id: req.params.id },
        updatedCity,
        []
      );
      res.send(cityValidate);
    } catch (err) {
      res.send(err);
    }
  } else {
    res.send({ passName, passUf, passArea, passPopulation, passActive });
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const city = await City.deleteOne({ _id: req.params.id });
    res.send(city);
  } catch (err) {
    res.send(err);
  }
};

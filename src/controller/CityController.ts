import { Request, Response } from "express";
import * as errors from "../errors/index";
import City from "../model/City";

export const AllCities = async (req: Request, res: Response) => {
  try {
    const returnCities = await City.find({ active: true });
    res.send(returnCities);
  } catch (err) {
    res.send(err);
  }
};

export const SearchCity = async (req: Request, res: Response) => {
  console.log(req.body);
  try {'(\s+che|^che)'
    const returnCity = await City.find({
      name: { $regex: ("^"+req.body.name || "\s"+req.body.name )  , $options: "i" },
    });
    res.send(returnCity);
  } catch (err) {
    res.send(err);
  }
};

export const AddCity = async (req: Request, res: Response) => {
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

export const UpdateCity = async (req: Request, res: Response) => {
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
    const updatedCity = {
      name: req.body.name,
      uf: req.body.uf,
      area: req.body.area,
      population: req.body.population,
      updatedAt: new Date(),
    };
    try {
      const cityValidate = City.findByIdAndUpdate(
        { _id: req.body.id },
        updatedCity,
        []
      );
      res.send(cityValidate);
    } catch (err) {
      res.send(err);
    }
  } else {
    res.send({ passName, passUf, passArea, passPopulation });
  }
};

export const RemoveCity = async (req: Request, res: Response) => {
  try {
    const city = await City.deleteOne({ _id: req.body.id });
    res.send(city);
  } catch (err) {
    res.send(err);
  }
};

import { Request, Response } from "express";
import * as errors from "../errors/index";
import City from "../model/City";

export const AllCities = (req: Request, res: Response) => {
  City.find({ active: true }, (err: any, cities: any) => {
    if (err) {
      res.send(err);
    } else {
      res.send(cities);
    }
  });
};

export const OneCity = (req: Request, res: Response) => {
  City.findOne();
};

export const AddCity = (req: Request, res: Response) => {
  const passName = errors.ErrorName(req.body.name.length);
  const passUf = errors.ErrorUf(req.body.uf.length);
  const passArea = errors.ErrorArea(req.body.area);
  const passPopulation = errors.ErrorPopulation(req.body.population);
  if (
    passName.value === true &&
    passUf.value === true &&
    passArea.value === true &&
    passPopulation.value === true
  ) {
    const city = new City(req.body);
    city.save((err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(city);
      }
    });
  } else {
    res.send({ passName, passUf, passArea, passPopulation });
  }
};

export const UpdateCity = (req: Request, res: Response) => {
  const passName = errors.ErrorName(req.body.name.length);
  const passUf = errors.ErrorUf(req.body.uf.length);
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
    City.findByIdAndUpdate(
      { _id: req.body.id },
      updatedCity,
      [],
      (err: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send(updatedCity);
        }
      }
    );
  } else {
    res.send({ passName, passUf, passArea, passPopulation });
  }
};

export const RemoveCity = (req: Request, res: Response) => {
  const city = City.deleteOne({ _id: req.body.id })
    .then(function () {
      console.log("Data deleted");
      res.send(city); // Success
    })
    .catch(function (error) {
      console.log(error);
      res.send(error); // Failure
    });
};

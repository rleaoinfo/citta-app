import { Request, Response } from "express";
import City from "../model/citymodel"

export const allCities = (req: Request, res: Response) => {
    City.find((err: any, cities: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(cities);
      }
    });
  };

  export const addCity = (req: Request, res: Response) => {
    const city = new City(req.body);
    city.save((err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(city);
      }
    });
  };
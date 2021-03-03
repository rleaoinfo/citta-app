import {  Request, Response } from "express";
import City from "../model/City";
import clearText from "../../utils/index"


export const index = async (req: Request, res: Response) => {
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
        $regex: clearText("^" + req.params.name || "s" + req.params.name),
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
    const city = new City(req.body);
    try {
      const cityValidate = await city.save();
      res.status(201);
      res.send(cityValidate);
    } catch (err) {
      res.status(500);
      res.send(err);
    }
};

export const update = async (req: Request, res: Response) => {
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

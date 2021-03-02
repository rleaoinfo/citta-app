import * as errors from "../errors/index";

export const ValidateCreate = (req: any, res: any, next: any) => {
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
    next();
  } else {
    const createVal =
      "Name Status : " +
      passName.value +
      " - Name Description : " +
      passName.description +
      "||UF Status : " +
      passUf.value +
      " - UF Description : " +
      passUf.description +
      "||Area Status : " +
      passArea.value +
      " - Area Description : " +
      passArea.description +
      "||Population Status : " +
      passPopulation.value +
      " - Population Description : " +
      passPopulation.description;
    const error = new Error(createVal);
    next(error);
  }
};

export const ValidateUpdate = (req: any, res: any, next: any) => {
  const passKeys = errors.ErrorObj(req.body);
  const passName = errors.ErrorName(req.body.name);
  const passUf = errors.ErrorUf(req.body.uf);
  const passArea = errors.ErrorArea(req.body.area);
  const passPopulation = errors.ErrorPopulation(req.body.population);
  const passActive = errors.ErrorActive(req.body.active);

  if (passKeys.value === true) {
    const variablesKeys = passKeys.variables;
    for (var key in variablesKeys) {
      if (variablesKeys[Number(key)] == "name") {
        if (passName.value) {
          continue;
        } else {
          const nameError =
            "Name Status : " +
            passName.value +
            " - Name Description : " +
            passName.description;
          const error = new Error(nameError);
          next(error);
        }
      }
      if (variablesKeys[Number(key)] == "uf") {
        if (passUf.value) {
          continue;
        } else {
          const ufError =
            "UF Status : " +
            passUf.value +
            " - UF Description : " +
            passUf.description;
          const error = new Error(ufError);
          next(error);
        }
      }
      if (variablesKeys[Number(key)] == "area") {
        if (passArea.value) {
          continue;
        } else {
          const areaError =
            "Area Status : " +
            passArea.value +
            " - Area Description : " +
            passArea.description;
          const error = new Error(areaError);
          next(error);
        }
      }
      if (variablesKeys[Number(key)] == "population") {
        if (passPopulation.value) {
          continue;
        } else {
          const populationError =
            "Population Status : " +
            passPopulation.value +
            " - Population Description : " +
            passPopulation.description;
          const error = new Error(populationError);
          next(error);
        }
      }
      if (variablesKeys[Number(key)] == "active") {
        if (passActive.value) {
          continue;
        } else {
          const ActiveError =
            "Active Status : " +
            passActive.value +
            " - Active Description : " +
            passActive.description;
          const error = new Error(ActiveError);
          next(error);
        }
      }
    }
    res.locals.updateVal = {};
    next();
  } else {
    const updateVal =
      "Name Status : " +
      passName.value +
      " - Name Description : " +
      passName.description +
      "||UF Status : " +
      passUf.value +
      " - UF Description : " +
      passUf.description +
      "||Area Status : " +
      passArea.value +
      " - Area Description : " +
      passArea.description +
      "||Population Status : " +
      passPopulation.value +
      " - Population Description : " +
      passPopulation.description +
      "Active Status : " +
      passActive.value +
      " - Active Description : " +
      passActive.description;
    const error = new Error(updateVal);
    next(error);
  }
};

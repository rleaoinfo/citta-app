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
    res.locals.createVal = {};
    next();
  } else {
    res.locals.createVal = { passName, passUf, passArea, passPopulation };
    next();
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
          res.locals.updateVal = { passName };
          next();
        }
      }
      if (variablesKeys[Number(key)] == "uf") {
        if (passUf.value) {
          continue;
        } else {
          res.locals.updateVal = { passUf };
          next();
        }
      }
      if (variablesKeys[Number(key)] == "area") {
        if (passArea.value) {
          continue;
        } else {
          res.locals.updateVal = { passArea };
          next();
        }
      }
      if (variablesKeys[Number(key)] == "population") {
        if (passPopulation.value) {
          continue;
        } else {
          res.locals.updateVal = { passPopulation };
          next();
        }
      }
      if (variablesKeys[Number(key)] == "active") {
        if (passActive.value) {
          continue;
        } else {
          res.locals.updateVal = { passActive };
          next();
        }
      }
    }
    res.locals.updateVal = {};
    next();
  } else {
    res.locals.updateVal = {
      passName,
      passUf,
      passArea,
      passPopulation,
      passActive,
      passKeys,
    };
    next();
  }
};

export const ErrorName = (name: any) => {
  if (name == null || name == undefined || name == "") {
    return { value: false, description: "Name is null , not defined or blank" };
  } else {
    if (typeof name === "string") {
      const nameLenght = name.length;
      if (nameLenght < 3) {
        return { value: false, description: "Name less than 3 characters" };
      } else if (nameLenght > 250) {
        return { value: false, description: "Name more than 250 characters" };
      } else {
        return { value: true, description: "Ok" };
      }
    } else {
      return { value: false, description: "Name is not a string" };
    }
  }
};

export const ErrorUf = (uf: any) => {
  if (uf == null || uf == undefined || uf == "") {
    return { value: false, description: "uf is null , not defined or blank" };
  } else {
    const letters = /^[A-Za-z]+$/;
    if (typeof uf === "string" && uf.match(letters)) {
      const ufLength = uf.length;
      if (ufLength < 2 || ufLength > 2) {
        return { value: false, description: "Uf must have 2 characters" };
      } else {
        return { value: true, description: "Ok" };
      }
    } else {
      return {
        value: false,
        description: "Uf is not a string or have numbers",
      };
    }
  }
};

export const ErrorArea = (Area: any) => {
  if (Area == null || Area == undefined || Area == "") {
    return { value: false, description: "Area is null , not defined or blank" };
  } else {
    if (typeof Area === "number") {
      return { value: true, description: "Ok" };
    } else {
      return { value: false, description: "Area must be a number" };
    }
  }
};

export const ErrorPopulation = (Population: any) => {
  if (Population == null || Population == undefined || Population == "") {
    return {
      value: false,
      description: "Population is null , not defined or blank",
    };
  } else {
    if (typeof Population === "number") {
      return { value: true, description: "Ok" };
    } else {
      return { value: false, description: "Population must be a number" };
    }
  }
};

export const ErrorActive = (Active: any) => {
  if (typeof Active === "boolean") {
    return { value: true, description: "Ok" };
  } else {
    return { value: false, description: "Active must be a boolean" };
  }
};

export const ErrorObj = (Obj: any) => {
  const test = Object.keys(Obj);
  for (var i in test) {
    if (
      test[i] == "name" ||
      test[i] == "uf" ||
      test[i] == "area" ||
      test[i] == "population" ||
      test[i] == "active"
    ) {
      continue;
    } else {
      return { value: false, description: "Object have wrong/missing JSON parameters" };
    }
  }
  return { value: true, description: "Ok" };
};

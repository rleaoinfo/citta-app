export const ErrorName = (nameLength: any) => {
  if (nameLength < 3) {
    return { value: false, description: "Name less than 3 characters" };
  } else if (nameLength > 250) {
    return { value: false, description: "Name more than 250 characters" };
  } else {
    return { value: true, description: "Sucess" };
  }
};

export const ErrorUf = (ufLength: any) => {
  if (ufLength < 2 || ufLength > 2) {
    return { value: false, description: "Uf must have 2 characters" };
  } else {
    return { value: true, description: "Sucess" };
  }
};

export const ErrorArea = (Area: any) => {
  if (typeof Area === "number") {
    return { value: true, description: "Sucess" };
  } else {
    return { value: false, description: "Area must be a number" };
  }
};

export const ErrorPopulation = (Population: any) => {
    if (typeof Population === "number") {
      return { value: true, description: "Sucess" };
    } else {
      return { value: false, description: "Population must be a number" };
    }
  };
  
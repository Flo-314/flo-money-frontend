import {category} from "../types/interfaces";

import sumOfPayments from "./sumOfPayments";

const sumOfCategory = (array: category[]) => {
  let sum = 0;

  array.forEach((category: category) => {
    sum = sum + sumOfPayments(category);
  });

  return sum;
};

export default sumOfCategory;

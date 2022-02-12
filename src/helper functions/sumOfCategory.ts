import {category} from "./interfaces";
import sumOfPayments from "./sumOfPayments";

const sumOfCategory = (array: category[]) => {
  let sum = 0;

  array.forEach((category: category) => {
    sum += sumOfPayments(category);
  });

  return sum;
};

export default sumOfCategory;

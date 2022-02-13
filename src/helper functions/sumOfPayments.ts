import {category, payment} from "./interfaces";

const sumOfPayments = (category: category) => {
  let sum = 0;

  category.payments.forEach((payment: payment) => {
    sum += +payment.ammount;
  });

  return sum;
};

export default sumOfPayments;

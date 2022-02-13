import {category} from "../helper functions/interfaces";
import sumOfPayments from "../helper functions/sumOfPayments";

import {mockOfPayments} from "./mock";
let secondCategory = mockOfPayments;

secondCategory.payments = secondCategory.payments.slice(0, 1);

const firstMock: category = {name: "MOOOOCKKK", _id: ".", payments: []};
const secondMock: category = secondCategory;
const thirdMock: category = {name: "mock", _id: "aa", payments: secondCategory.payments};

test("category without payments", () => {
  expect(sumOfPayments(firstMock)).toBe(0);
});

test("category with 1 payment", () => {
  expect(sumOfPayments(secondMock)).toBe(20000);
});

test("category with a lot of payments", () => {
  expect(sumOfPayments(thirdMock)).toBe(43501);
});

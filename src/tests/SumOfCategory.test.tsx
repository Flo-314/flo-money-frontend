import sumOfCategory from "../helper functions/sumOfCategory";

import {MockOfCategories} from "./mock";

test("incomes without category", () => {
  expect(sumOfCategory([{name: "a", _id: "a", payments: []}])).toBe(0);
});

test("incomes with 1 category", () => {
  expect(sumOfCategory(MockOfCategories.splice(0, 1))).toBe(43501);
});

test("incomes with a lot of categories", () => {
  expect(sumOfCategory(MockOfCategories)).toBe(130503);
});

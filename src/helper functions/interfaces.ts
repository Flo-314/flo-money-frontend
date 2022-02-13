export interface payment {
  ammount: number;
  isMonthly: boolean;
  toFrom: string;
  _id: string;
}
export interface category {
  name: string;
  _id: string;
  payments: Array<payment>;
}

export interface data {
  incomes: category[];
  outcomes: category[];
  projections: category;
}
export interface user {
  userId: string;
  token: string;
  data?: data;
}

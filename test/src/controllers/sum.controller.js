import { getSum } from "../helpers/sum.helper.js";

export function findTheSumeOfTwoNumbers(req, res) {
  const sum = getSum(1, 2);
  res.send(sum);
}

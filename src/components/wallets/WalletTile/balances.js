const getBalances = (balances) => {
  const [first, second, third, fourth, ...bals] = balances;

  const result = {};

  if (first) result[1] = first;
  if (second) result[2] = second;
  if (third) result[3] = third;
  if (fourth) result[4] = fourth;
  if (bals.length) result.moreLen = bals.length;

  return result;

  // return balances.reduce((acc, value, index, array) => {
  //   console.log(index, acc);
  //   if (acc.moreLen < index) return Object.assign(acc, { moreLen: array.length - index });
  //   if (index >= 4) return acc;
  //   return Object.assign({}, acc, { [index]: value });
  // }, { moreLen: 0 });
};

export default getBalances;

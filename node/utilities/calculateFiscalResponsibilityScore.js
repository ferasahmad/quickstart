const calculateFiscalResponsibilityScore = (transactions) => {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  const positiveBalanceDays = transactions.filter((transaction) => {
    const transactionDate = new Date(transaction.date);
    return transactionDate > oneYearAgo && transaction.amount > 0;
  }).length;

  const totalDays = 365;
  const score = (positiveBalanceDays / totalDays) * 100;

  return score.toFixed(2);
};

module.exports = calculateFiscalResponsibilityScore;

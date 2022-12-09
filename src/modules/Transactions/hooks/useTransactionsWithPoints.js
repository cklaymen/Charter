import { useMemo } from "react";

import calculatePoints from "../utils/calculatePoints";

function getTransactionsWithPoints(transactions) {
  return transactions.map((transaction) => ({
    ...transaction,
    points: calculatePoints(transaction.price)
  }));
}

const useTransactionsWithPoints = (transactions) => {
  return useMemo(
    () => transactions && getTransactionsWithPoints(transactions),
    [transactions]
  );
};

export default useTransactionsWithPoints;

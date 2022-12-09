import useQuery from "../../../../hooks/useQuery";

import generateTransactions from "./generateTransactions";

const LOADING_TIME = 1000;
const transactions = generateTransactions();

async function loadTransactions() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(transactions);
    }, LOADING_TIME);
  });
}

function useTransactionsQuery() {
  return useQuery("transactions", loadTransactions);
}

export default useTransactionsQuery;

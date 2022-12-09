import { useMemo } from "react";

const useTransactionsByCustomerAndMonth = (transactions) => {
  return useMemo(() => {
    if (transactions) {
      const transactionsByCustomerAndMonth = transactions.reduce((a, b) => {
        const month = `${b.date.getFullYear()}-${b.date.getMonth() + 1}`;
        const key = `${month} ${b.customer}`;
        if (!a[key]) {
          a[key] = {
            month,
            customer: b.customer,
            price: b.price,
            points: b.points
          };
        } else {
          a[key].price = (a[key].price * 100 + b.price * 100) / 100;
          a[key].points += b.points;
        }
        return a;
      }, {});
      return Object.values(transactionsByCustomerAndMonth).sort((a, b) =>
        a.customer.localeCompare(b.customer)
      );
    }
  }, [transactions]);
};

export default useTransactionsByCustomerAndMonth;

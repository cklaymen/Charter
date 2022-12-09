import { useMemo } from "react";

const useTransactionsByCustomer = (transactions) => {
  return useMemo(() => {
    if (transactions) {
      const transactionsByCustomerAndMonth = transactions.reduce((a, b) => {
        const key = b.customer;
        if (!a[key]) {
          a[key] = {
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

export default useTransactionsByCustomer;

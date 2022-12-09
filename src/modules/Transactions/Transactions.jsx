import useTransactionsWithPoints from "./hooks/useTransactionsWithPoints";
import useTransactionsQuery from "./hooks/useTransactionsQuery";
import useTransactionsByCustomerAndMonth from "./hooks/useTransactionsByCustomerAndMonth";
import useTransactionsByCustomer from "./hooks/useTransactionsByCustomer";
import TransactionsWithPoints from "./components/TransactionsWithPoints";
import TransactionsByCustomerAndMonth from "./components/TransactionsByCustomerAndMonth";
import TransactionsByCustomer from "./components/TransactionsByCustomer";

const Transactions = () => {
  const { data, loading, error } = useTransactionsQuery();
  const transactionsWithPoints = useTransactionsWithPoints(data);
  const transactionsByCustomerAndMonth = useTransactionsByCustomerAndMonth(
    transactionsWithPoints
  );
  const transactionsByCustomer = useTransactionsByCustomer(
    transactionsByCustomerAndMonth
  );

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong.</div>;
  }

  return (
    <div>
      <TransactionsByCustomer transactions={transactionsByCustomer} />
      <TransactionsByCustomerAndMonth
        transactions={transactionsByCustomerAndMonth}
      />
      <TransactionsWithPoints transactions={transactionsWithPoints} />
    </div>
  );
};

export default Transactions;

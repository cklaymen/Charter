import Table from "../../../components/Table";

const TransactionsByCustomerAndMonth = ({ transactions }) => {
  return (
    <Table
      data={transactions}
      columns={[
        {
          key: "month",
          title: "Month"
        },
        {
          key: "customer",
          title: "Customer"
        },
        {
          key: "price",
          title: "Price"
        },
        {
          key: "points",
          title: "Points"
        }
      ]}
      rowKey={(row) => row.month + row.customer}
    />
  );
};

export default TransactionsByCustomerAndMonth;

import Table from "../../../components/Table";

const TransactionsByCustomer = ({ transactions }) => {
  return (
    <Table
      data={transactions}
      columns={[
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
      rowKey={(row) => row.customer}
    />
  );
};

export default TransactionsByCustomer;

import Table from "../../../components/Table";

function TransactionsWithPoints({ transactions }) {
  return (
    <Table
      data={transactions}
      rowKey={(row) => row.id}
      columns={[
        {
          title: "Date",
          key: "date",
          render: (date) => date.toLocaleString()
        },
        { title: "Customer", key: "customer" },
        { title: "Price", key: "price" },
        { title: "Points", key: "points" }
      ]}
    />
  );
}

export default TransactionsWithPoints;

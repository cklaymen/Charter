const Table = ({ data, columns, rowKey }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map(({ title, key }) => (
            <th key={key}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={rowKey(row, i)}>
            {columns.map(({ key, render }) => (
              <td key={key}>{render ? render(row[key]) : row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

// TableRow.js
import React from 'react';

const TableRow = ({ data }) => {
  return (
    <tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.id}</td>
      <td><img src={data.image} alt={data.name} width="30" height="30" /></td>
      <td>{data.symbol}</td>
      <td>{data.current_price}</td>
      <td>{data.total_volume}</td>
    </tr>
  );
};

export default TableRow;

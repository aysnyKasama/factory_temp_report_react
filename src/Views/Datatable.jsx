import React from 'react';

function DataTable({ data }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>No</th>
          <th>日付</th>
          <th>時間</th>
          <th>温度(℃)</th>
          <th>湿度(%)</th>
        </tr>
      </thead>
      <tbody>
        
          <tr key={1}>
            <td>0001</td>
            <td>2024年11月10日</td>
            <td>11時11分</td>
            <td>10℃</td>
            <td>30%</td>
          </tr>
        
      </tbody>
    </table>
  );
}

export default DataTable;

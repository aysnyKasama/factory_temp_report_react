// src/Views/DataTable.js

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
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.no}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.temperature}</td>
            <td>{item.humidity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;

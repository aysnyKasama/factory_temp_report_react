// src/Views/TemperatureHumidityReport.js

import React from 'react';
import DataTable from './DataTable';
import Header from './Header';                                     // ヘッダー            

function TemperatureHumidityReport({ data, creationDate, companyName }) {
  const dataPerPage = 51; // 3列 × 17データ
  const pages = [];

  for (let i = 0; i < data.length; i += dataPerPage) {
    pages.push(data.slice(i, i + dataPerPage));
  }

  return (
    <>
      {pages.map((pageData, pageIndex) => (
        // 最後のページかどうか判定し、適切なクラスを適用
        <div
          key={pageIndex}
          className={`report-page ${pageIndex === pages.length - 1 ? 'report-page-last' : ''}`}
        >
          <h1 className="report-header">温湿度報告書</h1>
          <div className="report-info">
            <p>{creationDate} / {companyName}</p>
          </div>
          <div className="report-container">
            {[...Array(3)].map((_, columnIndex) => {
              const columnData = pageData.slice(columnIndex * 17, (columnIndex + 1) * 17);
              return (
                <div key={columnIndex} className="report-table">
                  <DataTable data={columnData} />
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
}

export default TemperatureHumidityReport;

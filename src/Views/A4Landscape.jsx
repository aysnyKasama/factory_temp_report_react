import React from 'react';
import { Paper, Typography } from '@mui/material';

import './A4Landscape.css'; // CSSをインポート
const A4Landscape = ({ pageData = [] ,className ,deviceName = '未選択', roomName = '未選択' ,deviceId = '未選択'}) => {
    const reportTitle = "温湿度報告書";
    const creationDate = "作成日: 2024-02-24";
    const companyName = "会社名: 株式会社アイソニーフーズ";


    // 最後のページに適用する特別なクラス名を動的に決定
    // const pageClassName = `report-page ${isLastPage ? 'report-page-last' : ''}`;

    // コンソール
    // console.log(pageData);
    
    // (3) [Array(51), Array(51), Array(18)]
    // 0// (51) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // 1// (51) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // 2// (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]

    // 0// {no: 1, date: '2024-02-1', time: '0:00', temperature: '23.2', humidity: '47.8'}
    // 1// {no: 2, date: '2024-02-1', time: '6:00', temperature: '24.2', humidity: '57.5'}
    // 2// {no: 3, date: '2024-02-1', time: '12:00', temperature: '24.0', humidity: '51.0'}

    return (
        <div className={className }>  {/* 最後のページの場合は「-last」を付ける。それ以外は空文字を追加している。 */}
            <h1 className="report-header">{reportTitle}</h1>
            <div className="report-info">
                <p>{creationDate} | {companyName}</p>
                <p>デバイス名: {deviceName} | 部屋名: {roomName} | デバイスID: {deviceId}</p>
                
            </div>
            <div className="report-container">
                {[...Array(3)].map((_, columnIndex) => {
                    const columnData = pageData.slice(columnIndex * 17, (columnIndex + 1) * 17);
                    return ( // JSXを返すためにreturnを使用
                        <div 
                            key={columnIndex} 
                            className="report-table"
                        >
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
                                    {columnData.map((item, index) => ( // columnDataを使用しています
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
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default A4Landscape;
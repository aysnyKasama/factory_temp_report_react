import React from 'react';
import { Paper, Typography } from '@mui/material';

import './A4Landscape.css'; // CSSをインポート

const A4Landscape = ({ data }) => {
    // ここに帳票のタイトル名、作成日、会社名などの情報を設定
    const reportTitle = "帳票タイトル"; // 帳票のタイトル
    const creationDate = "作成日: 2024-02-24"; // 作成日
    const companyName = "会社名: 株式会社サンプル"; // 会社名

    return (
        <div className="a4Landscape">
            <Paper elevation={3} style={{ padding: '20px' }}>
                {/* 帳票のタイトル、作成日、会社名を表示 */}
                <Typography variant="h4" gutterBottom>{reportTitle}</Typography>
                <Typography variant="subtitle1">{creationDate}</Typography>
                <Typography variant="subtitle1" gutterBottom>{companyName}</Typography>

                
                {/* テーブル */}
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
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td>{item.temperature}</td>
                                    <td>{item.humidity}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>


            </Paper>
        </div>
    );
};

export default A4Landscape;

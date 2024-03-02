import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './Views/Header_search'; // Typo を修正しました (Header_serch -> Header_search)
import Papers from './Views/Papers';
// 帳票データのサンプルデータ
import TyouhyouData01 from './Datas/TyouhyouData01';
import TyouhyouData02 from './Datas/TyouhyouData02';
// 機能１.エクセルリストのサンプルデータ
import ExcelList from './Datas/ExcelList';
import './App.css';

function App() {
    // -------------------------    デバッグモードの状態を管理  -------------------------
    const [isDebugMode, setIsDebugMode] = useState(true); // デバッグモードの状態

    // -------------------------    エクセルデータの状態を管理  -------------------------
    const [selectedExcelFile, setSelectedExcelFile] = useState('Excel1');   // 機能１.選択されたエクセルファイル名
    const [selectedDate, setSelectedDate] = useState(new Date());           // 機能2.ヘッダーで選択された日付
    const [excelData, setExcelData] = useState([]);                         // 帳票データ

    // 選択されたエクセルファイルが変更された場合、またはコンポーネントがマウントされた時にデータを取得
    useEffect(() => {
        if (isDebugMode) {
            // デバッグモード：静的エクセルデータを使用
            if (selectedExcelFile === 'Excel1') setExcelData(TyouhyouData01);
            if (selectedExcelFile === 'Excel2') setExcelData(TyouhyouData02);
        } else {
            // 本番モード：API からエクセルデータを取得
            const fetchData = async () => {
                const apiUrl = `https://api.example.com/data?excelFile=${selectedExcelFile}`;
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    setExcelData(data);
                } catch (error) {
                    console.error("API からのエクセルデータ取得に失敗しました:", error);
                }
            };

            fetchData();
        }
    }, [selectedExcelFile]); // useEffect の依存配列

    const handleExcelFileChange = (excelFileName) => {
        setSelectedExcelFile(excelFileName); // 選択されたエクセルファイル名を更新
    };

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header onExcelFileChange={handleExcelFileChange} ExcelList={ExcelList} />
                <Papers data={excelData} />
            </Container>
        </div>
    );
}

export default App;

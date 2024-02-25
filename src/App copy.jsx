import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './Views/Header_serch';
import Papers from './Views/Papers';
import './App.css';

function App() {
    const [selectedDataSet, setSelectedDataSet] = useState('Excel1'); // 初期データセット名
    const [data, setData] = useState([]); // API から取得したデータを保持

    // 選択されたデータセットが変更された場合、またはコンポーネントがマウントされた時に API を呼び出す
    useEffect(() => {
        // -------------------------        API からデータを取得する関数（仮）          -------------------------
        const fetchData = async () => {
            // API 呼び出しの URL（例: `https://api.example.com/data?dataset=${selectedDataSet}`）
            // 実際の API エンドポイントとパラメータに置き換えてください。
            const apiUrl = `https://api.example.com/data?dataset=${selectedDataSet}`;
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setData(data); // 取得したデータをセット
            } catch (error) {
                console.error("API からのデータ取得に失敗しました:", error);
            }
        };

        fetchData();

        // -------------------------       静的なサンプルデータを使う場合のコード       -------------------------
        


    }, [selectedDataSet]); // selectedDataSet が変更されるたびにこの効果を実行

    // データセット名が変更されたときに呼び出される関数
    const handleDataChange = (dataSetName) => {
        setSelectedDataSet(dataSetName);
    };

    return (
        <div>
            <CssBaseline />
            <Container maxWidth="lg">
                <Header onDataChange={handleDataChange} />
                <Papers data={data} />
            </Container>
        </div>
    );
}

export default App;

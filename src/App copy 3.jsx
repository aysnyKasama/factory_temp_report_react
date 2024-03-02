import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './Views/Header_search';
import Papers from './Views/Papers';
import SampleData01 from './Datas/SampleData01';
import SampleData02 from './Datas/SampleData02';
import './App.css';

// データセットのマッピング
const dataSets = {
    'Excel1': SampleData01,
    'Excel2': SampleData02,
    '':'',
};

// Appコンポーネント
function App() {
    const [selectedDataSet, setSelectedDataSet] = useState('Excel1'); // selectedDataSetを定義し、初期値を設定
    const [data, setData] = useState([]); // API から取得したデータを保持

    // 選択されたデータセットが変更された場合、またはコンポーネントがマウントされた時に API を呼び出す
    useEffect(() => {
        // -------------------------        API からデータを取得する関数（仮）          -------------------------
        // const fetchData = async () => {
        //     // API 呼び出しの URL（例: `https://api.example.com/data?dataset=${selectedDataSet}`）
        //     // 実際の API エンドポイントとパラメータに置き換えてください。
        //     const apiUrl = `https://api.example.com/data?dataset=${selectedDataSet}`;
        //     try {
        //         const response = await fetch(apiUrl);
        //         const data = await response.json();
        //         setData(data); // 取得したデータをセット
        //     } catch (error) {
        //         console.error("API からのデータ取得に失敗しました:", error);
        //     }
        // };

        // fetchData();

        // -------------------------       静的なサンプルデータを使う場合のコード       -------------------------
        setData(dataSets[selectedDataSet]);

    }, [selectedDataSet]); // selectedDataSet が変更されるたびにこの効果を実行


    const handleDataChange = (dataSetName) => {
        setSelectedDataSet(dataSetName); // 選択されたデータセット名を更新
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

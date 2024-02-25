import React, { useState } from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './Views/Header_serch';
import Papers from './Views/Papers';
import SampleData01 from './Datas/SampleData01';
import SampleData02 from './Datas/SampleData02';
import './App.css';

// データセットのマッピング
const dataSets = {
    'Excel1': SampleData01,
    'Excel2': SampleData02,
};

// Appコンポーネント
function App() {
    const [selectedData, setSelectedData] = useState(dataSets['Excel1']); // 初期データセット

    const handleDataChange = (dataSetName) => {
        setSelectedData(dataSets[dataSetName]);
    };

    return (
        <div>
            <CssBaseline /> 
            <Container maxWidth="lg">
                <Header onDataChange={handleDataChange} />
                <Papers data={selectedData} />
            </Container>
        </div>
    );
}

export default App;

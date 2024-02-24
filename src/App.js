// src/App.js

import React from 'react';
import TemperatureHumidityReport from './Views/TemperatureHumidityReport';
import PrintButton from './Views/PrintButton';
import sampleData from './Data/sampleData';
import './App.css';

function App() {
  return (
    <div className="app">
      <PrintButton />
      <TemperatureHumidityReport
        data={sampleData}
        creationDate="2024-02-24"
        companyName="株式会社アイソニーフーズ"
      />
    </div>
  );
}

export default App;

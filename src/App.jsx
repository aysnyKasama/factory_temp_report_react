import React, { useState, useEffect } from 'react';
import { CssBaseline, Container } from '@mui/material';
import Header from './Views/Header_search'; // Typo を修正しました (Header_serch -> Header_search)
import Papers from './Views/Papers';
// 帳票データのサンプルデータ
import TyouhyouData01 from './Datas/TyouhyouData01';
import TyouhyouData02 from './Datas/TyouhyouData02';
import TyouhyouData03 from './Datas/TyouhyouData03rand';
// 機能１.デバイスリストのサンプルデータ
import sampleDeviceList from './Datas/DeviceList';
import './App.css';

function handlePrint() {
    // 印刷用のロジックをここに実装
    if (window.confirm('印刷を開始しますか？')) {
      window.print();
    }
  }

function App() {
    // -------------------------    デバッグモードの状態を管理  -------------------------
    const [isDebugMode, setIsDebugMode] = useState(false); // デバッグモードの状態

    // -------------------------    温湿度データの状態を管理  -------------------------
    const [selectedDevice, setSelectedDevice] = useState('00137a100000e0ef');         // 機能１.選択されたデバイス名
    const [selectedDate, setSelectedDate] = useState(new Date());           // 機能2.ヘッダーで選択された日付
    const [tempData, setTempData] = useState([]);                               // 帳票データ
    const [DeviceList, setDeviceList] = useState([]); // 機能１.デバイスリスト      // デバイスリスト

    // 選択されたデバイス名が変更された場合、またはコンポーネントがマウントされた時にデータを取得
    useEffect(() => {
        if (isDebugMode) {
            // デバッグモード：静的温湿度データを使用
            if (selectedDevice === '00137a100000e0ed') setTempData(TyouhyouData01);
            if (selectedDevice === '00137a100000e0ee') setTempData(TyouhyouData02);
            if (selectedDevice === '00137a100000e0ef') setTempData(TyouhyouData03);
            // selectedDeviceが未選択の場合は、空のデータを表示
            if (selectedDevice === '') setTempData([]);
            if (selectedDevice === null) setTempData([]);

            setDeviceList(sampleDeviceList);    //一時的にコメント

        } else {
            // 選択が未選択の場合は、空のデータを表示。そしてreturn
            if (selectedDate === null) {
                setTempData([]);
                return;
            }
            if (selectedDevice === null) {
                setTempData([]);
                return;
            }

            // 本番モード：
            // API から温湿度データを取得
            const fetchData = async () => {
                // http://192.168.102.70:8000/api/v1/fac/temp/oneday/20240303/00137a100000e0ed
                const serchDate = selectedDate.getFullYear() + ('0' + (selectedDate.getMonth() + 1)).slice(-2) + ('0' + selectedDate.getDate()).slice(-2);
                console.log("日付：" + serchDate); // "20240303"
                console.log("デバイス：" + selectedDevice); // "00137a100000e0ed"

                const apiUrl = `http://192.168.102.70:8000/api/v1/fac/temp/oneday/${serchDate}/${selectedDevice}`;
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    if (data.length === 0) {
                        setTempData([]); // データが空の場合は空のデータを表示
                    }else{
                        setTempData(data);
                    }
                } catch (error) {
                    console.error("API からの温湿度データ取得に失敗しました:", error);
                }
            };
            fetchData();
            // APIからデバイスリストを取得
            const fetchDeviceList = async () => {
                const apiUrl = `http://192.168.102.70:8000/api/v1/fac/temp/all/`;
                try {
                    const response = await fetch(apiUrl);
                    const data = await response.json();
                    setDeviceList(data);
                } catch (error) {
                    console.error("API からのデバイスリスト取得に失敗しました:", error);
                }
            };
            fetchDeviceList();
        }
    }, [selectedDevice, selectedDate]);

    const handleDeviceChange = (selectDevice) => {
        setSelectedDevice(selectDevice); // 選択されたデバイス名を更新
    };

    return (
        <div className='App'>
            <CssBaseline />
            <Container maxWidth="lg">
                <button onClick={handlePrint} className='print-button'>印刷</button>
                <Header onDeviceChange={handleDeviceChange} DeviceList={DeviceList}　selectedDevice={selectedDevice} setSelectedDevice={setSelectedDevice}　selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <Papers data={tempData} DeviceList={DeviceList} selectedDevice={selectedDevice} />
            </Container>
        </div>
    );
}

export default App;

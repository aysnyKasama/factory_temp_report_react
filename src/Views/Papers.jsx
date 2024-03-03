import React from 'react';
import A4Landscape from './A4Landscape';

// 指定されたサイズで配列をチャンクに分割するヘルパー関数
const chunkArray = (array, chunkSize) => {
    return array.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // 新しいチャンクを開始
        }

        resultArray[chunkIndex].push(item); // 現在のチャンクにアイテムを追加

        return resultArray;
    }, []);
};

// Papersコンポーネント
const Papers = (props) => {
    // データが存在しない場合は何も表示しない
    if (!props.data) {
        return null;
    }

    // props.selectedDeviceが未選択の場合は

    const selectedDeviceInfo = props.DeviceList.find((option) => option.deviceId === props.selectedDevice);

    // A4 1枚あたりに表示するデータの数
    const separateNum = 51;

    // sampleDataをseparateNumの数で分割
    const dataChunks = chunkArray(props.data, separateNum);

    // コンソール
    console.log(dataChunks);

    return (
        <div className='papers'> 
            {/* 分割されたデータの各チャンクをA4Landscapeコンポーネントに渡す */}
            {dataChunks.map((dataChunk, index) => (
                // もし合計が１ページに収まる場合はクラス名「report-page」を渡す。
                // もし最後のページの場合はクラス名「report-page-last」を渡す。
                <A4Landscape
                    key={index}
                    pageData={dataChunk}
                                    // 最後のページのみに特別なクラスを適用
                    className={index === dataChunks.length - 1 ? 'report-page-last' : 'report-page'}
                    deviceName={selectedDeviceInfo?.deviceName || '未選択'}
                    roomName={selectedDeviceInfo?.deviceRoom || '未選択'}
                    deviceId={selectedDeviceInfo?.deviceId || '未選択'}
                />
            ))}
        </div>
    );
};

export default Papers;

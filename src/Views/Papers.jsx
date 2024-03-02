import React from 'react';
import A4Landscape from './A4Landscape';
import sampleData from '../Datas/TyouhyouData01'; // サンプルデータのインポート

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

    // A4 1枚あたりに表示するデータの数
    const separateNum = 10;

    // sampleDataをseparateNumの数で分割
    const dataChunks = chunkArray(props.data, separateNum);

    return (
        <div>
            {/* 分割されたデータの各チャンクをA4Landscapeコンポーネントに渡す */}
            {dataChunks.map((dataChunk, index) => (
                <A4Landscape key={index} data={dataChunk} />
            ))}
        </div>
    );
};

export default Papers;

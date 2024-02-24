import React from 'react';
import A4Landscape from './A4Landscape';
import sampleData from '../Datas/SampleData'; // サンプルデータのインポート

const Papers = () => {
    return (
        <div>
            {sampleData.map((data, index) => (
                <A4Landscape key={index} data={data} />
            ))}
        </div>
    );
};

export default Papers;

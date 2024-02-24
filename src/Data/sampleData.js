// src/Data/sampleData.js

const sampleData = Array.from({ length: 120 }).map((_, index) => ({
    no: index + 1,
    date: `2024-02-${Math.floor(index / 4) + 1}`,
    time: `${Math.floor((index % 4) * 6)}:00`,
    temperature: (20 + Math.random() * 5).toFixed(1), // 20.0℃から25.0℃の間でランダム
    humidity: (40 + Math.random() * 20).toFixed(1), // 40%から60%の間でランダム
  }));
  
  export default sampleData;
  
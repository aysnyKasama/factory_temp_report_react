// src/Views/PrintButton.js

import React from 'react';

function PrintButton() {
  return <button onClick={() => window.print()}>印刷</button>;
}

export default PrintButton;

import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import Game from './components/Game';
import useWindowDimensions from './hooks/useWindowDimensions';
import { buildCells } from './utils';

function App() {
  const { width, height } = useWindowDimensions();
  console.log('width', width);
  console.log('height', height);
  const cells = buildCells(100, 80, []);

  return (
    <div className="App">
      <div className="App-content">
        <Game cells={cells} />
      </div>
    </div>
  );
}

export default App;

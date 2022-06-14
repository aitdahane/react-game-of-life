import React, { useEffect, useRef, useState } from 'react';
import { CellModel } from '../model';
import './Board.scss';
import { resetCells, switchCellAlive, updateCells } from '../utils';
import Board from './Board';
import Menu from './Menu';
import Title from './Title';

const Game: React.FC<{ cells: CellModel[][] }> = (props) => {
  const [cells, setCells] = useState(props.cells);
  const [isOn, setIsOn] = useState(false);
  const [displayBorders, setDisplayBoarder] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCells((_cells) => {
        if (isOn) {
          return updateCells(_cells);
        } else {
          return _cells;
        }
      });
    }, 100);
    return () => clearInterval(interval);
  }, [isOn]);

  const handleOnSelectCell = (cell: CellModel) => {
    if (isOn) {
      setIsOn(false);
    } else {
      setCells((_cells) => switchCellAlive(_cells, cell));
    }
  };

  const handleOnReset = () => {
    setCells((_cells) => resetCells(_cells));
    setIsOn(false);
  };

  const handleOnDisplayGrid = () => {
    setDisplayBoarder((_displayBorders) => !_displayBorders);
  };

  return (
    <>
      <Title />

      <Board
        cells={cells}
        displayBorders={displayBorders}
        onSelectCell={handleOnSelectCell}
      />

      <Menu
        isOn={isOn}
        handleOnPlay={() => setIsOn(true)}
        handleOnPause={() => setIsOn(false)}
        handleOnReset={handleOnReset}
        handleOnDisplayGrid={handleOnDisplayGrid}
      />
    </>
  );
};

export default Game;

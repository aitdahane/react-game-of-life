import React, { useEffect, useRef, useState } from 'react';
import { CellModel } from '../model';
import './Board.scss';
import { resetCells, toggleCellIsAlive, updateCells } from '../utils';
import Board from './Board';
import Menu from './Menu';
import Title from './Title';

const Game: React.FC<{ cells: CellModel[][] }> = (props) => {
  const [cells, setCells] = useState(props.cells);
  const [isOn, setIsOn] = useState(false);
  const [hasBorders, setHasBorders] = useState(true);

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

  const handleOnPlay = (_isOn: boolean) => () => setIsOn(_isOn);

  const handleOnSelectCell = (cell: CellModel) => {
    if (isOn) {
      setIsOn(false);
    } else {
      setCells((_cells) => toggleCellIsAlive(_cells, cell));
    }
  };

  const handleOnReset = () => {
    setCells((_cells) => resetCells(_cells));
    setIsOn(false);
  };

  const handleOnDisplayGrid = () => {
    setHasBorders((_hasBorders) => !_hasBorders);
  };

  return (
    <>
      <Title />

      <Board
        cells={cells}
        hasBorders={hasBorders}
        onSelectCell={handleOnSelectCell}
      />

      <Menu
        isOn={isOn}
        onPlay={handleOnPlay(true)}
        onPause={handleOnPlay(false)}
        onReset={handleOnReset}
        onDisplayGrid={handleOnDisplayGrid}
      />
    </>
  );
};

export default Game;

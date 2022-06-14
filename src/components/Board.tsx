import React from 'react';
import { CellModel } from '../model';
import Cell from './Cell';
import './Board.scss';

type BoardProps = {
  cells: CellModel[][];
  hasBorders: boolean;
  onSelectCell: (cell: CellModel) => void;
};

const Board: React.FC<BoardProps> = ({
  cells,
  hasBorders,
  onSelectCell,
}) => {
  return (
    <div className="Board">
      {cells.map((rowCells, index) => (
        <div
          key={index}
          className="Board-row"
          style={{ height: `${100 / cells.length}%` }}
        >
          {rowCells.map((cell) => (
            <Cell
              key={cell.id}
              isAlive={cell.isAlive}
              hasBorder={hasBorders}
              width={`${100 / rowCells.length}%`}
              height="100%"
              onClick={() => onSelectCell(cell)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;

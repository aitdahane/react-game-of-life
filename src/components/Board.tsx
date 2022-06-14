import React from 'react';
import { CellModel } from '../model';
import Cell from './Cell';
import './Board.scss';

type BoardProps = {
  cells: CellModel[][];
  displayBorders?: boolean;
  onSelectCell: (cell: CellModel) => void;
};

const Board: React.FC<BoardProps> = ({
  cells,
  displayBorders = false,
  onSelectCell,
}) => {
  return (
    <div className="board">
      {cells.map((rowCells, index) => (
        <div
          key={index}
          className="board-row"
          style={{ height: `${100 / cells.length}%` }}
        >
          {rowCells.map((cell) => (
            <Cell
              key={cell.id}
              isAlive={cell.isAlive}
              hasBorder={displayBorders}
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

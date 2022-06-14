import { CellModel } from '../model';
import { range } from './ArrayUtils';

export const buildCells = (
  width: number,
  height: number,
  aliveCells: { x: number; y: number }[] = []
): CellModel[][] => {
  const isAlive = (x: number, y: number): boolean =>
    aliveCells.some((cell) => cell.x === x && cell.y === y);
  return range(height).map((y) =>
    range(width).map((x) => ({
      y,
      x,
      id: `${x}_${y}`,
      isAlive: isAlive(x, y),
    }))
  );
};

export const updateCells = (cells: CellModel[][]): CellModel[][] => {
  const newCells = buildCells(cells[0].length, cells.length);
  cells.forEach((cellsInRow) => {
    cellsInRow.forEach((cell) => {
      newCells[cell.y][cell.x].isAlive = shouldLive(cells, cell);
    });
  });
  return newCells;
};

export const resetCells = (cells: CellModel[][]): CellModel[][] => {
  const newCells = buildCells(cells[0].length, cells.length);
  return newCells;
};

const shouldLive = (cells: CellModel[][], cell: CellModel) => {
  const neighborCells = getNeighborCells(cells, cell);
  const countAliveNeighborCells = neighborCells.filter(
    ({ isAlive }) => !!isAlive
  ).length;
  if (cell.isAlive) {
    return [2, 3].includes(countAliveNeighborCells);
  }
  return countAliveNeighborCells === 3;
};

const getNeighborCells = (cells: CellModel[][], cell: CellModel) => {
  const { x, y } = cell;
  return [
    cells?.[y - 1]?.[x],
    cells?.[y - 1]?.[x - 1],
    cells?.[y - 1]?.[x + 1],
    cells?.[y + 1]?.[x],
    cells?.[y + 1]?.[x - 1],
    cells?.[y + 1]?.[x + 1],
    cells?.[y]?.[x + 1],
    cells?.[y]?.[x - 1],
  ].filter((x) => !!x);
};

export const switchCellAlive = (
  cells: CellModel[][],
  cell: CellModel
): CellModel[][] => {
  console.log(cell.isAlive);
  cells[cell.y][cell.x].isAlive = !cell.isAlive;
  return [...cells];
};

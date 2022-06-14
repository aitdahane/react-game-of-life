import React from 'react';
import classNames from 'classnames';
import './Cell.scss';

type CellProps = {
  isAlive: boolean;
  onClick: () => void;
  width: string;
  height: string;
  hasBorder?: boolean;
}

const Cell: React.FC<CellProps> = ({ isAlive, onClick, hasBorder, width, height }) => {
  return (
    <span
      className={classNames('Cell', { 'is-alive': isAlive, 'has-border': hasBorder })}
      style={{ width, height }}
      onClick={() => onClick()}
    ></span>
  );
};

export default Cell;

import React, { useEffect, useState } from 'react';
import IconBtn from './IconBtn';
import './Menu.scss';

type MenuProps = {
  isOn: boolean;
  onPlay: () => void;
  onPause: () => void;
  onReset: () => void;
  onDisplayGrid: () => void;
};

const Menu: React.FC<MenuProps> = ({
  isOn,
  onPlay,
  onPause,
  onReset,
  onDisplayGrid,
}) => {
  return (
    <div className="Menu">
      <IconBtn
        className="Menu-btn"
        name={isOn ? 'pause' : 'play'}
        onClick={isOn ? onPause : onPlay}
      />

      <IconBtn className="Menu-btn" name="reset" onClick={onReset} />

      <IconBtn className="Menu-btn" name="grid" onClick={onDisplayGrid} />
    </div>
  );
};

export default Menu;

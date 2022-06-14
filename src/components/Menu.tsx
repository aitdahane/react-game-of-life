import React, { useEffect, useState } from 'react';
import IconBtn from './IconBtn';
import './Menu.scss';

type MenuProps = {
  isOn: boolean;
  handleOnPlay: () => void;
  handleOnPause: () => void;
  handleOnReset?: () => void;
  handleOnDisplayGrid?: () => void;
};

const Menu: React.FC<MenuProps> = ({
  isOn,
  handleOnPlay,
  handleOnPause,
  handleOnReset = () => {},
  handleOnDisplayGrid = () => {},
}) => {
  const [isPlayOn, setIsPlayOn] = useState(false);

  useEffect(() => {
    setIsPlayOn(isOn);
  }, [isOn]);

  const onClickPlay = () => {
    if (isPlayOn) {
      handleOnPause();
    } else {
      handleOnPlay();
    }
    setIsPlayOn((_isOn) => !_isOn);
  };

  return (
    <div className="Menu">
      <IconBtn
        className="Menu-btn"
        name={isPlayOn ? 'pause' : 'play'}
        onClick={onClickPlay}
      />

      <IconBtn className="Menu-btn" name="reset" onClick={handleOnReset} />

      <IconBtn className="Menu-btn" name="grid" onClick={handleOnDisplayGrid} />
    </div>
  );
};

export default Menu;

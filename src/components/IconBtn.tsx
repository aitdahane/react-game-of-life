import classNames from 'classnames';
import React from 'react';
import './IconBtn.scss';

type IconBtnProps = {
  name: string;
  onClick: () => void;
  className?: string;
};

const IconBtn: React.FC<IconBtnProps> = ({ name, onClick, className = '' }) => {
  return (
    <div className={classNames('IconBtn', className)} onClick={onClick}>
      {name === 'pause' ? <PauseIcon /> : null}
      {name === 'play' ? <PlayIcon /> : null}
      {name === 'reset' ? <ResetIcon /> : null}
      {name === 'grid' ? <GridIcon /> : null}
    </div>
  );
};

const PauseIcon = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M10 24h-6v-24h6v24zm10 0h-6v-24h6v24zm-11-23h-4v22h4v-22zm10 0h-4v22h4v-22z" />
  </svg>
);

const PlayIcon = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z" />
  </svg>
);

const ResetIcon = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7 9h-7v-7h1v5.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.286 0-11.45-4.844-11.959-11h1.004c.506 5.603 5.221 10 10.955 10 6.071 0 11-4.929 11-11s-4.929-11-11-11c-4.66 0-8.647 2.904-10.249 7h5.249v1z" />
  </svg>
);

const GridIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M6 6h-6v-6h6v6zm9-6h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6zm-18 9h-6v6h6v-6zm9 0h-6v6h6v-6zm9 0h-6v6h6v-6z" />
  </svg>
);

export default IconBtn;

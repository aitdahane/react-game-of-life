import React from 'react';
import './Title.scss';

type TitleProps = {
  title?: string;
}

const Title: React.FC<TitleProps> = ({ title = 'Game Of Life' }) => {
  return (
    <h1 className='Title' onClick={(e)=>e.preventDefault()}>{title}</h1>
  );
}

export default Title;
import React from 'react';

const style = {
  backgroundColor: '#fff',
  border: '1px solid #000',
  cursor: 'pointer',
  outline: 'none'
};

const Square = ({value, onClick}) => (
  <button style={style} onClick={onClick}>
    {value}
  </button>
);

export default Square;

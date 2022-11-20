import React from 'react'

const Button = ({ onClickButton, children }) => {
  return (
    <div>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </div>
  );
};

export default Button

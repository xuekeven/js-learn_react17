import React, { ReactNode } from 'react';

interface ButtonProps {
  count: number,
  onClickButton: () => void,
  children?: ReactNode
}

const Button = ({ count, onClickButton, children }: ButtonProps) => {
  return (
    <div>
      <button onClick={onClickButton}>{children}</button>
      <span style={{ marginLeft: 10 }}>{count}---{Math.random()}</span>
    </div>
  );
};

export default React.memo(Button);
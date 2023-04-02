import { ReactNode, useState, memo } from 'react';
import { Button } from 'antd';

interface ButtonProps {
  count: number,
  onClickButton: () => void,
  children?: ReactNode,
  comUseMemo?: boolean,
}

const ButtonCom = ({ count, onClickButton, children }: ButtonProps) => {
  const [state, setState] = useState<number>(0);

  return (
    <div>
      <Button onClick={onClickButton}>{children}</Button>
      <Button onClick={() => setState(state + 1)}>改变子组件</Button>
      <span style={{ marginLeft: 10 }}>{count}---{Math.random()}</span>
    </div>
  );
};

const ButtonComMemo = memo(ButtonCom);

const ButtonComWrapper = (props: ButtonProps) => {
  if (props.comUseMemo) {
    return <ButtonComMemo {...props} />
  } else {
    return <ButtonCom {...props} />
  }
}

export default ButtonComWrapper;
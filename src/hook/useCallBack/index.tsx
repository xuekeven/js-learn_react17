import { useState, useCallback } from 'react';
import ButtonCom from './button';
import { Button } from 'antd';

export default function Hook() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [comUseMemo, setComUseMemo] = useState(true);

  const handleClickButton2 = () => setCount2(count2 + 1);
  const handleClickButton3 = useCallback(() => setCount3(count3 + 1), [count3]);

  return <>
    <div style={{ marginTop: 20 }}>
      <span style={{ marginLeft: 10 }}>{count1}---{count2}---{count3}---{Math.random()}</span>
      <Button onClick={() => setComUseMemo(!comUseMemo)}>点击使得下面的子组件 {comUseMemo ? '不使用' : '使用'} React.memo</Button>
      <ButtonCom comUseMemo={comUseMemo} count={count1} onClickButton={() => setCount1(count1 + 1)}>Button1</ButtonCom>
      <ButtonCom comUseMemo={comUseMemo} count={count2} onClickButton={handleClickButton2}>Button2</ButtonCom>
      <ButtonCom comUseMemo={comUseMemo} count={count3} onClickButton={handleClickButton3}>Button3</ButtonCom>
    </div>
  </>
}

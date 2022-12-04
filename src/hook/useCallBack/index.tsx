import { useState, useCallback } from 'react'
import Button from './button'

export default function Hook() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const handleClickButton1 = () => setCount1(count1 + 1);
  const handleClickButton2 = useCallback(() => setCount2(count2 + 1), [count2]);

  return <>
    <div style={{ marginTop: 20 }}>
        <Button count={count1} onClickButton={handleClickButton1}>Button1</Button>
        <Button count={count2} onClickButton={handleClickButton2}>Button2</Button>
        <Button count={count3} onClickButton={() => setCount3(count3 + 1)}>Button3</Button>
    </div>
  </>
}

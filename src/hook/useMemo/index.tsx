import { useState, useMemo } from 'react';
import { Button } from 'antd';

import { UserCard1Wrapper, UserCard2Wrapper } from './userCard';

export default function Hook() {
  return <>
    <div style={{ marginTop: 20}}>
      <Hook1 />
      <Hook2 />
    </div>
  </>
}

function Hook1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [comUseMemo, setComUseMemo] = useState(true);

  const userInfo1 = {
    count: count1,
    name: 'userInfo1'
  }

  const userInfo2 = useMemo(() => {
    return {
      count: count2,
      name: 'userInfo2'
    }
  }, [count2])

  const userInfo3 = {
    count: count3,
    name: 'userInfo3'
  }

  const setsetCount3 = (num: number) => setCount3(num)

  return <>
    <div style={{ marginTop: 20 }}>
      <span>...userInfo</span>
      <Button onClick={() => setComUseMemo(!comUseMemo)}>点击使得下面的子组件 {comUseMemo ? '不使用' : '使用'} React.memo</Button>
      <UserCard1Wrapper comUseMemo={comUseMemo} {...userInfo1} setCount={setCount1} />
      <UserCard1Wrapper comUseMemo={comUseMemo} {...userInfo2} setCount={setCount2} />
      <UserCard1Wrapper comUseMemo={comUseMemo} {...userInfo3} setCount={setsetCount3} />
    </div>
  </>
}

function Hook2() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [comUseMemo, setComUseMemo] = useState(true);

  // 每次重新渲染，userInfo1 都将是一个新的对象，无论 count1 是否发生改变，都会导致对应的 UserCard2Wrapper 重新渲染。
  const userInfo1 = {
    count: count1,
    name: 'userInfo1'
  }

  // count2 改变后才会返回新的对象 userInfo2，才会重新渲染对应的 UserCard2Wrapper。
  const userInfo2 = useMemo(() => {
    return {
      count: count2,
      name: 'userInfo2'
    }
  }, [count2])

  const userInfo3 = {
    count: count3,
    name: 'userInfo3'
  }

  const setSetCount3 = (num: number) => setCount3(num)

  return <>
    <div style={{ marginTop: 20}}>
      <span>userInfo=userInfo</span> 
      <Button onClick={() => setComUseMemo(!comUseMemo)}>点击使得下面的子组件 {comUseMemo ? '不使用' : '使用'} React.memo</Button>
      <UserCard2Wrapper comUseMemo={comUseMemo} userInfo={userInfo1} setCount={setCount1} />
      <UserCard2Wrapper comUseMemo={comUseMemo} userInfo={userInfo2} setCount={setCount2} />
      <UserCard2Wrapper comUseMemo={comUseMemo} userInfo={userInfo3} setCount={setSetCount3} />
    </div>
  </>
}
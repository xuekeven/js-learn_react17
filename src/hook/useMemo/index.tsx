import { useState, useMemo } from 'react';
import UserCard1  from './userCard1';
import UserCard2  from './userCard2';

export default function Hook() {
  return <>
    <div style={{ marginTop: 20}}>
      <Hook2 />
      <Hook1 />
    </div>
  </>
}

function Hook2() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  // 每次重新渲染，userInfo1 都将是一个新的对象，
  // 无论 count 是否发生改变，都会导致对应的 UserCard2 重新渲染。
  const userInfo1 = {
    count: count1,
    name: 'userInfo1'
  }

  const userInfo2 = {
    count: count2,
    name: 'userInfo2'
  }

  // count 改变后才会返回新的对象 userInfo2，才会重新渲染对应的 UserCard2。
  const userInfo3 = useMemo(() => {
    return {
      count: count3,
      name: 'userInfo3'
    }
  }, [count3])

  const userInfo4 =  {
    count: count4,
    name: 'userInfo4'
  }
  const setsetCount4 = (num: number) => setCount4(num)

  return <>
    <div style={{ marginTop: 20}}>
      <p>userInfo=userInfo</p> 
      <UserCard2 userInfo={userInfo1} setCount={setCount1} />
      <UserCard2 userInfo={userInfo2} setCount={setCount2}  />
      <UserCard2 userInfo={userInfo3} setCount={setCount3}  />
      <UserCard2 userInfo={userInfo4} setCount={setsetCount4}  />
    </div>
  </>
}

function Hook1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);

  const userInfo1 = {
    count: count1,
    name: 'userInfo1'
  }

  const userInfo2 =  {
    count: count2,
    name: 'userInfo2'
  }

  const userInfo3 = useMemo(() => {
    return {
      count: count3,
      name: 'userInfo3'
    }
  }, [count3])

  const userInfo4 =  {
    count: count4,
    name: 'userInfo4'
  }

  const setsetCount4 = (num: number) => setCount4(num)

  return <>
    <div style={{ marginTop: 20 }}>
      <p>...userInfo</p>
      <UserCard1 {...userInfo1} setCount={setCount1} />
      <UserCard1 {...userInfo2} setCount={setCount2}  />
      <UserCard1 {...userInfo3} setCount={setCount3}  />
      <UserCard1 {...userInfo4} setCount={setsetCount4}  />
    </div>
  </>
}


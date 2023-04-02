import { useState, useEffect, useRef } from "react";

const Counter = () => {
  console.log(Date.now(), '------------');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const latestCount = useRef(count2);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert('You clieked count1 on: ' + count1 + '\n' + 'latestCount: ' + latestCount.current);
    }, 2000);
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clieked count1 ${count1} times`);
    }, 1000);

    return () => {
      console.log('取消 count1 的订阅');
    }
  });

  useEffect(() => {
    latestCount.current = count2;

    setTimeout(() => {
      console.log(`You clieked count2 ${latestCount.current} times`);
    }, 1000);

    return () => {
      console.log('取消 count2 的订阅');
    }
  })

  return <div>
    <div>
      <button onClick={() => setCount1(count1 + 1)}>Click to add count1</button>
      <span>You clieked {count1} times</span>
    </div>
    <div>
      <button onClick={() => setCount2(count2 + 1)}>Click to add count2</button>
      <span>You clieked {count2} times</span>
    </div>
    <div>
      <button onClick={handleAlertClick}>Click to show alert</button>
    </div>
  </div>
}

export default Counter;
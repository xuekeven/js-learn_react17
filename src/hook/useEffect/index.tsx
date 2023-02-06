import { useState, useEffect, useRef } from "react";

const Counter = () => {
  console.log('------------');
  console.log(Date.now());

  const [count1, setCount1] = useState(0);

  const handleAlertClick = () => {
    setTimeout(() => {
      alert('You clieked on: ' + count1);
    }, 1000);
  }

  useEffect(() => {
    document.title = `You clicked count1 ${count1} times`;
    setTimeout(() => {
      console.log(`You clieked count1 ${count1} times`);
    }, 1000);
    return () => {
      console.log('取消 count1 的订阅');
    }
  });

  const [count2, setCount2] = useState(0);
  const latestCount = useRef(count2);

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
      <p>You clieked {count1} times</p>
      <button onClick={() => setCount1(count1 + 1)}>Click to add count1</button>
      <button onClick={handleAlertClick}>Click to show alert count1</button>
    </div>

    <div>
      <p>You clieked {count2} times</p>
      <button onClick={() => setCount2(count2 + 1)}>Click to add count2</button>
    </div>
  </div>
}

export default Counter;
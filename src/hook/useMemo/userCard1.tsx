import React from 'react';

interface UserCardProps {
  count: number,
  name: string,
  setCount: any
}

const UserCard = ({ count, name, setCount }: UserCardProps) => {
  return (
    <div>
      <button onClick={() => setCount(++count)}>setCount</button>
      <span style={{ marginLeft: 10}}>{count}---{name}---{Math.random()}</span>
    </div>
  );
};

export default React.memo(UserCard);
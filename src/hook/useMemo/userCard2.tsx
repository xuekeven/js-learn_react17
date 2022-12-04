import React from 'react';

interface userInfo {
  count: number,
  name: string,
}

interface UserCardProps {
  userInfo: userInfo,
  setCount: any
}

const UserCard = ({ userInfo, setCount }: UserCardProps) => {
  return (
    <div>
      <button onClick={() => setCount(++userInfo.count)}>setCount</button>
      <span style={{ marginLeft: 10}}>{userInfo.count}---{userInfo.name}---{Math.random()}</span>
    </div>
  );
};

export default React.memo(UserCard);
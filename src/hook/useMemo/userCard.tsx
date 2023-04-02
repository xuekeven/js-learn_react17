import React from 'react';

interface UserCard1Props {
  count: number,
  name: string,
  setCount: any,
  comUseMemo?: boolean
}

interface UserCard2Props {
  userInfo: userInfo,
  setCount: any,
  comUseMemo?: boolean
}

interface userInfo {
  count: number,
  name: string,
}

const UserCard1 = ({ count, name, setCount }: UserCard1Props) => {
  return (
    <div>
      <button onClick={() => setCount(++count)}>setCount</button>
      <span style={{ marginLeft: 10}}>{count}---{name}---{Math.random()}</span>
    </div>
  );
};

const UserCard2 = ({ userInfo, setCount }: UserCard2Props) => {
  return (
    <div>
      <button onClick={() => setCount(++userInfo.count)}>setCount</button>
      <span style={{ marginLeft: 10}}>{userInfo.count}---{userInfo.name}---{Math.random()}</span>
    </div>
  );
};

const UserCard1Memo = React.memo(UserCard1);
const UserCard2Memo = React.memo(UserCard2);

const UserCard1Wrapper = (props: any) => {
  if (props.comUseMemo) {
    return <UserCard1Memo {...props} />
  } else {
    return <UserCard1 {...props} />
  }
}
const UserCard2Wrapper = (props: any) => {
  if (props.comUseMemo) {
    return <UserCard2Memo {...props} />
  } else {
    return <UserCard2 {...props} />
  }
}

export {
  UserCard1Wrapper,
  UserCard2Wrapper
} 
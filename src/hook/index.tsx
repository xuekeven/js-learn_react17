import { useState } from 'react';
import { Tabs } from 'antd';
import { TabPane } from '../interface';

import LifeCycle from './lifeCycle';
import UseCallBack from './useCallBack';
import UseMemo from './useMemo';
import UseEffect from './useEffect';
import UseImperativeHandle from './useImperativeHandle';

const Hook = () => {
  const [items, setItems] = useState<TabPane[]>([
    {
      label: `LifeCycle`,
      key: '1',
      children: <LifeCycle />,
    },
    {
      label: `useCallBack`,
      key: '2',
      children: <UseCallBack />,
    },
    {
      label: `useMemo`,
      key: '3',
      children: <UseMemo />,
    },
    {
      label: `useEffect`,
      key: '4',
      children: <UseEffect />,
    },
    {
      label: `useImperativeHandle`,
      key: '5',
      children: <UseImperativeHandle />,
    },
  ]);

  return <>
    <Tabs
      defaultActiveKey="1"
      type="card"
      items={items}
    />
  </>
}

export default Hook;
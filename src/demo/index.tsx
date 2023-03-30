import { useState } from 'react';
import { Tabs } from 'antd';
import { TabPane } from '../interface';

import TicTacToe from './TicTacToe';
import ToDos from './todos';
import ReduxTree from './redux-tree';
import ReduxToDos from './redux-todos/';
import ReduxDragTree from './redux-dragTree';

const Demo = () => {
  const [items, setItems] = useState<TabPane[]>([
    {
      label: `TicTacToe`,
      key: '1',
      children: <TicTacToe />,
    },
    {
      label: `ToDos`,
      key: '2',
      children: <ToDos />,
    },
    {
      label: `ReduxTree`,
      key: '3',
      children: <ReduxTree />,
    },
    {
      label: `ReduxToDos`,
      key: '4',
      children: <ReduxToDos />,
    },
    {
      label: `ReduxDragTree`,
      key: '5',
      children: <ReduxDragTree />,
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

export default Demo;
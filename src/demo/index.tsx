import { useState } from 'react';
import { Tabs } from 'antd';
import { TabPane } from '../interface';

import Author from './author';
import TicTacToe from './TicTacToe';
import ToDos from './todos';
import ReduxToDos from './redux-todos/';
import ReduxTree from './redux-tree';
import ReduxDragTree from './redux-dragTree';

const Demo = () => {
  const [items, setItems] = useState<TabPane[]>([
    {
      label: `Author`,
      key: '1',
      children: <Author />,
    },
    {
      label: `TicTacToe`,
      key: '2',
      children: <TicTacToe />,
    },
    {
      label: `ToDos`,
      key: '3',
      children: <ToDos />,
    },
    {
      label: `ReduxToDos`,
      key: '4',
      children: <ReduxToDos />,
    },
    {
      label: `ReduxTree`,
      key: '5',
      children: <ReduxTree />,
    },
    {
      label: `ReduxDragTree`,
      key: '6',
      children: <ReduxDragTree />,
    },
  ]);

  return <>
    <Tabs
      destroyInactiveTabPane
      defaultActiveKey="1"
      type="card"
      items={items}
    />
  </> 
}

export default Demo;
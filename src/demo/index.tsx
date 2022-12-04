import { Tabs } from '@arco-design/web-react';

import TicTacToe from './TicTacToe';
import ToDos from './todos';
import ReduxTree from './redux-tree';
import ReduxToDos from './redux-todos/';
import ReduxDragTree from './redux-dragTree';

const TabPane = Tabs.TabPane;

const Demo = () => {
  return <>
    <Tabs destroyOnHide className='ant-tabs demo-tabs' type='rounded'>
      <TabPane key='1' title='TicTacToe'>
        <TicTacToe />
      </TabPane>
      <TabPane key='2' title='ToDos'>
        <ToDos />
      </TabPane>
      <TabPane key='3' title='ReduxTree'>
        <ReduxTree />
      </TabPane>
      <TabPane key='4' title='ReduxToDos'>
        <ReduxToDos />
      </TabPane>
      <TabPane key='5' title='ReduxDragTree'>
        <ReduxDragTree />
      </TabPane>
    </Tabs>
  </>
}

export default Demo;
import { Tabs } from '@arco-design/web-react';

import LifeCycle from './lifeCycle';
import UseCallBack from './useCallBack';
import UseMemo from './useMemo';
import UseEffect from './useEffect';
import UseImperativeHandle from './useImperativeHandle';

const TabPane = Tabs.TabPane;

const Hook = () => {
  return <>
    <Tabs destroyOnHide className='ant-tabs hook-tabs' type='rounded'>
      <TabPane key='1' title='LifeCycle'>
        <LifeCycle />
      </TabPane>
      <TabPane key='2' title='useCallBack'>
        <UseCallBack />
      </TabPane>
      <TabPane key='3' title='useMemo'>
        <UseMemo />
      </TabPane>
      <TabPane key='4' title='UseEffect'>
        <UseEffect />
      </TabPane>
      <TabPane key='5' title='UseImperativeHandle'>
        <UseImperativeHandle />
      </TabPane>
    </Tabs>
  </>
}

export default Hook;
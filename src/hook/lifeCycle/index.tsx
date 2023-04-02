import React from 'react';
import { Button } from 'antd';
import './index.scss';

import FirstRenderOld from './first-render-old';
import FirstRenderNew from './first-render-new';
import ChangeRenderOld from './change-render-old';
import ChangeRenderNew from './change-render-new';

class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      render: 'FirstRenderOld' 
    }
  }

  changeRender(render: string) {
    this.setState({ render })
  }

  render() {
    const ChildMap: any = {
      FirstRenderOld: <FirstRenderOld />,
      FirstRenderNew: <FirstRenderNew />,
      ChangeRenderOld: <ChangeRenderOld />,
      ChangeRenderNew: <ChangeRenderNew />
    }

    return <div style={{ marginRight: 20, display: 'flex' }}>
      <div style={{ margin: '0 15px 10px 5px' }}>
        <div><Button onClick={() => this.changeRender('FirstRenderOld')}>首次渲染---旧生命周期</Button></div>
        <div><Button onClick={() => this.changeRender('FirstRenderNew')}>首次渲染---新生命周期</Button></div>
        <div><Button onClick={() => this.changeRender('ChangeRenderOld')}>组件改变---旧生命周期</Button></div>
        <div><Button onClick={() => this.changeRender('ChangeRenderNew')}>组件改变---新生命周期</Button></div>
      </div>
      <div className='life-cycle-wrapper'>
        {ChildMap[this.state.render]}
      </div>
    </div>
  }
}

export default App;
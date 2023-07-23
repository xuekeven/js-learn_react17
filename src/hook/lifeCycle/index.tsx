import React from 'react';
import { Button } from 'antd';
import './index.scss';

import ChangeRenderOld from './old';
import ChangeRenderNew from './new';

class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      render: 'ChangeRenderOld' 
    }
  }

  changeRender(render: string) {
    this.setState({ render })
  }

  render() {
    const ChildMap: any = {
      ChangeRenderOld: <ChangeRenderOld />,
      ChangeRenderNew: <ChangeRenderNew />
    }

    return <div style={{ marginRight: 20, display: 'flex' }}>
      <div style={{ margin: '0 15px 10px 5px' }}>
        <div><Button onClick={() => this.changeRender('ChangeRenderOld')}>旧生命周期</Button></div>
        <div><Button onClick={() => this.changeRender('ChangeRenderNew')}>新生命周期</Button></div>
      </div>
      <div className='life-cycle-wrapper'>
        {ChildMap[this.state.render]}
      </div>
    </div>
  }
}

export default App;
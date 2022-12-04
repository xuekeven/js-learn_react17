import React from 'react';
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
    const { render } = this.state;

    const ChildMap: any = {
      FirstRenderOld: <FirstRenderOld />,
      FirstRenderNew: <FirstRenderNew />,
      ChangeRenderOld: <ChangeRenderOld />,
      ChangeRenderNew: <ChangeRenderNew />
    }

    const Button = <div style={{ marginBottom: 30 }}>
      <div><button onClick={() => this.changeRender('FirstRenderOld')}>首次渲染---旧生命周期</button></div>
      <div><button onClick={() => this.changeRender('FirstRenderNew')}>首次渲染---新生命周期</button></div>
      <div><button onClick={() => this.changeRender('ChangeRenderOld')}>组件改变---旧生命周期</button></div>
      <div><button onClick={() => this.changeRender('ChangeRenderNew')}>组件改变---新生命周期</button></div>
    </div>

    const Child = ChildMap[render];

    return <div style={{ marginTop: 20 }}>
      {Button}{Child}
    </div>
  }
}

export default App;
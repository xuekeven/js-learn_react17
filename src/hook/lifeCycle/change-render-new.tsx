import React from 'react';
import { Button } from 'antd';

let wordsAry:string[] = [];

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    wordsAry = [
      '---组件改变---新生命周期---', 
      'App constructor'
    ]
    this.state = {
      times: 0,
    }
  }

  static getDerivedStateFromProps() {
    wordsAry.push('App static getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    wordsAry.push('App componentDidMount');
  }

  shouldComponentUpdate(nextProps: any) {
    wordsAry.push('App shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: any) {
    wordsAry.push('App getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    wordsAry.push('App componentDidUpdate');
  }

  render() {
    wordsAry.push('App render');
    wordsAry.push('----------');

    return (
      <div className='life-cycle'>
        <div>
          <Button onClick={() => this.setState((times: number) => ({ times: times + 1 }))}>改变父组件</Button>
          <Button onClick={() => console.log('手动打印---', wordsAry)}>打印wordsAry（不重渲染）</Button>
          <Child key={1} order={1} />
          <Child key={2} order={2} />
        </div>
        <div>
          { wordsAry.map((ele: string, ind: number) => <div>{ind}---{ele}</div>) }
        </div>
      </div>
    )
  }
}

class Child extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    wordsAry.push(`Child${this.props.order} constructor`);
    this.state = {
      times: 0,
    };
  }

  static getDerivedStateFromProps(props: any) {
    wordsAry.push(`Child${props.order} static getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    wordsAry.push(`Child${this.props.order} componentDidMount`);
  }

  shouldComponentUpdate(nextProps: any) {
    wordsAry.push(`Child${nextProps.order} shouldComponentUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: any) {
    wordsAry.push(`Child${prevProps.order} getSnapshotBeforeUpdate`);
    return null;
  }

  componentDidUpdate() {
    wordsAry.push(`Child${this.props.order} componentDidUpdate`);
  }

  render() {
    wordsAry.push(`Child${this.props.order} render`);

    return (
      <Button onClick={() => this.setState((times: number) => ({ times: times + 1 }))}>
        改变子组件Child{this.props.order}
      </Button>
    )
  }
}

export default App;
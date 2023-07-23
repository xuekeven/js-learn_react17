import React from 'react';
import { Button } from 'antd';

let wordsAry: string[] = [];

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

  static getDerivedStateFromProps(props: any, state: any) {
    wordsAry.push('App static getDerivedStateFromProps');
    console.log('App static getDerivedStateFromProps', props, state, this);
    return null;
  }

  componentDidMount() {
    wordsAry.push('App componentDidMount');
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    wordsAry.push('App shouldComponentUpdate');
    console.log('App shouldComponentUpdate', this.props, nextProps, this.state, nextState);
    if (nextState.times === 2) return false
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    wordsAry.push('App getSnapshotBeforeUpdate');
    console.log('App getSnapshotBeforeUpdate', this.props, prevProps, this.state, prevState);
    return 666;
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    wordsAry.push('App componentDidUpdate');
    console.log('App componentDidUpdate', this.props, prevProps, this.state, prevState, snapshot);
  }

  render() {
    wordsAry.push('App render');
    wordsAry.push('----------');
    console.log('App render', this.props, this.state);

    return (
      <div className='life-cycle'>
        <div>
          <Button onClick={() => this.setState((s: any) => ({ times: s.times + 1 }))}>改变父组件</Button>
          <Button onClick={() => console.log('手动打印---', wordsAry)}>打印wordsAry（不重渲染）</Button>
          <Child key={1} order={1} appTimes={this.state.times} />
          <Child key={2} order={2} appTimes={this.state.times} />
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

  static getDerivedStateFromProps(props: any, state: any) {
    wordsAry.push(`Child${props.order} static getDerivedStateFromProps`);
    console.log(`Child${props.order} static getDerivedStateFromProps`, props, state, this);
    return null;
  }

  componentDidMount() {
    wordsAry.push(`Child${this.props.order} componentDidMount`);
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    wordsAry.push(`Child${nextProps.order} shouldComponentUpdate`);
    console.log(`Child${nextProps.order} shouldComponentUpdate`, this.props, nextProps, this.state, nextState);
    if (nextState.times === 2) return false
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    wordsAry.push(`Child${prevProps.order} getSnapshotBeforeUpdate`);
    console.log(`Child${prevProps.order} getSnapshotBeforeUpdate`, this.props, prevProps, this.state, prevState);
    return 333;
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    wordsAry.push(`Child${this.props.order} componentDidUpdate`);
    console.log(`Child${this.props.order} componentDidUpdate`, this.props, prevProps, this.state, prevState, snapshot);
  }

  render() {
    wordsAry.push(`Child${this.props.order} render`);
    console.log(`Child${this.props.order} render`, this.props, this.state);

    return (
      <Button onClick={() => this.setState((s: any) => ({ times: s.times + 1 }))}>
        改变Child{this.props.order}
      </Button>
    )
  }
}

export default App;
import React from 'react';
import { Button } from 'antd';

class App extends React.Component<any, any> {
  wordsAry: string[];

  constructor(props: any) {
    super(props);
    this.wordsAry = [
      '---组件改变---旧生命周期---', 
      'App constructor'
    ];
    this.state = {
      times: 0,
    }
  }

  UNSAFE_componentWillMount() {
    this.wordsAry.push('App componentWillMount');
  }

  componentDidMount() {
    this.wordsAry.push('App componentDidMount');
  }

  UNSAFE_componentWillReceiveProps(nextProps: any, nextState: any) {
    this.wordsAry.push('App componentWillReceiveProps');
    console.log('App componentWillReceiveProps', this.props, nextProps, this.state, nextState);
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    this.wordsAry.push('App shouldComponentUpdate');
    console.log('App shouldComponentUpdate', this.props, nextProps, this.state, nextState);
    if (nextState.times === 2) return false
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps: any, nextState: any) {
    this.wordsAry.push('App componentWillUpdate');
    console.log('App componentWillUpdate', this.props, nextProps, this.state, nextState);
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    this.wordsAry.push('App componentDidUpdate');
    console.log('App componentDidUpdate', this.props, prevProps, this.state, prevState, snapshot);
  }

  addConsole = (str: string) => {
    this.wordsAry.push(str);
  }

  render() {
    this.wordsAry.push('App render');
    this.wordsAry.push('----------');
    console.log('App render', this.props, this.state);

    return (
      <div className='life-cycle'>
        <div>
          <Button onClick={() => this.setState((s: any) => ({ times: s.times + 1 }))}>改变父组件</Button>
          <Button onClick={() => console.log('手动打印---', this.wordsAry)}>打印wordsAry（不重渲染）</Button>
          <Child key={1} order={1} appTimes={this.state.times} addConsole={this.addConsole} />
          <Child key={2} order={2} appTimes={this.state.times} addConsole={this.addConsole} />
        </div>
        <div>
          { this.wordsAry.map((ele: string, ind: number) => <div>{ind}---{ele}</div>) }
        </div>
      </div>
    )
  }
}

class Child extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.props.addConsole(`Child${this.props.order} constructor`);
    this.state = {
      times: 0,
    };
  }

  UNSAFE_componentWillMount() {
    this.props.addConsole(`Child${this.props.order} componentWillMount`);
  }

  componentDidMount() {
    this.props.addConsole(`Child${this.props.order} componentDidMount`);
  }

  UNSAFE_componentWillReceiveProps(nextProps: any, nextState: any) {
    this.props.addConsole(`Child${nextProps.order} componentWillReceiveProps`);
    console.log(`Child${nextProps.order} componentWillReceiveProps`, this.props, nextProps, this.state, nextState);
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    this.props.addConsole(`Child${nextProps.order} shouldComponentUpdate`);
    console.log(`Child${nextProps.order} shouldComponentUpdate`, this.props, nextProps, this.state, nextState);
    if (nextState.times === 2) return false
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps: any, nextState: any) {
    this.props.addConsole(`Child${this.props.order} componentWillUpdate`);
    console.log(`Child${this.props.order} componentWillUpdate`, this.props, nextProps, this.state, nextState);
  }

  componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    this.props.addConsole(`Child${this.props.order} componentDidUpdate`);
    console.log(`Child${this.props.order} componentDidUpdate`, this.props, prevProps, this.state, prevState, snapshot);
  }

  render() {
    this.props.addConsole(`Child${this.props.order} render`);
    console.log(`Child${this.props.order} render`, this.props, this.state);

    return (
      <Button onClick={() => this.setState((s: any) => ({ times: s.times + 1 }))}>
        改变Child{this.props.order}
      </Button>
    )
  }
}

export default App;
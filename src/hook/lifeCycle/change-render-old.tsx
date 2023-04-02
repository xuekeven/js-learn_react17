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

  UNSAFE_componentWillReceiveProps() {
    this.wordsAry.push('App componentWillReceiveProps');
  }

  shouldComponentUpdate(nextProps: any) {
    this.wordsAry.push('App shouldComponentUpdate');
    return true;
  }

  UNSAFE_componentWillUpdate() {
    this.wordsAry.push('App componentWillUpdate');
  }

  componentDidUpdate() {
    this.wordsAry.push('App componentDidUpdate');
  }

  addConsole = (str: string) => {
    this.wordsAry.push(str);
  }

  addtimes = (str: string) => {
    this.setState((times: number) => ({ times: times + 1 }))
  }

  render() {
    this.wordsAry.push('App render');
    this.wordsAry.push('----------');

    return (
      <div className='life-cycle'>
        <div>
          <Button onClick={() => this.setState((times: number) => ({ times: times + 1 }))}>改变父组件</Button>
          <Button onClick={() => console.log('手动打印---', this.wordsAry)}>打印wordsAry（不重渲染）</Button>
          <Child key={1} order={1} addConsole={this.addConsole} />
          <Child key={2} order={2} addConsole={this.addConsole} />
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

  UNSAFE_componentWillReceiveProps(nextProps: any) {
    this.props.addConsole(`Child${nextProps.order} componentWillReceiveProps`);
  }

  shouldComponentUpdate(nextProps: any) {
    this.props.addConsole(`Child${nextProps.order} shouldComponentUpdate`);
    return true;
  }

  UNSAFE_componentWillUpdate() {
    this.props.addConsole(`Child${this.props.order} componentWillUpdate`);
  }

  componentDidUpdate() {
    this.props.addConsole(`Child${this.props.order} componentDidUpdate`);
  }

  render() {
    this.props.addConsole(`Child${this.props.order} render`);

    return (
      <Button onClick={() => this.setState((times: number) => ({ times: times + 1 }))}>
        改变Child{this.props.order}
      </Button>
    )
  }
}

export default App;
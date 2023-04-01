import React from 'react';
import { Button } from 'antd';

class App extends React.Component<any, any> {
  wordsAry: string[];

  constructor(props: any) {
    super(props);
    console.log('constructor---this---', this);
    this.wordsAry = [
      '---首次渲染---旧生命周期---', 
      'App constructor'
    ];
    this.state = {
      times: 0
    };
  }

  UNSAFE_componentWillMount() {
    this.wordsAry.push('App componentWillMount');
  }

  componentDidMount() {
    this.wordsAry.push('App componentDidMount');
    console.log('App componentDidMount---wordsAry', this.wordsAry);
  }

  addConsole = (str: string) => {
    this.wordsAry.push(str);
  }

  render() {
    this.wordsAry.push('App render');
    this.wordsAry.push('----------');

    return (
      <div>
        <Button onClick={() => this.setState((times: number) => ({ times: times + 1 }))}>改变父组件</Button>
        <Button onClick={() => console.log('手动打印---', this.wordsAry)}>打印wordsAry（不重渲染）</Button>

        <Child key={1} order={1} addConsole={this.addConsole} />
        <Child key={2} order={2} addConsole={this.addConsole} />
        { this.wordsAry.map((ele: string) => <div>{ele}</div>) }
      </div>
    )
  }
}

class Child extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.props.addConsole(`Child${this.props.order} constructor`)
  }

  UNSAFE_componentWillMount() {
    this.props.addConsole(`Child${this.props.order} componentWillMount`)
  }

  componentDidMount() {
    this.props.addConsole(`Child${this.props.order} componentDidMount`)
  }

  render() {
    this.props.addConsole(`Child${this.props.order} render`)
    return null
  }
}

export default App;
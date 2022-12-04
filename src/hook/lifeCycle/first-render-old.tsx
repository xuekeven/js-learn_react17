import React from 'react';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log('---首次渲染---旧生命周期---');
    console.log('App constructor');
  }

  UNSAFE_componentWillMount() {
    console.log('App componentWillMount');
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
    console.log('App render');
    return (
      <div>
        ---首次渲染---旧生命周期---
        <Child order={1} />
        <Child order={2} />
      </div>
    )
  }
}

class Child extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log(`Child${this.props.order} constructor`);
  }

  UNSAFE_componentWillMount() {
    console.log(`Child${this.props.order} componentWillMount`);
  }

  componentDidMount() {
    console.log(`Child${this.props.order} componentDidMount`);
  }

  render() {
    console.log(`Child${this.props.order} render`);
    return (
      <div>
        Child{this.props.order}
      </div>
    )
  }
}

export default App;
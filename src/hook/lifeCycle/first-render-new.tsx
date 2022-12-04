import React from 'react';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log('---首次渲染---新生命周期---');
    console.log('App constructor');
  }

  static getDerivedStateFromProps() {
    console.log('App static getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  render() {
    console.log('App render');
    return (
      <div>
        ---首次渲染---新生命周期---
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

  static getDerivedStateFromProps(props: any) {
    console.log(`Child${props.order} static getDerivedStateFromProps`);
    return null;
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
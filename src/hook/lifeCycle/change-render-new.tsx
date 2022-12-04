import React from 'react';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    console.log('---组件改变---新生命周期---');
    console.log('App constructor');
    this.state = {
      count: 0,
    }
  }

  static getDerivedStateFromProps() {
    console.log('App static getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('App componentDidMount');
  }

  shouldComponentUpdate(nextProps: any) {
    console.log('App shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: any) {
    console.log('App getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('App componentDidUpdate');
  }

  render() {
    console.log('App render');
    return (
      <div>
        ---组件改变---新生命周期---
        <div><button onClick={() => this.setState((count: any) => ({ count: count + 1 }))}>点击改变父组件App</button></div>
        <div><Child order={1} /></div>
        <div><Child order={2} /></div>
      </div>
    )
  }
}

class Child extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    console.log(`Child${this.props.order} constructor`);
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props: any) {
    console.log(`Child${props.order} static getDerivedStateFromProps`);
    return null;
  }

  componentDidMount() {
    console.log(`Child${this.props.order} componentDidMount`);
  }

  shouldComponentUpdate(nextProps: any) {
    console.log(`Child${nextProps.order} shouldComponentUpdate`);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: any) {
    console.log(`Child${prevProps.order} getSnapshotBeforeUpdate`);
    return null;
  }

  componentDidUpdate() {
    console.log(`Child${this.props.order} componentDidUpdate`);
  }

  render() {
    console.log(`Child${this.props.order} render`);
    return (
      <button onClick={() => this.setState((count: any) => ({ count: count + 1 }))}>
        点击改变子组件Child{this.props.order}
      </button>
    )
  }
}

export default App;
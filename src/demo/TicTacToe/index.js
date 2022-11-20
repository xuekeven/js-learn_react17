import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// React 是一个声明式，高效且灵活的用于构建用户界面的 JavaScript 库。
// 使用 React 可以将一些简短、独立的代码片段组合成复杂的 UI 界面，这些代码片段被称作“组件”。
// React 中拥有多种不同类型的组件，先从 React.Component 的子类开始。

// 我们通过使用组件来告诉 React 我们希望在屏幕上看到什么。
// 当数据发生改变时，React 会高效地更新并重新渲染我们的组件。

// 本游戏有三个 React 组件：Square、Board、Game。

// Square、Board、Game 都是一个 React 组件类，或者说是一个 React 组件类型。
// 一个组件接收一些参数，我们把这些参数叫做 props（“props” 是 “properties” 简写）。
// 然后通过 render 方法返回需要展示在屏幕上的视图的层次结构。

// render 方法的返回值描述了你希望在屏幕上看到的内容。React 根据描述，然后把结果展示出来。
// 更具体地来说，render 返回了一个 React 元素，这是一种对渲染内容的轻量级描述。
// 大多数的 React 开发者使用了一种名为 “JSX” 的特殊语法，JSX 可以让你更轻松地书写这些结构。
// 语法 <div /> 会被编译成 React.createElement('div')。在 JSX 中可以任意使用 JavaScript 表达式，
// 只需要用一个大括号把表达式括起来。每一个 React 元素事实上都是一个 JavaScript 对象，
// 你可以在你的程序中把它保存在变量中或者作为参数传递。

// 每个组件都是封装好的，并且可以单独运行，这样就可以通过组合简单的组件来构建复杂的 UI 界面。

// 通过 Props 可以在组件之间传递数据。

// 可以通过在 React 组件的构造函数中设置 this.state 来初始化 state。
// this.state 应该被视为一个组件的私有属性。我们在 this.state 中存储值。

// 当你遇到需要同时获取多个子组件数据，或者两个组件之间需要相互通讯的情况时，
// 需要把子组件的 state 数据提升至其共同的父组件当中保存。
// 之后父组件可以通过 props 将状态数据传递到子组件当中。
// 这样应用当中所有组件的状态数据就能够更方便地同步共享。

// 如果子组件不再持有 state，发生事件的时候，子组件需要从父组件接受值，并通知父组件，
// 在 React 术语中，我们把这样的子组件称做“受控组件”。如，Square 组件就是“受控组件”。
// 在这种情况下，Board 组件完全控制了 Square 组件。

// 如果你想写的组件只包含一个 render 方法，并且不包含 state，那么使用函数组件就会更简单。
// 我们不需要定义一个继承于 React.Component 的类，我们可以定义一个函数，这个函数接收 props 作为参数，
// 然后返回需要渲染的元素。函数组件写起来并不像 class 组件那么繁琐，很多组件都可以使用函数组件来写。

// Square 组件渲染了一个单独的 <button>。
class Square extends React.Component {
  // constructor(props) { 
  //   super(props);
  //   this.state = {
  //     value: null,
  //   }
  // }
  render() {
    return (
      <button
        class="square" 
        onClick={() => this.props.on1Click()}
      >
        {this.props.value}
      </button>
    );
  }
}

// 用函数组件来写 Square 组件：把两个 this.props 都替换成了 props。
// function Square(props) {
//   return (
//     <button class='square' onClick={props.onClick}>
//       {props.value}
//     </button>
//   )
// }

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; 
    }
  }
  return null;
}

// Board 组件渲染了 9 个方块。
class Board extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: true,
  //   };
  // }

  // handleClick(i) {
  //   // 对之前的数组进行浅拷贝。
  //   const squares = this.state.squares.slice();
  //   if (calculateWinner(squares) || squares[i]) return;
  //   squares[i] = this.state.xIsNext ? 'X' : 'O';
  //   // 每次在组件中调用 setState 时，React 都会自动更新其子组件。
  //   this.setState({squares: squares, xIsNext: !this.state.xIsNext});
  // }

  renderSquare(i) {
    // 为了提高可读性，把返回的 React 元素拆分成了多行，同时在最外层加了小括号，
    // 这样 JavaScript 解析的时候就不会在 return 的后面自动插入一个分号从而破坏代码结构。
    return (
      <Square
        value={this.props.squares[i]} 
        on1Click={() => this.props.on2Click(i)}
      /> // 通过 Props，父组件向子组件传递数据
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    // let status;
    // if (winner) status = 'Winner: ' + winner;
    // else status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div>
        {/* <div class="status">{status}</div> */}
        <div class="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div class="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div class="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game 组件渲染了含有默认值的一个棋盘。
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{squares: Array(9).fill(null)}],
      stepNumber: 0,
      xIsNext: true
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    // 对之前的数组进行浅拷贝。
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // 每次在组件中调用 setState 时，React 都会自动更新其子组件。
    this.setState({
      history: history.concat([{squares: squares}]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status;
    if (winner) status = 'Winner: ' + winner;
    else status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

    return (
      <div class="game">
        <div class="game-board">
          <Board
            squares={current.squares}
            on2Click={(i) => this.handleClick(i)}
          />
        </div>
        <div class="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    )
  }
}

// ========================================

export default Game
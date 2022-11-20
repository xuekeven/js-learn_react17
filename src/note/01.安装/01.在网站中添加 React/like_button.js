'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like?'
    );
  }
}

// 下面两行代码会找到在步骤 1 中添加到 HTML 里的 <div>，
// 然后在它内部显示 React 组件 “Like” 按钮。
const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
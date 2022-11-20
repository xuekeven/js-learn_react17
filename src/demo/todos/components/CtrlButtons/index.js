import React from "react"
import "./style.scss"

class CtrlButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      "buttons": ["All", "Active", "Completed"],
    }
  }

  getLeftListsNum = () => {
    let num = 0
    this.props.lists.forEach(ele => {
      if (ele.status === false) num++
    })
    return num
  }

  getCompletedLists = () => {
    return this.props.lists.length - this.getLeftListsNum()
  }

  getClassNameType = (type) => {
    if (type !== this.props.buttonType) return "toChoose "
  }

  getClassNameTipRight = () => {
    return this.getCompletedLists() > 0 ? "tip-right " : "hidden "
  }

  getHistoryButtonsDisabled = (step) => {
    if (step > 0) return this.props.allLists.length - this.props.nowListsNum <= step ? "disabled" : ""
    if (step < 0) return -step > this.props.nowListsNum ? "disabled" : ""
  }

  renderTypeButtons = (ele, index) => {
    return (
      <button
        key={index}
        className={"typeButton " + this.getClassNameType(index)}
        onClick={() => this.props.changeButtonType(index)}
      >
        {ele}
      </button>
    )
  }

  renderHistoryButtons(step) {
    const actionName = step < 0 ? "Back " : "Forward "
    const stepName = Math.abs(step) > 1 ? " steps" : " step"
    return (
      <button
        className="historyButton "
        onClick={() => this.props.jumpToHistory(step)}
        disabled={this.getHistoryButtonsDisabled(step)}
      >
        {actionName + Math.abs(step) + stepName}
      </button>
    )
  }

  render() {
    const allLists = this.props.allLists
    if (allLists.length <= 1 && allLists[0].length <= 0) return null
    return (
      <div id="ctrlButtons">
        <div className="allTypeButtons">
          <span className="tip-left">{this.getLeftListsNum() + " lists left"}</span>
          <div className="typeButtons">{this.state.buttons.map((ele, index) => this.renderTypeButtons(ele, index))}</div>
          <span className={this.getClassNameTipRight()} onClick={() => this.props.clearCompleted()}>Clear completed</span>
        </div>
        <div className="allhistoryButtons">
          {this.renderHistoryButtons(-1)}
          {this.renderHistoryButtons(1)}
        </div>
      </div>
    )
  }
}

export default CtrlButtons
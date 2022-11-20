import React from "react"
import "./style.scss"
import Input from "../Input"
import List from "../List"
import CtrlButtons from "../CtrlButtons"

class ToDos extends React.Component {
  constructor(props) {
    super(props)
    if (localStorage.lists) {
      const allLists = [JSON.parse(localStorage.lists)]
      this.state = {
        allLists,
        nowListsNum: 0,
        buttonType: 0
      }
    } else {
      this.state = {
        allLists: [[]],
        nowListsNum: 0,
        buttonType: 0,
      }
    }
  }
  // 添加新事件
  addList = (value) => {
    const { allLists } = this.state
    let { nowListsNum } = this.state
    const nowLists = allLists[nowListsNum].concat()
    if (allLists.length > nowListsNum) {
      allLists.splice(nowListsNum + 1, allLists.length - nowListsNum - 1)
    }
    nowLists.push({
      id: new Date().getTime(),
      status: false,
      value
    })
    allLists.push(nowLists)
    nowListsNum++
    // nowListsNum = allLists.length - 1
    this.setState({ allLists, nowListsNum })
  }
  // 改变事件状态
  changeListStatus = (id) => {
    const { allLists, nowListsNum } = this.state
    const nowLists = allLists[nowListsNum]
    nowLists.find(list => {
      if (list.id === id) {
        list.status = !list.status
      }
    })
    this.setState({ allLists })
  }
  // 改变所有事件状态
  changeAllListsStatus = () => {
    const { allLists, nowListsNum } = this.state
    const nowLists = allLists[nowListsNum]
    const allListsCompleted = nowLists.every(list => list.status === true)
    if (allListsCompleted) {
      nowLists.forEach(list => list.status = false)
    } else {
      nowLists.forEach(list => list.status = true)
    }
    this.setState({ allLists })
  }
  // 改变事件内容
  changeListValue = (id, event) => {
    const { allLists, nowListsNum } = this.state
    const nowLists = allLists[nowListsNum]
    nowLists.find(list => {
      if (list.id === id) {
        list.value = event.target.value
      }
    })
    this.setState({ allLists })
  }
  // 删除已完成事件
  clearCompleted = () => {
    let { nowListsNum } = this.state
    const { allLists } = this.state
    const nowLists = allLists[nowListsNum].concat()
    for (let i = nowLists.length - 1; i > -1; i--) {
      if (nowLists[i].status === true) {
        nowLists.splice(i, 1)
      }
    }
    if (allLists.length > nowListsNum) {
      allLists.splice(nowListsNum + 1, allLists.length - nowListsNum - 1)
    }
    allLists.push(nowLists)
    nowListsNum++
    // nowListsNum = allLists.length - 1
    this.setState({ allLists, nowListsNum })
  }
  // 改变列表展示
  changeButtonType = (type) => {
    const buttonType = type
    this.setState({ buttonType })
  }
  // 回到历史状态
  jumpToHistory = (step) => {
    const nowListsNum = this.state.nowListsNum + step
    this.setState({ nowListsNum })
  }
  // 渲染
  render() {
    const { allLists, nowListsNum, buttonType } = this.state
    const nowLists = allLists[nowListsNum]
    localStorage.lists = JSON.stringify(allLists[allLists.length - 1])
    return (
      <div id="todos">
        <p className="todos-title">todos</p>
        <div className="todos-content">
          <Input
            lists={nowLists}
            addList={this.addList}
            changeAllListsStatus={this.changeAllListsStatus}
          />
          <List
            lists={nowLists}
            buttonType={buttonType}
            changeListStatus={this.changeListStatus}
            changeListValue={this.changeListValue}
          />
          <CtrlButtons
            lists={nowLists}
            allLists={allLists}
            buttonType={buttonType}
            nowListsNum={nowListsNum}
            changeButtonType={this.changeButtonType}
            clearCompleted={this.clearCompleted}
            jumpToHistory={this.jumpToHistory}
          />
        </div>
      </div>
    )
  }
}

export default ToDos
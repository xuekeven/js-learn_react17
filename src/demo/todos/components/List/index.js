import React from "react"
import "./style.scss"

class List extends React.Component {
  constructor(props) {
    super(props)
  }

  getClassNameCompleted = (status) => {
    if (status) return "completed "
  }

  getClassNameCurrent = (status) => {
    if (status) return "currect "
  }

  renderList = (list) => {
    const { buttonType } = this.props
    if (buttonType === 0 || buttonType === 1 && list.status === false || buttonType === 2 && list.status === true) {
      return (
        <li key={list.id.toString()}>
          <span
            className={"circle " + this.getClassNameCurrent(list.status)}
            onClick={() => this.props.changeListStatus(list.id)}
          />
          <input
            type="text"
            value={list.value}
            className={"listInput " + this.getClassNameCompleted(list.status)}
            onChange={(event) => this.props.changeListValue(list.id, event)}
          />
        </li>
      )
    }
  }

  render() {
    const { lists } = this.props
    return (
      <div id="list">
        <ul>
          {lists.map(list => this.renderList(list))}
        </ul>
      </div>
    )
  }
}

export default List
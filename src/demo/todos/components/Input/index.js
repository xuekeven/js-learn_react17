import React from "react"
import "./style.scss"

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  inputAddList = (event) => {
    if (event.keyCode !== 13) return
    const value = event.target.value
    if (value === "") return
    this.props.addList(value)
    event.target.value = ""
  }

  getclassNameArrow = () => {
    const { lists } = this.props
    if (lists.length === 0) return "hidden "
    if (lists.every(list => list.status === true)) return "deepArrow "
  }

  render() {
    return (
      <div id="input">
        <span
          className={"arrow " + this.getclassNameArrow()}
          onClick={() => this.props.changeAllListsStatus()}
        />
        <input
          type="text"
          className="valueInput"
          onKeyUp={(event) => this.inputAddList(event)}
          placeholder="What needs to be done?"
        />
      </div>
    )
  }
}

export default Input
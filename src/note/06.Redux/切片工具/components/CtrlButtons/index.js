import React, { useCallback, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectState, saveThisLists, changeButtonType, clearCompleted, jumpToHistory } from "../../redux/slice"
import "./style.scss"

export default function CtrlButtons() {
  const { allLists, nowListsNum, buttonType } = useSelector(selectState)
  const dispatch = useDispatch()
  const nowLists = allLists[nowListsNum]
  const [buttons, setButtons] = useState(["All", "Active", "Completed"])

  if (allLists.length <= 1 && allLists[0].length <= 0) return null

  const getLeftListsNum = () => {
    let num = 0
    nowLists.forEach(ele => ele.status ? null : num++)
    return num
  }
  const getHistoryButtonsDisabled = (step) => {
    if (step > 0) return allLists.length - nowListsNum <= step ? "disabled" : ""
    if (step < 0) return -step > nowListsNum ? "disabled" : ""
  }
  const renderTypeButtons = (ele, index) => {
    return (
      <button
        key={index}
        className={`typeButton ${index !== buttonType ? "toChoose " : null}`}
        onClick={() => dispatch(changeButtonType(index))}
      >
        {ele}
      </button>
    )
  }
  const renderHistoryButtons = (step) => {
    const actionName = step < 0 ? "Back " : "Forward "
    const stepName = Math.abs(step) > 1 ? " steps" : " step"
    return (
      <button
        className="historyButton "
        onClick={() => dispatch(jumpToHistory(step))}
        disabled={getHistoryButtonsDisabled(step)}
      >
        {actionName + Math.abs(step) + stepName}
      </button>
    )
  }

  return (
    <div id="ctrlButtons">
      <div className="allTypeButtons">
        <span className="tip-left">{getLeftListsNum() + " lists left"}</span>
        <div className="typeButtons">{buttons.map((ele, index) => renderTypeButtons(ele, index))}</div>
        <span
          className={nowLists.length - getLeftListsNum() > 0 ? "tip-right " : "hidden "}
          onClick={() => {
            dispatch(clearCompleted())
            dispatch(saveThisLists())
          }}
        >
          Clear completed
        </span>
      </div>
      <div className="allhistoryButtons">
        {renderHistoryButtons(-1)}
        {renderHistoryButtons(1)}
      </div>
    </div>
  )
}
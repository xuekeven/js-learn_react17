import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectState, changeListStatus, changeListValue } from "../../redux/slice"
import "./style.scss"

export default function List() {
  const { allLists, nowListsNum, buttonType } = useSelector(selectState)
  const dispatch = useDispatch()
  const nowLists = allLists[nowListsNum]

  const renderList = (list) => {
    if (buttonType === 0 || buttonType === 1 && !list.status || buttonType === 2 && list.status) {
      return (
        <li key={list.id.toString()}>
          <span
            className={`circle ${list.status ? "currect " : null}`}
            onClick={() => dispatch(changeListStatus(list.id))}
          />
          <input
            type="text"
            value={list.value}
            className={`listInput ${list.status ? "completed " : null}`}
            onChange={(event) => dispatch(changeListValue([list.id, event]))}
          />
        </li>
      )
    }
  }

  return (
    <div id="list">
      <ul>
        {nowLists.map((list) => renderList(list))}
      </ul>
    </div>
  )
}
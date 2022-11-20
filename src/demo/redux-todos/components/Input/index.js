import React, { useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectState, saveThisLists, addList, changeAllListsStatus } from "../../redux/slice"
import "./style.scss"

export default function Input() {
  const { allLists, nowListsNum } = useSelector(selectState)
  const dispatch = useDispatch()
  const nowLists = allLists[nowListsNum]

  const inputAddList = (event) => {
    if (event.keyCode !== 13) return
    const value = event.target.value
    if (value === "") return
    dispatch(addList(value))
    dispatch(saveThisLists())
    event.target.value = ""
  }
  const getclassNameArrow = useMemo(() => {
    if (nowLists.length === 0) return "hidden "
    if (nowLists.every(list => list.status === true)) return "deepArrow "
  }, [nowLists])

  return (
    <div id="input">
      <span
        className={"arrow " + getclassNameArrow}
        onClick={() => dispatch(changeAllListsStatus())}
      />
      <input
        type="text"
        className="valueInput"
        onKeyUp={(event) => inputAddList(event)}
        placeholder="What needs to be done?"
      />
    </div>
  )
}
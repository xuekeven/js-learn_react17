import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getLastLists } from "../../redux/slice"
import Input from "../Input";
import List from "../List"
import CtrlButtons from "../CtrlButtons"
import "./style.scss"

export default function ToDos() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLastLists())
  }, [])

  return (
    <div id="todos">
      <p className="todos-title">redux-todos</p>
      <div className="todos-content">
        <Input />
        <List />
        <CtrlButtons />
      </div>
    </div>
  )
}
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = (props) => {
  let input
  const dispatch = props.dispatch
  console.log(props)
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) return
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

// 连接 React 组件与 Redux store。连接操作不会改变原来的组件类。反而返回一个新的已与 Redux store 连接的组件类。
export default connect()(AddTodo)

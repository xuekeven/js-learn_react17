import React from 'react'
import { connect } from 'react-redux'
import TreeNode from './TreeNode/TreeNode'
import './App.scss'

const App = ({ state }: { state: any }) => {
  const Tree = (data: TreeNode[] = []) => {
    return (data.map((item: TreeNode) => {
      return (
        <TreeNode item={item} key={item.id}>
          {Tree(item.children)}
        </TreeNode>
      )
    }))
  }
  return (
    <div id='App'>
      {Tree(state)}
    </div >
  )
}

const mapStateToProps = (state: TreeNode[]) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(App)
import React from 'react'
import { connect } from 'react-redux'
import Tree from './Tree/Tree'
import './App.scss'

const App = ({ state }: { state:any }) => {
  return (
    <div id='App'>
      <Tree data={state} />
    </div >
  )
}

const mapStateToProps = (state: TreeNode[]) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(App)
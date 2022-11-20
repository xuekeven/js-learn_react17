import { createStore } from "redux"
import { data } from "../common/data"

export const store = createStore(
  (state: TreeNode[] = data, action: action) => {
    switch (action.type) {
      case 'DRAG_START':
        outNode = (action as action_DRAG_START).item
        return state
      case 'DROP_VALUE':
        const inNode: TreeNode = (action as action_DROP_VALUE).item
        const newStateOne = state.slice()
        drapNode(newStateOne, inNode)
        return newStateOne
      case 'DROP_VALUE_TOP':
        const broNode: TreeNode = (action as action_DROP_VALUE_TOP).item
        const newStateTwo = state.slice()
        sortNode(newStateTwo, broNode)
        return newStateTwo
      default:
        return state
    }
  }
)

let outNode: TreeNode

const drapNode = (arr: TreeNode[], inNode: TreeNode) => {
  if (Object.is(inNode.fatherId, NaN) || outNode === inNode) return
  const changeNode = (array: TreeNode[]) => {
    for (let ele of array) {
      if (!finding) break
      if (ele.id === outNode.id) {
        ele.fatherId = inNode.id
        if (!inNode.children) inNode.children = []
        inNode.children.push(outNode)
        finding = false
        return true
      } else if (ele.children) {
        const res = changeNode(ele.children)
        if (res) {
          const index = ele.children.indexOf(outNode)
          ele.children.splice(index, 1)
          if (ele.children.length === 0) ele.children = undefined
        }
      }
    }
  }
  let finding: boolean = true
  changeNode(arr)
}

const sortNode = (arr: TreeNode[], broNode: TreeNode) => {
  if (outNode === broNode) return
  const deleteOutNode = (array: TreeNode[]) => {
    for (let ele of array) {
      if (!finding) break
      if (ele.id === outNode.id) {
        finding = false
        return true
      } else if (ele.children) {
        const res = deleteOutNode(ele.children)
        if (res) {
          const index = ele.children.indexOf(outNode)
          ele.children.splice(index, 1)
          if (ele.children.length === 0) ele.children = undefined
        }
      }
    }
  }
  const inNewNode = (array: TreeNode[]) => {
    for (let ele of array) {
      if (!finding) break
      if (ele.id === broNode.id) {
        finding = false
        return true
      } else if (ele.children) {
        const res = inNewNode(ele.children)
        if (res) {
          outNode.fatherId = ele.id
          const index = ele.children.indexOf(broNode)
          ele.children.splice(index, 0, outNode)
          if (ele.children.length === 0) ele.children = undefined
        }
      }
    }
  }
  let finding: boolean = true
  deleteOutNode(arr)
  finding = true
  inNewNode(arr)
}
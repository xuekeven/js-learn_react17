import { createStore } from "redux"
import { data } from "../common/data"

export const store = createStore(
  (state: TreeNode[] = data, action: action) => {
    switch (action.type) {
      case 'CHANGE_NODE_CHOSEN':
        const newState = state.slice()
        changeNodeChosen(newState, (action as action_CHANGE_NODE_CHOSEN).id)
        localStorage.chooseTreeData = JSON.stringify(newState)
        return newState
      default:
        return state
    }
  }
)

const changeNodeChosen = (arr: TreeNode[], id: number) => {
  const findNode: any = (array: TreeNode[]) => {
    for (let ele of array) {
      if (!finding) break
      if (ele.id === id) {
        ele.chosen = !ele.chosen
        changeChildrenChosen(ele)
        finding = false
        return ele.chosen
      } else if (ele.children) {
        console.log(ele)
        const res = findNode(ele.children)
        if (!finding) return changeFatherChosen(ele, res)
      }
    }
  }
  let finding: boolean = true
  findNode(arr)
}

const changeChildrenChosen = (ele: TreeNode) => {
  if (!ele.children) return
  if (ele.chosen) ele.childrenChosen = ele.children.length
  else ele.childrenChosen = 0
  ele.children.forEach(item => {
    item.chosen = ele.chosen
    changeChildrenChosen(item)
  })
}

const changeFatherChosen = (ele: TreeNode, bool: boolean | number) => {
  if (!ele.children || ele.childrenChosen === undefined) return

  if (typeof bool === 'boolean') {
    ele.childrenChosen = ele.children.filter(item => item.chosen).length
  } else {
    ele.childrenChosen += bool
  }

  if (ele.childrenChosen === ele.children.length) {
    ele.chosen = true
    return true
  } else if (ele.childrenChosen === 0) {
    ele.chosen = false
    return false
  } else {
    ele.chosen = false
    const num = 1 / ele.children.length
    if (bool > 0) return +num
    else return -num
  }
}
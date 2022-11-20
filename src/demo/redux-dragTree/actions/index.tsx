
export const dragStart = (item: TreeNode) => {
  return {
    type: 'DRAG_START',
    item
  }
}

export const dropValue = (item: TreeNode) => {
  return {
    type: 'DROP_VALUE',
    item
  }
}

export const dropValueTop = (item: TreeNode) => {
  return {
    type: 'DROP_VALUE_TOP',
    item
  }
}
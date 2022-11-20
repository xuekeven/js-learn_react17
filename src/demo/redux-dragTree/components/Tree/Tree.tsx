import React from 'react'
import TreeNode from '../TreeNode/TreeNode'

const Tree = ({ data }: { data: any }) => {
  const renderTree = (array: TreeNode[]) => {
    return (array.map((item: TreeNode) => (
      <TreeNode item={item} key={item.id}>
        {item.children ? renderTree(item.children) : null}
      </TreeNode>
    )))
  }

  return (
    <div>
      {renderTree(data)}
    </div>
  )
}

export default Tree
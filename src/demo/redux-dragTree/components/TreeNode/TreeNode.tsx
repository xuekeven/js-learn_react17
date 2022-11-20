import React, { useCallback, useState } from "react"
import { connect } from 'react-redux'
import { dragStart, dropValue, dropValueTop } from "../../actions/index"
import "./TreeNode.scss"

const TreeNode = ({ item, children, dispatch }: { item:any, children:any, dispatch:any }) => {
  let [renderChildren, setRenderChildren] = useState(true)
  let [dragOverValue, setdragOverValue] = useState(false)
  let [dragOverValueTop, setdragOverValueTop] = useState(false)
  let [draging, setDraging] = useState(false)

  const drag = useCallback((e:any, type:any) => {
    e.stopPropagation()
    if (type === 'dragStart') dispatch(dragStart(item))
    if (type === 'dropValue') dispatch(dropValue(item))
    if (type === 'dropValueTop') dispatch(dropValueTop(item))
  }, [item])

  return (
    <li
      id="dragTree"
      draggable='true'
      onDragStart={(e) => { drag(e, 'dragStart'); setDraging(draging = true) }}
      onDragEnd={() => setDraging(draging = false)}
    >
      <span
        className={`valueTop ${dragOverValueTop ? 'dragOver ' : ' '}`}
        onDragEnter={(e) => { e.preventDefault(); setdragOverValueTop(dragOverValueTop = true) }}
        onDragOver={(e) => { e.preventDefault() }}
        onDragLeave={() => { setdragOverValueTop(dragOverValueTop = false) }}
        onDrop={(e) => { setdragOverValueTop(dragOverValueTop = false); drag(e, 'dropValueTop') }}
      />
      <span
        className={`${children ? ' ' : 'hidden '} ${renderChildren ? 'fold ' : 'unfold '}`}
        onClick={() => setRenderChildren(renderChildren = !renderChildren)}
      />
      <span
        className={`${dragOverValue ? 'dragOver ' : ' '}`}
        onDragEnter={(e) => { e.preventDefault(); setdragOverValue(dragOverValue = true) }}
        onDragOver={(e) => { e.preventDefault() }}
        onDragLeave={() => { setdragOverValue(dragOverValue = false) }}
        onDrop={(e) => { setdragOverValue(dragOverValue = false); drag(e, 'dropValue') }}
      >
        {item.value}
      </span>
      <ul className={`${draging ? 'hidden ' : ' '} ${renderChildren ? ' ' : 'disappear '}`}>{children}</ul>
    </li>
  )
}

export default connect()(TreeNode)
import React, { useMemo, useState } from "react"
import { connect } from 'react-redux'
import { changeNodeChosen } from "../../actions"
import "./TreeNode.scss"

const TreeNode = (props: any) => {
  const { item, children, dispatch } = props
  let [renderChildren, setRenderChildren] = useState(true)

  const getClassName = useMemo(() => {
    if (item.chosen) return 'chosen '
    if (!item.children || item.childrenChosen === 0) return ' '
    return 'choosing '
  }, [props])

  return (
    <li id="chooseTree">
      <div className="div ">
        <span
          className={`button ${renderChildren ? 'fold ' : 'unfold '} ${children.length > 0 ? '' : 'hidden '}`}
          onClick={() => setRenderChildren(renderChildren = !renderChildren)}
        />
        <span
          className={'choose ' + getClassName}
          onClick={() => dispatch(changeNodeChosen(item.id))}
        />
        <span>{item.value}</span>
      </div>
      <ul className={renderChildren ? '' : 'disappear '}>{children}</ul>
    </li>
  )
}

export default connect()(TreeNode)
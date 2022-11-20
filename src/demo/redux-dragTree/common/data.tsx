
const originData: TreeNode[] = [
  { id: 0, value: '根节点', fatherId: NaN, chosen: false },
  { id: 1, value: '1', fatherId: 0, chosen: false },
  { id: 2, value: '1-1', fatherId: 1, chosen: false },
  { id: 3, value: '1-2', fatherId: 1, chosen: false },
  { id: 4, value: '1-3', fatherId: 1, chosen: false },
  { id: 5, value: '1-4', fatherId: 1, chosen: false },
  { id: 6, value: '1-1-1', fatherId: 2, chosen: false },
  { id: 7, value: '1-1-2', fatherId: 2, chosen: false },
  { id: 8, value: '1-1-3', fatherId: 2, chosen: false },
  { id: 9, value: '1-1-4', fatherId: 2, chosen: false },
  { id: 10, value: '1-2-1', fatherId: 3, chosen: false },
  { id: 11, value: '1-2-2', fatherId: 3, chosen: false },
  { id: 12, value: '1-3-1', fatherId: 4, chosen: false },
  { id: 13, value: '2', fatherId: 0, chosen: false }
]

const changeData = (data: TreeNode[]) => {
  const res: TreeNode[] = []
  const addChildren = (res: TreeNode[], ele: TreeNode) => {
    res.forEach((item) => {
      if (ele.fatherId === item.id) {
        if (item.children) {
          item.children.push(ele)
        } else {
          item.children = [ele]
          item.childrenChosen = 0
        }
      } else if (item.children) {
        addChildren(item.children, ele)
      }
    })
  }
  data.forEach((ele) => {
    if (Object.is(ele.fatherId, NaN)) {
      res.push(ele)
    } else {
      addChildren(res, ele)
    }
  })
  return res
}

export let data: TreeNode[]

if (localStorage.dragTreeData) {
  data = JSON.parse(localStorage.dragTreeData)
} else {
  data = changeData(originData)
} 
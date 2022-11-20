import { createSlice } from "@reduxjs/toolkit"

export const todosSlice = createSlice({
  name: 'lists',
  initialState: {
    allLists: [[]],
    nowListsNum: 0,
    buttonType: 0,
  },
  reducers: {
    // 获取上次数据
    getLastLists(state) {
      if (localStorage.reduxLists) state.allLists = [JSON.parse(localStorage.reduxLists)]
    },
    // 保存本次数据
    saveThisLists(state) {
      localStorage.reduxLists = JSON.stringify(state.allLists[state.allLists.length - 1])
    },
    // 添加新事件
    addList(state, action) {
      const { allLists, nowListsNum } = state
      const value = action.payload
      const nowLists = allLists[nowListsNum].concat()
      if (allLists.length > nowListsNum) {
        allLists.splice(nowListsNum + 1, allLists.length - nowListsNum - 1)
      }
      nowLists.push({
        id: new Date().getTime(),
        status: false,
        value
      })
      allLists.push(nowLists)
      state.nowListsNum++
      // state.nowListsNum = state.allLists.length - 1
    },
    // 改变事件状态
    changeListStatus(state, action) {
      const { allLists, nowListsNum } = state
      const id = action.payload
      const nowLists = allLists[nowListsNum].concat()
      nowLists.find(list => {
        if (list.id === id) {
          list.status = !list.status
        }
      })
    },
    // 改变事件内容
    changeListValue(state, action) {
      const { allLists, nowListsNum } = state
      const nowLists = allLists[nowListsNum]
      nowLists.find(list => {
        if (list.id === action.payload[0]) {
          list.value = action.payload[1].target.value
        }
      })
    },
    // 改变所有事件状态
    changeAllListsStatus(state) {
      const { allLists, nowListsNum } = state
      const nowLists = allLists[nowListsNum]
      const allListsCompleted = nowLists.every(list => list.status === true)
      if (allListsCompleted) nowLists.forEach(list => list.status = false)
      else nowLists.forEach(list => list.status = true)
    },
    // 删除已完成事件
    clearCompleted(state) {
      const { allLists, nowListsNum } = state
      const nowLists = allLists[nowListsNum].concat()
      for (let i = nowLists.length - 1; i > -1; i--) {
        if (nowLists[i].status) nowLists.splice(i, 1)
      }
      if (allLists.length > nowListsNum) {
        allLists.splice(nowListsNum + 1, allLists.length - nowListsNum - 1)
      }
      allLists.push(nowLists)
      state.nowListsNum++
      // state.nowListsNum = state.allLists.length - 1
    },
    // 改变列表展示
    changeButtonType(state, action) {
      state.buttonType = action.payload
    },
    // 回到历史状态
    jumpToHistory(state, action) {
      state.nowListsNum += action.payload
    }
  }
})

export default todosSlice.reducer
export const selectState = (state) => state.todos
export const {
  getLastLists,
  saveThisLists,
  addList,
  changeListStatus,
  changeListValue,
  changeAllListsStatus,
  clearCompleted,
  changeButtonType,
  jumpToHistory
} = todosSlice.actions
import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import ToDos from "./components/ToDos"
import "./style.scss"

export default function () {
  return (
    <Provider store={store}>
      <ToDos />
    </Provider>
  )
}
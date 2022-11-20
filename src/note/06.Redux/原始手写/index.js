import React from 'react'
import { Provider } from 'react-redux'
import { store } from './reducers'
import App from './components/App'
import "./style.scss"

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

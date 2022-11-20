import React from 'react'
import { Provider } from 'react-redux'
import { store } from './reducers/index'
import App from './components/App'

export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
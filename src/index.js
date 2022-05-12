import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import { configureStore } from 'redux'

const store = configureStore()

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// https://www.youtube.com/watch?v=DYtYyFOfpBY 15:44

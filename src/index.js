import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import store from './redux/store'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Provider>,
  document.getElementById('root')
)

// https://www.youtube.com/watch?v=DYtYyFOfpBY 18:33

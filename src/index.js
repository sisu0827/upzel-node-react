import React from 'react'
import ReactDOM from 'react-dom'

import Store from './store'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/app.scss'

ReactDOM.render(
  <Store />,
  document.getElementById('root')
)

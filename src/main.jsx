import React from 'react'
import ReactDOM from 'react-dom/client'
import { PaginaPrincipal } from './components/PaginaPrincipal'
import { Login } from './components/Login'

ReactDOM.createRoot(document.getElementById('root1')).render(
  <React.StrictMode>
    <Login />
    <PaginaPrincipal />
  </React.StrictMode>
)

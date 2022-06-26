import React from 'react'
import { Header } from './components/Header/Header'
import { Routes } from './routes'
import './styles.css'

export const App = () => (
  <React.Fragment>
    <div className="App">
      <Header />
      <Routes />
    </div>
  </React.Fragment>
)
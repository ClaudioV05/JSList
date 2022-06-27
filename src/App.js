import React from 'react'
import { Header } from './components/Header/Header'
import { Routes } from './routes'
import './styles.css'

export const App = () => (
  <>
    <div className="App">
      <Header Title='Listing Users'/>
      <Routes />
    </div>
  </>
)
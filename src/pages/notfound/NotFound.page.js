import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export class NotFound extends Component {
  render() {
    return (
      <>
        <div className="container">
          <span>
            <h1>Página não encontrada!</h1>
          </span>
          <Link to="/" className="labelLink"><h1>Voltar.</h1></Link>
        </div>
      </>
    )
  }
}
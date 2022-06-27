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
          <br></br>
          <Link to="/" className="labelLink"><h1>Clique aqui para voltar a página anterior.</h1></Link>
        </div>
      </>
    )
  }
}
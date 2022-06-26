import React from "react"
import { Link } from "react-router-dom"
import './style.css'

export const NotFound = () => {
  return (
    <>
      <div className="container">
        <span>
          <h1>Página não encontrada!</h1>
        </span>
        <Link to="/"><h1>Voltar.</h1></Link>
      </div>
    </>
  )
}
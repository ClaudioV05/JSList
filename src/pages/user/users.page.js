import React, { Component } from 'react'
import { api } from '../../services/api'
import './style.css'

export class User extends Component {
  state = {
    listUser: [],
    page: 0
  }

  constructor(){
    super()
    this.loadUser = this.loadUser.bind(this)
  }

   componentDidMount() {
    this.loadUser()
  }

  async loadUser(){
    const response = await api.get(`/users`)

    this.setState({
      listUser: response.data,
      page: response.data.length
    })
  }

  render() {
    const { listUser, page } = this.state
    return (
      <>
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page > 1} onClick={this.nextPage}>Proximo</button>
        </div>

        {listUser.map(e => (
          <div className="cards" key={e.id}>
            <article>
              <strong>{e.id}: {e.name}</strong>
              <p>Contacts: {e.phone} | Email: {e.email}</p>
            </article>
          </div>
        ))}
      </>
    )
  }
}
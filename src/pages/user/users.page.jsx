import React, { Component } from 'react'
import { api } from '../../services/api'
import './style.css'

export class User extends Component {
  state = {
    listUser: [],
  }

  constructor() {
    super()
    this.loadUser = this.loadUser.bind(this)
  }

  componentDidMount() {
    this.loadUser()
  }

  async loadUser() {

    const response = await api.get(`/users`).catch(e => {
      let aux = e.message.toLowerCase();

      if (aux = 'network error') {
        alert('Internet desconectada!')
      }
    })

    this.setState({
      listUser: response.data
    })
  }

  render() {
    const { listUser } = this.state
    return (
      <>
        {listUser.map(e => (
          <div className="cards" key={e.id}>
            <article>
              <strong>{e.id}° {e.name}</strong>
              <hr />
              <p>Contacts: {e.phone}</p>
              <p>Email: {e.email}</p>
            </article>
          </div>
        ))}
      </>
    )
  }
} 
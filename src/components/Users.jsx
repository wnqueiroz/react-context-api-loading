import React, { Component } from 'react'

import { getUsers } from '../services/api'

class Users extends Component {

    getUsers = async () => {
        const response = await getUsers()
        console.log({ response })
    }

    render() {
        return (
            <button onClick={this.getUsers}>Buscar usuários</button>
        )
    }
}

export default Users
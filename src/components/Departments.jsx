import React, { Component } from 'react'

import { getDepartments } from '../services/api'

class Departments extends Component {

    getDepartments = async () => {
        const response = await getDepartments()
        console.log({ response })
    }

    render() {
        return (
            <button onClick={this.getDepartments}>Buscar departamentos</button>
        )
    }
}

export default Departments
import React, { Component, Fragment } from 'react'

import Departments from './components/Departments'
import Users from './components/Users'

class App extends Component {
	render() {
		return (
			<Fragment>
				<Users />
				<Departments />
			</Fragment>
		)
	}
}

export default App

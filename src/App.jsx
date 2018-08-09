import React, { Component, Fragment } from 'react'

import Departments from './components/Departments'
import Users from './components/Users'

import './index.css'

const LoadingContext = React.createContext({
	loading: false,
	message: null,
	showMessage: message => { },
	hideLoading: () => { }
})

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

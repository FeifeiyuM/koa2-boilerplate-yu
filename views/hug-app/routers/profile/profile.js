import React, { Component } from 'react'

/*import './helloworld.less'*/

class Profile extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log('in profile')
		return (
			<div className='profile'>
				<h1> Profile </h1>
				<p>My name is Feifeiyu</p>
			</div>
		)
	}
}

module.exports = Profile
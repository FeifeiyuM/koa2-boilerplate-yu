import React, { Component } from 'react'

class Google extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log('in helloworld')
		return (
			<div className='hello-go'>
				<h1> Hello Google! </h1>
			</div>
		)
	}
}

module.exports = Google
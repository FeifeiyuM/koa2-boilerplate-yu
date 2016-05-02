import React, { Component } from 'react'

class Facebook extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log('in helloworld')
		return (
			<div className='hello-fb'>
				<h1> Hello Facebook! </h1>
			</div>
		)
	}
}

module.exports = Facebook
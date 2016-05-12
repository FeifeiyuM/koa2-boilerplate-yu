
import React, { Component } from 'react'
import { Link } from 'react-router'

import './helloworld.less'

class HelloWorld extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		console.log('in helloworld')
		return (
			<div className='hello-world'>
				<h1> Hello World! Feifeiyu! OK ! </h1>
				 
				 <div>
				 	<h4>Facebook</h4>
				 	<Link to='/helloworld/facebook'>Facebook</Link>  
				 	<h4>Google</h4>
				 	<Link to='/helloworld/google'>Google</Link>
				 </div>
				 <div>
				 	{ this.props.children || <h1>NUll</h1> }
				 </div>
			</div>
		)
	}
}

module.exports = HelloWorld

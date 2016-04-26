import React, { Component } from 'react'
import { render } from 'react-dom'

import './index.less'

class Start extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div className='hello-world'>
				<h1>Hello World!</h1>
			</div>
		)
	}
}

render(
	<Start />,
	document.getElementById('index-page')
)


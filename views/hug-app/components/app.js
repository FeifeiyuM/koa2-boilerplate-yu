import React, { Component } from 'react'
import { Link } from 'react-router'

import './app.less'

class App extends Component {

	render() {
		console.log('in App')
		//profile school为通过路由引入的组件，在引入时定义为对象
		//children 通过路由引入组件，在引入时未定义为对象
		const { profile, school, children } = this.props  
		let content = null

		if(children !== null && children !== '' && children !== undefined) {
			content = (
				<div>
					{ children }
				</div>
			)
		} else if(school && profile) {
			content = (
				<div>
					<div>
						{ profile }
					</div>
					<div>
						{ school }
					</div>
				</div>
			)
		}

		return(
			<div>
				<h1>App main Container</h1>
				<div>
				 	<Link to="/helloworld">helloworld</Link><br/>
				 	<Link to="/profile">Profile</Link>
				</div>


				 { content || <h1> NULL </h1> }

			</div>
		)
	}
}

module.exports =  App


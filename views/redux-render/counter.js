import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as counterAactions from './action'
import './counter.less'

class Counter extends Component {
	constructor(props) {
		super(props)
	}

	incrementValue() {
		const { action } = this.props

		action.increment()
	}

	decrementValue() {
		const { action } = this.props

		action.decrement()
	}

	render() {
		const { cnt } = this.props.cntState

		return (
			<div>
				<h1>Counter</h1>
				<p>Count: { cnt } </p>
				<div className='btn-s'>
					<button onClick={this.incrementValue.bind(this)}>INCREMENT</button><br />
					<button onClick={this.decrementValue.bind(this)}>DECREMENT</button><br />
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return ({
		cntState: state   //import reducer states
	})
}

function mapDispatchToProps(dispatch) {
	return ({
		action: bindActionCreators(counterAactions, dispatch)  //bind reducer action to 
	})
}

Counter = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)

export default Counter


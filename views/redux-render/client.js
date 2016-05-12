import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import counterReducer from './reducer'
import Counter from './counter'
import { increment } from './action'

const initState = window.__INITIAL_STATE__

let store = createStore(counterReducer, initState)

let rootEle = (
	<Provider store={store}>
		<Counter />
	</Provider>
)

render(
	rootEle,
	document.getElementById('root-index')
)

var serverSideStyle = document.getElementById("server-side-style");
if(serverSideStyle)
	document.getElementsByTagName("head")[0].removeChild(serverSideStyle);
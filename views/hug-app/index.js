import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

const rootRoute = {
	component: 'div',
	childRoutes: [ {
		path: '/',
		component: require('./components/app'),  //引入组件
		childRoutes: [
     		 require('./routers/helloworld'),   //异步加载组件
     		 require('./routers/profile') 
    	]
	} ]
}

let root = ( <Router history={ browserHistory } routes={ rootRoute } /> )

render (
	root, 
	document.getElementById('index-page')
)


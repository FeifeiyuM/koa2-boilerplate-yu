import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import counterReducer from './reducer'

import Counter from './counter'
import styleCollector from '../../style-loader/style-collector'

let initState = {
	cnt: 3
}
let store = createStore(counterReducer, initState)
let initialState = store.getState()
console.dir('initialState', initialState)

let CounterEle = (
	<Provider store={store}>
		<Counter />
	</Provider>
)

let wholePage = (scriptPath) => {

  let style = styleCollector.collect()
  console.log('[page]', style)
  let html = renderToString( CounterEle )

//使用es6模板字符串，将参数代入html
  return (   
  `<html>
      <head>
        <title>React Server Side</title>
        <style id='server-side-style'>${style}</style>
      </head>
      <body>
        <div id="root-index">${html}</div>

        <script>
            window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/common/common.js"></script>
        <script src="/static/redux-render/client.bundle.js"></script>
      </body>
    </html>
    `
  )
}

module.exports = wholePage
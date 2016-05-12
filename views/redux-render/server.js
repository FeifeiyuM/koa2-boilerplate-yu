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

let CounterEle = (
	<Provider store={store}>
		<Counter />
	</Provider>
)

let wholePage = (scriptPath) => {

  let style = styleCollector.collect()
  console.log('[page]', style)
  let html = renderToString( CounterEle )

  return renderToString (
    <html>
      <head>
        <title>React Server Side</title>
        <style id='server-side-style' dangerouslySetInnerHTML={{__html: style}}></style>
      </head>
      <body>
        <div id="root-index"  dangerouslySetInnerHTML={{__html: html}}></div>

        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
         <script src="/static/common/common.js"></script>
        <script src="/static/redux-render/client.bundle.js"></script>
      </body>
    </html>
  )
}

module.exports = wholePage